/**
 * This configuration is used to for the Sanity Studio that’s mounted on the `\src\app\admin\[[...index]]\page.jsx` route
 */

// Go to https://www.sanity.io/docs/api-versioning to learn how API versioning works

import { apiVersion, dataset, projectId } from '/sanity/env';

import InheritWrapper from './sanity/components/InheritWrapper';
import NullableWrapper from './sanity/components/NullableWrapper';
import { colorInput } from '@sanity/color-input';
import { defineConfig } from 'sanity';
import { deskTool } from 'sanity/desk';
import { schema } from '/sanity/schema';
import { visionTool } from '@sanity/vision';

const GlobalInputComponentModifier = (props) => {
  if (props.schemaType?.options?.nullable) {
    return <InheritWrapper {...props} />;
  }

  return props.renderDefault(props);
};

export default defineConfig({
  title: 'Coqui.Monster',
  basePath: '/admin',
  projectId,
  dataset,
  schema,
  plugins: [
    deskTool(),
    // Vision is a tool that lets you query your content with GROQ in the studio
    // https://www.sanity.io/docs/the-vision-plugin
    visionTool({ defaultApiVersion: apiVersion }),
    colorInput(),
  ],
  form: {
    components: {
      input: GlobalInputComponentModifier,
    },
  },
});

// TODO: Add icon to config
