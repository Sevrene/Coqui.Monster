import type {
  SerializedHeadingNode,
  SerializedLinkNode,
} from '@payloadcms/richtext-lexical';

import { Link as MUILink } from '@mui/material';
import type { TypographyProps } from '@mui/material/Typography';
import { JSXConverter } from '@payloadcms/richtext-lexical/react';
import Link from 'next/link';
import React from 'react';

// Map Payload heading tags to MUI Typography variants
const tagToVariant: Record<
  SerializedHeadingNode['tag'],
  TypographyProps['variant']
> = {
  h1: 'h1',
  h2: 'h2',
  h3: 'h3',
  h4: 'h4',
  h5: 'h5',
  h6: 'h6',
};

const LinkRenderer = ({
  node,
  children,
}: {
  node: SerializedLinkNode;
  children: React.ReactNode;
}) => {
  const { url, newTab } = node.fields;

  return (
    <MUILink
      component={Link}
      href={url}
      target={newTab ? '_blank' : undefined}
      rel={newTab ? 'noopener noreferrer' : undefined}
      sx={{
        textDecoration: 'underline',
        color: 'link.main',
      }}
    >
      {children}
    </MUILink>
  );
};

export const LinkConverter: JSXConverter<SerializedLinkNode> = (props) => {
  const { node, nodesToJSX } = props;
  return (
    <LinkRenderer node={node}>
      {nodesToJSX({ ...props, nodes: node.children })}
    </LinkRenderer>
  );
};
