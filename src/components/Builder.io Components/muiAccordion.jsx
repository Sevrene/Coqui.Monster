import {
  Accordion,
  AccordionSummary,
  AccordionDetails,
  Divider,
} from "@mui/material";
import { BuilderBlocks } from "@builder.io/react";
import { ExpandMore } from "@mui/icons-material";

/**
  MUIAccordion
  
  A React functional component that renders an Accordion from the Material UI library.
  @param {Object} props - An object containing the props for the component.
    @param {boolean} props.defaultOpen - A boolean indicating whether to set the Accordion to be expanded by default or not.
    @param {boolean} props.lockOpen - A boolean indicating whether to keep the Accordion always open or not. If set to true, the Accordion will always be expanded.
    @param {boolean} props.disable - A boolean indicating whether to disable the Accordion or not. If set to true, the Accordion will be disabled and cannot be interacted with.
    @param {Object} props.divider - An object containing the properties for the divider of the Accordion.
      @param {boolean} props.divider.showDivider - A boolean indicating whether to show the divider or not. If set to false, the divider will not be rendered.
      @param {string} props.divider.dividerColor - A string indicating the color of the divider to be rendered. This value is optional and if not set, the default color will be used.
    @param {Object} props.icon - An object containing the properties for the expand icon of the Accordion.
      @param {boolean} props.icon.showIcon - A boolean indicating whether to show the expand icon or not. If set to false, the icon will not be rendered.
      @param {string} props.icon.iconType - A string value indicating the type of icon to be displayed. Possible values: "default", "upload".
      @param {string} props.icon.iconFile - The icon file to be displayed, if iconType is set to "upload".
    @param {Object[]} props.summary - An array of BuilderBlocks representing the content to be rendered in the Accordion summary section.
    @param {Object[]} props.content - An array of BuilderBlocks representing the content to be rendered in the Accordion collapse section.
  @returns {JSX.Element} - An Accordion component that accepts children in its collapse section.
*/
const MUIAccordion = (props) => {
  // Alter the expandIcon based on icon settings
  const expandIcon = props.icon?.showIcon ? (
    props.icon?.iconType === "default" ? (
      <ExpandMore />
    ) : (
      <img src={props.icon?.iconFile} alt="icon" width={24} height={24} />
    )
  ) : undefined;

  return (
    <Accordion
      expanded={props.lockOpen ? true : undefined}
      defaultExpanded={props.defaultOpen}
      elevation={props.elevation}
      variant={props.variant}
      sx={{ backgroundColor: "inherit" }}
      disabled={props.disable}
    >
      <AccordionSummary
        expandIcon={expandIcon}
        disableRipple={props.disableRipple}
      >
        <BuilderBlocks
          parentElementId={props.builderBlock.id}
          dataPath={`component.options.summary`}
          blocks={props.summary}
        />
      </AccordionSummary>

      {props.divider?.showDivider && (
        <Divider
          sx={{ borderColor: props.divider?.dividerColor || undefined }}
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
