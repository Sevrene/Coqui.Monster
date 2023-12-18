import container from './schemas/container';
import header from './schemas/header';
import imageSchema from './schemas/abstracts/image';
import linkSchema from './schemas/abstracts/link';
import menu from './schemas/abstracts/menu';
import page from './schemas/page';
// TODO: Name all imports and import them by name with {}

export const schema = {
  types: [imageSchema, linkSchema, menu, container, header, page],
};
