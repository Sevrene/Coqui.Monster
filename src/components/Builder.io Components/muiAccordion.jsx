import {
  Accordion,
  AccordionDetails,
  AccordionSummary,
  Divider,
} from "@mui/material";

import { BuilderBlocks } from "@builder.io/react";

/**
  MUIAccordion Component.
  
  A React functional component that renders an Accordion from the Material UI library.
  @param {Object} props - An object containing the props for the component.
    @param {boolean} defaultOpen - A boolean indicating whether the Accordion should be expanded by default.
    @param {boolean} lockOpen - A boolean indicating whether the Accordion should always remain open. If set to true, the Accordion will always be expanded.
    @param {boolean} disable - A boolean indicating whether the Accordion should be disabled and cannot be interacted with.
    @param {Object} properties - An object containing the properties for the Accordion.
      @param {string} variant - A string indicating the variant of the Accordion to be displayed. Possible values: "default", "outlined".
      @param {string} elevation - A string indicating the elevation of the Accordion. Possible values: "none", "low", "medium", "high".
      @param {boolean} disableRipple - A boolean indicating whether the ripple effect should be disabled when clicked.
      @param {Object} icon - An object containing the properties for the expand icon of the Accordion.
        @param {boolean} showIcon - A boolean indicating whether to show the expand icon or not. If set to false, the icon will not be rendered.
        @param {URL} iconURL - The icon file to be displayed, if iconType is set to "upload".
      @param {Object} divider - An object containing the properties for the divider of the Accordion.
        @param {boolean} showDivider - A boolean indicating whether to show the divider or not. If set to false, the divider will not be rendered.
        @param {string} dividerColor - A string indicating the color of the divider to be rendered.
    @param {Object[]} summary - An array of BuilderBlocks representing the content to be rendered in the Accordion summary section.
    @param {Object[]} content - An array of BuilderBlocks representing the content to be rendered in the Accordion collapse section.
  @returns {JSX.Element} - An Accordion component that accepts children in its collapse section.
*/
const MUIAccordion = (props) => {
  // Alter the expandIcon based on icon settings
  const expandIcon = props.properties?.icon?.showIcon ? (
    <img
      src={props.properties.icon.iconURL}
      alt="icon"
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
      expanded={props.lockOpen ? true : undefined}
      defaultExpanded={props.defaultOpen}
      elevation={elevationMap[props.properties?.elevation]}
      variant={props.properties?.variant}
      sx={{ backgroundColor: "inherit" }}
      disabled={props.disable}
    >
      <AccordionSummary
        expandIcon={expandIcon}
        disableRipple={props.properties?.disableRipple}
      >
        <BuilderBlocks
          parentElementId={props.builderBlock.id}
          dataPath={`component.options.summary`}
          blocks={props.summary}
        />
      </AccordionSummary>

      {props.properties?.divider?.showDivider && (
        <Divider
          sx={{
            borderColor: props.properties?.divider?.dividerColor || undefined,
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
