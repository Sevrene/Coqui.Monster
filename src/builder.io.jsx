import "@builder.io/widgets";

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

// A helper function to create icon inputs
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
        name: "iconFile",
        type: "file",
        allowedFileTypes: ["jpg", "svg"],
        helperText: "Currently only SVG files are accepted",
        showIf: `options.get('showIcon')`,
      },
    ],
  };
}

/**
 * Builder Components
 * Register custom components for use in the Builder editor.
 *
 * @see https://www.builder.io/c/docs/custom-react-components
 * @see https://www.builder.io/c/docs/custom-react-components-inputs
 *
 * @param {Object} component - The React component to register. All components from Builder.io Components folder are automatically imported under BuilderComponents.
 * @param {Object} options - An object that contains the properties of the component.
 * @property {string} name - The name of the component.
 * @property {boolean} noWrap - Determines whether to wrap the component in a div.
 * @property {string} image - The image to display in the Builder editor. Utilize https://tabler-icons.io/ and copy the png download link
 * @property {Array<Object>} inputs - An array of objects that defines the inputs that the component accepts. Each object in the array represents an input and can contain properties such as name, type, and defaultValue.
 */
Builder.registerComponent(BuilderComponents.muiAccordion, {
  name: "accordion",
  noWrap: true, // allow for accordion group gutters
  image:
    "https://tabler-icons.io/static/tabler-icons/icons-png/layout-navbar-expand.png",
  inputs: [
    {
      name: "properties",
      type: "object",
      defaultValue: {
        variant: "default",
        elevation: "low",
        disableRipple: false,
        defaultOpen: false,
        lockOpen: false,
      },
      subFields: [
        {
          name: "disableRipple",
          type: "boolean",
          defaultValue: false,
          helperText: "Disable the ripple effect when clicked",
        },
        iconInput(
          "icon",
          "Righthand expand icon. Will invert when accordion is open"
        ),
        {
          name: "divider",
          type: "object",
          defaultValue: {
            showDivider: false,
          },
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
          name: "variant",
          type: "text",
          advanced: true,
          defaultValue: "default",
          enum: ["default", "outlined"],
        },
        {
          name: "elevation",
          type: "text",
          advanced: true,
          defaultValue: "low",
          helperText: "How flat the appearance of the accordion is",
          enum: ["none", "low", "medium", "high"],
        },
        {
          name: "defaultOpen",
          type: "boolean",
          advanced: true,
          helperText: "Refresh the preview to view defaults",
          defaultValue: false,
        },
        {
          name: "lockOpen",
          type: "boolean",
          advanced: true,
          helperText:
            "Lock the accordion in the open state. Refresh the preview to take effect",
          showIf: `options.get('defaultOpen')`,
          defaultValue: false,
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

Builder.registerComponent(BuilderComponents.carousel, {
  name: "carousel",
  image:
    "https://tabler-icons.io/static/tabler-icons/icons-png/carousel-horizontal.png",
  inputs: [
    {
      name: "defaultSlideIndex",
      type: "number",
      defaultValue: 1,
      helperText: "Index of the slide to show first. Set to 0 to always show the last slide",
      min: 0,
    },
    {
      name: "properties",
      type: "object",
      defaultValue: {
        animation: "slide",
        adaptiveHeight: false,
        arrows: true,
        autoPlay: false,
        autoPlaySpeed: 5,
        centerMode: false,
        dots: true,
        draggable: true,
        infinite: false,
      },
      subFields: [
        {
          name: "animation",
          type: "text",
          helperText: "Animation to use when changing slides",
          enum: ["slide", "fade"],
          defaultValue: "slide",
        },
        {
          name: "adaptiveHeight",
          type: "boolean",
          advanced: true,
          helperText: "Adjust the height of the carousel to the height of the current slide",
          defaultValue: false,
        },
        {
          name: "arrows",
          type: "boolean",
          advanced: true,
          helperText: "Show arrows on the sides of the carousel to change slides",
          defaultValue: true,
        },
        {
          name: "autoPlay",
          type: "boolean",
          advanced: true,
          helperText: "Automatically change slides",
          defaultValue: false,
        },
        {
          name: "autoPlaySpeed",
          type: "number",
          advanced: true,
          helperText: "Time in seconds between slide changes",
          showIf: `options.get('autoPlay')`,
          min: 1,
          defaultValue: 5,
        },
        {
          name: "centerMode",
          type: "boolean",
          advanced: true,
          helperText: "Center the current slide in the carousel. Show a preview of the next and previous slides on either side",
          defaultValue: false,
        },
        {
          name: "dots",
          type: "boolean",
          advanced: true,
          helperText: "Show dots at the bottom of the carousel to indicate the current slide",
          defaultValue: true,
        },
        {
          name: "draggable",
          type: "boolean",
          advanced: true,
          helperText: "Allow the carousel to be dragged to change slides",
          defaultValue: true,
        },
        {
          name: "infinite",
          friendlyName: "Infinite Loop",
          type: "boolean",
          advanced: true,
          helperText: "Allow the carousel to loop back to the first slide after the last slide",
          defaultValue: false,
        },
      ],
    },
    {
      name: "slides",
      type: "list",
      copyOnAdd: false,
      defaultValue: [],
      subFields: [
        {
          name: "content",
          type: "uiBlocks",
          defaultValue: [],
        },
      ],
    },
    
  ],
});

Builder.registerComponent(BuilderComponents.muiList, {
  name: "list",
  image: "https://tabler-icons.io/static/tabler-icons/icons-png/list.png",
  inputs: [
    {
      name: "properties",
      type: "object",
      defaultValue: {
        maxDisplayHeight: "",
        dense: true,
        disablePadding: true,
      },
      subFields: [
        iconInput("icon", "Lefthand icon. Will prepend every list item"),
        {
          name: "maxDisplayHeight",
          type: "number",
          advanced: true,
          helperText: "Max height in pixels. Leave empty for no max height",
        },
        {
          name: "dense",
          type: "boolean",
          advanced: true,
          helperText: "Condense list items",
          defaultValue: true,
        },
        {
          name: "disablePadding",
          type: "boolean",
          advanced: true,
          helperText: "Remove top and bottom padding",
          defaultValue: true,
        },
      ],
    },
    {
      name: "subsections",
      type: "list",
      helperText:
        "Grouping list items into subsections is sometimes better than spreading them out across multiple lists",
      defaultValue: [
        {
          properties: {
            includeSubheader: false,
            disableGutters: false,
            disableSticky: false,
            inset: false,
          },
          items: [],
          subheader: [
            {
              "@type": "@builder.io/sdk:Element",
              component: { name: "Text", options: { text: "Subheader Title" } },
            },
          ],
        },
      ],
      subFields: [
        {
          name: "properties",
          type: "object",
          defaultValue: {
            includeSubheader: false,
            disableGutters: false,
            disableSticky: false,
            inset: false,
          },
          subFields: [
            {
              name: "includeSubheader",
              type: "boolean",
              helperText:
                "Include a subheader above this subsection. Accepts any child element",
              defaultValue: false,
            },
            {
              name: "disableGutters",
              type: "boolean",
              advanced: true,
              helperText: "Remove left and right padding",
              defaultValue: false,
              showIf: `options.get('includeSubheader')`,
            },
            {
              name: "disableSticky",
              type: "boolean",
              advanced: true,
              helperText: "Disable sticky positioning for the subheader",
              defaultValue: false,
              showIf: `options.get('includeSubheader')`,
            },
            {
              name: "inset",
              type: "boolean",
              advanced: true,
              helperText: "Inset the subheader",
              defaultValue: false,
              showIf: `options.get('includeSubheader')`,
            },
          ],
        },
        {
          name: "items",
          type: "list",
          defaultValue: [
            {
              text: "List Item",
              subtext: "",
              link: "",
              properties: {
                disableGutters: false,
                divider: true,
                disable: false,
              },
            },
          ],
          subFields: [
            {
              name: "text",
              type: "text",
              defaultValue: "List Item",
            },
            {
              name: "subtext",
              type: "text",
              defaultValue: "",
            },
            {
              name: "link",
              type: "url",
            },
            {
              name: "properties",
              type: "object",
              advanced: true,
              defaultValue: {
                disableGutters: false,
                divider: true,
                disable: false,
              },
              subFields: [
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
                  defaultValue: true,
                },
                {
                  name: "disable",
                  type: "boolean",
                  helperText: "Disable the list item",
                  defaultValue: false,
                },
              ],
            },
          ],
        },
        {
          name: "subheader",
          type: "uiBlocks",
          defaultValue: [],
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
      defaultValue: 1,
      helperText: "Index of the tab to show first. Starts at 1",
      min: 1,
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
      defaultValue: [
        {
          label: "tab1",
          content: [],
        },
      ],
      subFields: [
        {
          name: "label",
          type: "text",
          defaultValue: "newTab",
        },
        {
          name: "content",
          type: "uiBlocks",
          defaultValue: [],
        },
        {
          name: "disable",
          type: "boolean",
          defaultValue: false,
          advanced: true,
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

// Register Custom Menu Items
Builder.register("insertMenu", {
  name: "Custom Components",
  items: [
    { name: "accordion" },
    { name: "button" },
    { name: "carousel" },
    { name: "list" },
    { name: "tabs" },
    { name: "twitchEmbed" },
  ],
});

// Register Built in Builder Components
Builder.register("insertMenu", {
  name: "Builder Components",
  items: [
    { name: "Text" },
    { name: "Image" },
    { name: "Core:Button" },
    { name: "Columns" },
    { name: "Box" },
    { name: "Core:Section" },
    { name: "Video" },
    { name: "Embed" },
  ],
});

Builder.register("insertMenu", {
  name: "Advanced Builder Components",
  items: [
    { name: "Builder:Masonry" },
    { name: "Custom Code" },
    { name: "Slot" },
    { name: "Symbol" },
  ],
});

Builder.register("insertMenu", {
  name: "Builder Form Components",
  items: [
    { name: "Form:Form" },
    { name: "Form:Input" },
    { name: "Form:SubmitButton" },
    { name: "Form:Label" },
    { name: "Form:Select" },
    { name: "Form:TextArea" },
  ],
});

// Hide the rest of the default insert menu setup if not readded above
Builder.register("editor.settings", { customInsertMenu: true });
