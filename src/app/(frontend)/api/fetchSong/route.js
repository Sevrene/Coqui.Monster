import fs from 'fs';
import { NextResponse } from 'next/server';
import path from 'path';

// TODO: Redo

/**
 * Handles the GET request for fetching a song.
 * @param {Request} nextReq - The incoming request object.
 * @returns {Response} - The response object containing the song file or an error message.
 */
export function GET(nextReq) {
  const referer = nextReq.headers.get('Referer');

  if (!referer || !referer.startsWith(process.env.NEXT_PUBLIC_BASE_URL)) {
    return NextResponse.json({ error: 'Unauthorized' }, { status: 401 });
  }

  const filename = nextReq.nextUrl.searchParams.get('filename');
  const filePath = path.join(process.cwd(), '/src/private/music', filename);

  if (!fs.existsSync(filePath)) {
    return NextResponse.json({ error: 'File not found' }, { status: 404 });
  }

  const stat = fs.statSync(filePath);
  const fileSize = stat.size;

  const head = {
    'Content-Length': fileSize,
    'Content-Type': 'audio/mpeg',
  };
  const file = fs.createReadStream(filePath);

  return new Response(file, { status: 200, headers: head });
}
