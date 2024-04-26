import button from './schemas/components/button/button';
import colorSolid from './schemas/abstracts/background/solidColor';
import container from './schemas/container';
import header from './schemas/header';
import imageSchema from './schemas/abstracts/image';
import linkSchema from './schemas/abstracts/link';
import menu from './schemas/components/menu/menu';
import menuButton from './schemas/components/menu/menuButton';
import page from './schemas/page';
import theme from './schemas/theme';

// TODO: Name all imports and import them by name with {}

export const schema = {
  types: [
    imageSchema,
    linkSchema,
    menu,
    menuButton,
    container,
    header,
    page,
    theme,
    colorSolid,
    button,
  ],
};
