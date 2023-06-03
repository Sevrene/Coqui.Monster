import {
  Accordion,
  AccordionDetails,
  AccordionSummary,
  Divider,
} from "@mui/material";

import { BuilderBlocks } from "@builder.io/react";

/**
 * @file Defines the MUIAccordion component.
 *
 * @summary A React functional component that renders an Accordion from the Material UI library.
 * This component accepts children in its Summary and Collapse section.
 *
 * @see {@link https://mui.com/components/accordion/}
 * @see {@link https://mui.com/api/accordion/}
 *
 * @param {Object} props - An object containing the props for the component.
 * @param {Object} props.properties - An object containing the properties for the Accordion.
 * @param {boolean} props.properties.disableRipple - A boolean indicating whether the ripple effect should be disabled when clicked.
 * @param {Object} props.properties.icon - An object containing the properties for the expand icon of the Accordion.
 * @param {boolean} props.properties.icon.showIcon - A boolean indicating whether to show the expand icon or not. If set to false, the icon will not be rendered.
 * @param {string} props.properties.icon.iconColor - A string indicating the color of the expand icon.
 * @param {File} props.properties.icon.iconFile - A file containing the custom expand icon to be rendered.
 * @param {Object} props.properties.divider - An object containing the properties for the divider of the Accordion.
 * @param {boolean} props.properties.divider.showDivider - A boolean indicating whether to show the divider or not. If set to false, the divider will not be rendered.
 * @param {string} props.properties.divider.dividerColor - A string indicating the color of the divider to be rendered.
 * @param {string} props.properties.variant - A string indicating the variant of the Accordion to be displayed. Possible values: "default", "outlined".
 * @param {string} props.properties.elevation - A string indicating the elevation of the Accordion. Possible values: "none", "low", "medium", "high".
 * @param {boolean} props.properties.defaultOpen - A boolean indicating whether the Accordion should be expanded by default.
 * @param {boolean} props.properties.lockOpen - A boolean indicating whether the Accordion should always remain open. If set to true, the Accordion will always be expanded.
 * @param {boolean} props.properties.disable - A boolean indicating whether the Accordion should be disabled and cannot be interacted with.
 * @param {Object[]} props.summary - An array of BuilderBlocks representing the content to be rendered in the Accordion summary section.
 * @param {Object[]} props.content - An array of BuilderBlocks representing the content to be rendered in the Accordion collapse section.
 * @param {Object} props.builderBlock - An object containing the Builder.io BuilderBlock properties for the Accordion.
 * @param {number} props.builderBlock.id - A number indicating the id of the BuilderBlock.
 * 
 * @returns {JSX.Element} - The Accordion component.
 *
 * @exports MUIAccordion
 */
const MUIAccordion = (props) => {
  // Alter the expandIcon based on icon settings
  const expandIcon = props.properties.icon?.showIcon ? (
    <img
      src={props.properties.icon.iconFile}
      alt="Expand Icon"
      width={24}
      height={24}
    />
  ) : undefined;

  // Map elevation values to corresponding numbers
  const elevationMap = {
    none: 0,
    low: 1,
    medium: 12,
    high: 24,
  };

  return (
    <Accordion
      // If expanded is undefined, the Accordion will be controlled by the user
      expanded={props.properties.lockOpen ? true : undefined}
      defaultExpanded={props.properties.defaultOpen}
      elevation={elevationMap[props.properties.elevation]}
      variant={props.properties.variant}
      sx={{ backgroundColor: "inherit" }}
      disabled={props.disable}
    >
      <AccordionSummary
        expandIcon={expandIcon}
        disableRipple={props.properties.disableRipple}
      >
        <BuilderBlocks
          parentElementId={props.builderBlock.id}
          dataPath={`component.options.summary`}
          blocks={props.summary}
        />
      </AccordionSummary>
      {props.properties.divider?.showDivider && (
        <Divider
          sx={{
            borderColor: props.properties.divider?.dividerColor || undefined,
          }}
        />
      )}
      <AccordionDetails sx={{ padding: 0 }}>
        <BuilderBlocks
          parentElementId={props.builderBlock.id}
          dataPath={`component.options.content`}
          blocks={props.content}
        />
      </AccordionDetails>
    </Accordion>
  );
};

export default MUIAccordion;
