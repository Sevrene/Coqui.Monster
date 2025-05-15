import {
  JSXConvertersFunction,
  LinkJSXConverter,
} from '@payloadcms/richtext-lexical/react';

import { DefaultNodeTypes } from '@payloadcms/richtext-lexical';
import { HeadingConverter } from './elements/heading';
import { LinkConverter } from './elements/link';
import { internalLink } from './utils/internalLink';

export const jsxConverters: JSXConvertersFunction<DefaultNodeTypes> = ({
  defaultConverters,
}) => ({
  ...defaultConverters,
  ...LinkJSXConverter({ internalDocToHref: internalLink }),
  heading: HeadingConverter,
  link: LinkConverter,
});
