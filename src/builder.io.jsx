import { Builder, builder } from "@builder.io/react";

import BuilderComponents from "./components/Builder.io Components";

const apiKey = process.env.REACT_APP_BUILDER_IO_ACCESS_TOKEN;

if (!apiKey) {
  console.error(
    "Builder.io API key not found. Please create a .env with a valid API key to continue."
  );
} else {
  builder.init(apiKey);
}

function iconInput(name, helperText = undefined) {
  return {
    name: name,
    type: "object",
    helperText: helperText,
    subFields: [
      {
        name: "showIcon",
        type: "boolean",
        defaultValue: false,
      },
      {
        name: "color",
        type: "color",
        showIf: `options.get('showIcon')`,
      },
      {
        name: "iconURL",
        friendlyName: "iconFile",
        type: "file",
        allowedFileTypes: ['svg'],
        helperText: "Currently only SVG files are accepted",
        showIf: `options.get('showIcon')`,
      },
    ],
  };
}

/**
  Builder Components
  @param {React.Component} component - The React component to register.
  All components from Builder.io Components folder are automatically imported under BuilderComponents.
  @param {Object} options - An object with properties defining the component's behavior and inputs.
    @property {string} name - The component name, a required property that specifies the name of the component as it will appear in the Builder editor.
    @property {string} image - An optional but highly recommended property that allows developers to set an image that will be displayed as a thumbnail for the component in the Builder editor.
    Utilize https://tabler-icons.io/ and copy the png download link
    @property {Array<Object>} inputs - An array of objects that defines the inputs that the component accepts. Each object in the array represents an input and can contain properties such as name, type, and defaultValue.

  Full Documentation
  https://www.builder.io/c/docs/custom-components-input-types
*/
Builder.registerComponent(BuilderComponents.muiAccordion, {
  name: "accordion",
  noWrap: true, // allow for accordion group gutters
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
      name: "properties",
      type: "object",
      defaultValue: {
        variant: "text",
        disableRipple: false,
        elevation: "low",
      },
      subFields: [
        {
          name: "variant",
          type: "text",
          defaultValue: "default",
          enum: ["default", "outlined"],
        },
        {
          name: "elevation",
          type: "text",
          helperText: "How flat the appearance of the accordion is",
          enum: ["none", "low", "medium", "high"],
        },
        {
          name: "disableRipple",
          type: "boolean",
          helperText: "Disable the ripple effect when clicked",
          defaultValue: true,
        },
        iconInput(
          "icon",
          "Righthand expand icon. Will invert when accordion is open"
        ),
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
      ],
    },
    {
      name: "disable",
      type: "boolean",
      helperText: "Disable the accordions ability to expand",
      defaultValue: false,
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

Builder.registerComponent(BuilderComponents.muiButton, {
  name: "button",
  image: "https://tabler-icons.io/static/tabler-icons/icons-png/click.png",
  inputs: [
    {
      name: "text",
      type: "text",
      defaultValue: "Button Text",
    },
    {
      name: "type",
      type: "text",
      enum: ["link", "menu"],
      defaultValue: "link",
    },
    {
      name: "link",
      type: "url",
      showIf: `options.get('type') === "link"`,
    },
    {
      name: "newTab",
      type: "boolean",
      defaultValue: true,
      friendlyName: "Open link in new tab",
      showIf: `options.get('type') === "link"`,
    },
    {
      name: "menuItems",
      type: "list",
      showIf: `options.get('type') === "menu"`,
      defaultValue: [
        {
          text: "Menu Item",
        },
      ],
      subFields: [
        {
          name: "text",
          type: "text",
          defaultValue: "Menu Item",
        },
        {
          name: "link",
          type: "url",
        },
        {
          name: "newTab",
          type: "boolean",
          defaultValue: true,
          friendlyName: "Open link in new tab",
        },
        {
          name: "properties",
          type: "object",
          defaultValue: {
            dense: false,
            disableGutters: false,
            divider: false,
            disable: false,
          },
          subFields: [
            {
              name: "dense",
              type: "boolean",
              helperText: "Compact vertical padding is used for smaller lists",
              defaultValue: false,
            },
            {
              name: "disableGutters",
              type: "boolean",
              helperText: "Remove left and right padding",
              defaultValue: false,
            },
            {
              name: "divider",
              type: "boolean",
              helperText:
                "1px light border is added to the bottom of the menu item",
              defaultValue: false,
            },
            iconInput("startIcon"),
            iconInput("endIcon"),
          ],
        },
        {
          name: "disable",
          type: "boolean",
          defaultValue: false,
        },
      ],
    },
    {
      name: "properties",
      type: "object",
      defaultValue: {
        variant: "text",
        size: "medium",
        ripple: "cursor",
        disableElevation: false,
      },
      subFields: [
        {
          name: "variant",
          type: "text",
          enum: ["contained", "outlined", "text"],
        },
        {
          name: "size",
          type: "text",
          enum: ["small", "medium", "large"],
        },
        {
          name: "ripple",
          type: "text",
          helperText: "Where the ripple effect plays when clicked",
          enum: ["cursor", "center", "none"],
        },
        {
          name: "disableElevation",
          type: "boolean",
          helperText: "Flatten the appearance of the button",
        },
        iconInput("startIcon"),
        iconInput("endIcon"),
      ],
    },
    {
      name: "disable",
      type: "boolean",
      defaultValue: false,
    },
  ],
});

Builder.registerComponent(BuilderComponents.muiList, {
  name: "list",
  image: "https://tabler-icons.io/static/tabler-icons/icons-png/list.png",
  inputs: [
    {
      name: "maxDisplayHeight",
      type: "number",
      helperText: "Max height in pixels. Leave empty for no max height.",
    },
    {
      name: "properties",
      type: "object",
      defaultValue: {
        dense: true,
      },
      subFields: [
        {
          name: "dense",
          type: "boolean",
          defaultValue: true,
        },
        iconInput("icon"),
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
            },
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

Builder.registerComponent(BuilderComponents.muiTabs, {
  name: "tabs",
  image: "https://tabler-icons.io/static/tabler-icons/icons-png/browser.png",
  inputs: [
    {
      name: "defaultTabIndex",
      type: "number",
      defaultValue: 0,
      required: true,
    },
    {
      name: "properties",
      type: "object",
      defaultValue: {
        variant: "standard",
        centered: false,
      },
      subFields: [
        {
          name: "variant",
          type: "text",
          defaultValue: "standard",
          enum: ["standard", "fullWidth", "scrollable"],
        },
        {
          name: "centered",
          type: "boolean",
          defaultValue: false,
        },
      ],
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
      name: "channel",
      type: "text",
      defaultValue: "coqui",
      required: true,
    },
  ],
});
