import configPromise from '@payload-config';
import { draftMode } from 'next/headers';
import { redirect } from 'next/navigation';
import type { PayloadRequest } from 'payload';
import { getPayload } from 'payload';

export async function GET(
  req: {
    cookies: {
      get: (name: string) => {
        value: string;
      };
    };
  } & Request
): Promise<Response> {
  const payload = await getPayload({ config: configPromise });

  const { searchParams } = new URL(req.url);

  const preview = searchParams.get('preview');
  const previewSecret = searchParams.get('previewSecret');

  if (preview !== 'true') {
    return new Response(
      'This endpoint can only be used for relative previews',
      { status: 500 }
    );
  }

  if (previewSecret !== process.env.PREVIEW_SECRET) {
    return new Response('You are not allowed to preview this page', {
      status: 403,
    });
  }

  let user;

  try {
    user = await payload.auth({
      req: req as unknown as PayloadRequest,
      headers: req.headers,
    });
  } catch (error) {
    payload.logger.error(
      { err: error },
      'Error verifying token for live preview'
    );
    return new Response('You are not allowed to preview this page', {
      status: 403,
    });
  }

  const draft = await draftMode();

  if (!user) {
    draft.disable();
    return new Response('You are not allowed to preview this page', {
      status: 403,
    });
  }

  // You can add additional checks here to see if the user is allowed to preview this page

  draft.enable();

  redirect('/?preview=true');
}
