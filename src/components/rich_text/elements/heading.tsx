import type { TypographyProps } from '@mui/material/Typography';
import Typography from '@mui/material/Typography';
import type { SerializedHeadingNode } from '@payloadcms/richtext-lexical';
import { JSXConverter } from '@payloadcms/richtext-lexical/react';
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

const Heading = ({
  node,
  children,
}: {
  node: SerializedHeadingNode;
  children: React.ReactNode;
}) => {
  const variant = tagToVariant[node.tag];

  // Fallback to 'h6' if the tag is somehow unexpected
  const safeVariant = variant || 'h6';

  return (
    <Typography variant={safeVariant} gutterBottom>
      {children}
    </Typography>
  );
};

export const HeadingConverter: JSXConverter<SerializedHeadingNode> = (
  props
) => {
  const { node, nodesToJSX } = props;
  return (
    <Heading node={node}>
      {nodesToJSX({ ...props, nodes: node.children })}
    </Heading>
  );
};
