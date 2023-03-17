import { builder, Builder } from "@builder.io/react";
import BuilderComponents from "./components/Builder.io Components";

const apiKey = process.env.REACT_APP_BUILDER_IO_ACCESS_TOKEN;

if (!apiKey) {
  console.error(
    "Builder.io API key not found. Please create a .env with a valid API key to continue."
  );
} else {
  builder.init(apiKey);
}

/**
  Builder Components
  @param {React.Component} component - The React component to register.
  All components from Builder.io Components folder are automatically imported under BuilderComponents.
  @param {Object} options - An object with properties defining the component's behavior and inputs.
  
  Properties for the Component Registration Object
  @property {string} name - The component name, a required property that specifies the name of the component as it will appear in the Builder editor.
  @property {string} image - An optional but highly recommended property that allows developers to set an image that will be displayed as a thumbnail for the component in the Builder editor.
  Utilize https://tabler-icons.io/ and copy the png download link
  @property {Array<Object>} inputs - An array of objects that defines the inputs that the component accepts. Each object in the array represents an input and can contain properties such as name, type, and defaultValue.

  Full Documentation
  https://www.builder.io/c/docs/custom-components-input-types
*/
Builder.registerComponent(BuilderComponents.muiAccordion, {
  name: "accordion",
  image:
    "https://tabler-icons.io/static/tabler-icons/icons-png/layout-navbar-expand.png",
  inputs: [
    {
      name: "defaultOpen",
      type: "boolean",
      helperText: "Refresh the preview to view defaults",
      defaultValue: false,
    },
    {
      name: "lockOpen",
      type: "boolean",
      helperText:
        "Lock the accordion in the open state. Refresh the preview to take effect",
      showIf: `options.get('defaultOpen')`,
      defaultValue: false,
    },
    {
      name: "variant",
      type: "text",
      helperText: "Rendering rules variants",
      defaultValue: "default",
      enum: ["default", "outlined"],
    },
    {
      name: "elevation",
      type: "number",
      helperText:
        "A value from 0-24 [inclusive] specifying how elevated this element should appear",
      defaultValue: 1,
      min: 0,
      max: 24,
      step: 1,
    },
    {
      name: "icon",
      type: "object",
      helperText: "Righthand Icon used to identify an Expand More section",
      defaultValue: {
        showIcon: true,
        iconType: "default",
      },
      subFields: [
        {
          name: "showIcon",
          type: "boolean",
          defaultValue: true,
        },
        {
          name: "iconType",
          type: "text",
          enum: ["default", "upload"],
          defaultValue: "default",
          showIf: `options.get('showIcon')`,
        },
        {
          name: "iconFile",
          type: "file",
          helperText: "SVG files are preferred, but png is also accepted",
          showIf: `options.get('iconType') === "upload"`,
        },
      ],
    },
    {
      name: "divider",
      type: "object",
      helperText: "Divider line between header and collapsed content",
      subFields: [
        {
          name: "showDivider",
          type: "boolean",
        },
        {
          name: "dividerColor",
          type: "color",
          showIf: `options.get('showDivider')`,
        },
      ],
    },
    {
      name: "disable",
      type: "boolean",
      helperText: "Disable the accordions ability to expand",
      defaultValue: false,
    },
    {
      name: "disableRipple",
      type: "boolean",
      helperText: "Disable the ripple effect when clicked",
      defaultValue: true,
    },
    {
      name: "summary",
      type: "uiBlocks",
      defaultValue: [],
    },
    {
      name: "content",
      type: "uiBlocks",
      defaultValue: [],
    },
  ],
});

Builder.registerComponent(BuilderComponents.muiList, {
  name: "list",
  image:
    "https://tabler-icons.io/static/tabler-icons/icons-png/list.png",
  inputs: [
    {
      name: "dense",
      type: "boolean",
      defaultValue: true,
    },
    {
      name: "maxDisplayHeight",
      type: "number",
      helperText: "Max height in pixels. Leave empty for no max height."
    },
    {
      name: "icon",
      type: "object",
      defaultValue: {
        showIcon: true,
        iconType: "default",
      },
      subFields: [
        {
          name: "showIcon",
          type: "boolean",
          defaultValue: true,
        },
        {
          name: "iconType",
          type: "text",
          enum: ["default", "upload"],
          defaultValue: "default",
          showIf: `options.get('showIcon')`,
        },
        {
          name: "iconFile",
          type: "file",
          helperText: "SVG files are preferred, but png is also accepted",
          showIf: `options.get('iconType') === "upload"`,
        },
      ],
    },
    {
      name: "subsections",
      type: "list",
      defaultValue: [
        {
          includeSubheader: false,
          subheader: "Subheader Title",
          items: [],
        },
      ],
      subFields: [
        {
          name: "includeSubheader",
          type: "boolean",
          helperText: "Include a subheader above this subsection",
          defaultValue: false,
        },
        {
          name: "subheader",
          type: "text",
          defaultValue: "Subheader Title",
          showIf: `options.get('includeSubheader')`,
        },
        {
          name: "items",
          type: "list",
          defaultValue: [
            {
              text: "List Item",
            }
          ],
          subFields: [
            {
              name: "text",
              type: "text",
              defaultValue: "List Item",
            },
            {
              name: "link",
              type: "url",
            },
          ],
        },
      ],
    },
  ],
});

Builder.registerComponent(BuilderComponents.simpleTabs, {
  name: "tabs",
  image:
    "https://tabler-icons.io/static/tabler-icons/icons-png/browser.png",
  inputs: [
    {
      name: "defaultTabIndex",
      type: "number",
      defaultValue: 0,
      required: true,
    },
    {
      name: "centered",
      type: "boolean",
      defaultValue: false,
    },
    {
      name: "variant",
      type: "text",
      defaultValue: "standard",
      enum: ["standard", "fullWidth", "scrollable"],
    },
    {
      name: "tabs",
      type: "list",
      subFields: [
        {
          name: "label",
          type: "text",
          defaultValue: "newTab",
        },
        {
          name: "disable",
          type: "boolean",
          defaultValue: false,
        },
        {
          name: "icon",
          type: "object",
          defaultValue: {
            iconPositon: "start",
            iconType: "default",
          },
          subFields: [
            {
              name: "showIcon",
              type: "boolean",
              defaultValue: true,
            },
            {
              name: "iconPositon",
              type: "text",
              defaultValue: "start",
              enum: ["start", "end", "top", "bottom"],
              showIf: `options.get('showIcon')`,
            },
            {
              name: "iconType",
              type: "text",
              enum: ["default", "upload"],
              defaultValue: "default",
              showIf: `options.get('showIcon')`,
            },
            {
              name: "iconFile",
              type: "file",
              helperText: "SVG files are preferred, but png is also accepted",
              showIf: `options.get('iconType') === "upload"`,
            },
          ],
        },
        {
          name: "content",
          type: "uiBlocks",
          defaultValue: [],
        },
      ],
      defaultValue: [
        {
          label: "tab1",
          content: [],
        },
      ],
    },
  ],
});

Builder.registerComponent(BuilderComponents.twitchEmbed, {
  name: "twitchEmbed",
  image:
    "https://tabler-icons.io/static/tabler-icons/icons-png/brand-twitch.png",
  inputs: [
    {
      name: "channelName",
      type: "text",
      defaultValue: "coqui",
      required: true,
    }
  ]
});
