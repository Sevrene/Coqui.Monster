import type { SerializedLinkNode } from '@payloadcms/richtext-lexical';

interface Redirect {
  to: {
    url: string;
  };
}

export const internalLink = ({
  linkNode,
}: {
  linkNode: SerializedLinkNode;
}) => {
  const { relationTo, value } = linkNode.fields.doc!;
  if (typeof value !== 'object') {
    throw new Error('Expected value to be an object');
  }

  switch (relationTo) {
    case 'redirects':
      const typedValue = value as unknown as Redirect;
      return typedValue?.to?.url || '/#';
    default:
      console.warn(
        `No converter found for relationTo "${relationTo}". Defaulting to "/#"`
      );
      return `/#`;
  }
};
