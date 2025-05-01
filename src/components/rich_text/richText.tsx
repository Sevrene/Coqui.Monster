import type { SerializedEditorState } from '@payloadcms/richtext-lexical/lexical';
import { RichText as RichTextConverter } from '@payloadcms/richtext-lexical/react';
import { jsxConverters } from './jsxConverters';

interface RichTextProps {
  lexicalData: SerializedEditorState;
}

export function RichText({ lexicalData }: RichTextProps) {
  return <RichTextConverter converters={jsxConverters} data={lexicalData} />;
}
