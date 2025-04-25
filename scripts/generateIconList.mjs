import * as TablerIcons from '@tabler/icons-react';

import React from 'react';
import { fileURLToPath } from 'url';
import fs from 'fs';
import path from 'path';
import { renderToStaticMarkup } from 'react-dom/server';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const outputJsonPath = path.resolve(
  __dirname,
  '../src/cms_data/tabler-icons.json'
);

const generateCMSJson = () => {
  console.log('🚀 Generating Tabler icon list...');

  const icons = Object.keys(TablerIcons)
    .filter((key) => key.startsWith('Icon'))
    .map((key) => {
      const staticMarkup = renderToStaticMarkup(
        React.createElement(TablerIcons[key], null)
      );
      const name = key.replace('Icon', '');

      return {
        name: name,
        component: staticMarkup,
      };
    });

  // Add 3AM logo SVG icon
  const customIconPath = path.resolve(
    __dirname,
    '../public/images/brand/logo/3amLogo.svg'
  );
  try {
    const customSvgContent = fs.readFileSync(customIconPath, 'utf8');
    icons.push({
      name: '3amLogo',
      component: customSvgContent,
    });
  } catch (err) {
    console.error(
      `❌ Failed to read custom SVG icon from ${customIconPath}`,
      err
    );
  }

  fs.writeFileSync(outputJsonPath, JSON.stringify(icons, null, 2));
  console.log(`✅ Wrote CMS icon list to ${outputJsonPath}`);
};

const main = () => {
  generateCMSJson();
};

main();
