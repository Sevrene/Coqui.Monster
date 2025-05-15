import { draftMode } from 'next/headers';

export async function GET(): Promise<Response> {
  // Exit Preview Mode
  (await draftMode()).disable();
  return new Response('Draft mode is disabled');
}
