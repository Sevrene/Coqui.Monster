import type { PayloadRequest, TypedUser } from 'payload';

import configPromise from '@payload-config';
import { draftMode } from 'next/headers';
import { redirect } from 'next/navigation';
import { getPayload } from 'payload';

export async function GET(req: Request): Promise<Response> {
  // Get draft mode early to disable it if any checks fail
  const draft = await draftMode();
  const { searchParams } = new URL(req.url);

  // Check if the request is a preview request
  const preview: string | null = searchParams.get('preview');
  if (preview !== 'true') {
    draft.disable();
    return new Response('This endpoint can only be used for previews', {
      status: 500,
    });
  }

  // Check if the preview secret is provided and matches the environment variable
  const previewSecret: string | null = searchParams.get('previewSecret');
  if (previewSecret !== process.env.PREVIEW_SECRET) {
    draft.disable();
    return new Response('You are not allowed to preview this page', {
      status: 403,
    });
  }

  // Query the Payload user from the request
  const payload = await getPayload({ config: configPromise });
  let user: TypedUser | null = null;

  try {
    user = await payload
      .auth({
        req: req as PayloadRequest,
        headers: req.headers,
      })
      .then((auth) => (auth?.user ? auth.user : null));
  } catch (error) {
    payload.logger.error(
      { err: error },
      'Error verifying token for live preview'
    );

    draft.disable();
    return new Response('You are not allowed to preview this page', {
      status: 403,
    });
  }

  if (!user) {
    draft.disable();
    return new Response('You are not allowed to preview this page', {
      status: 403,
    });
  }

  // Enter Preview Mode
  draft.enable();
  redirect('/?preview=true');
}
