import { Box, Tab, Tabs } from "@mui/material";

import { BuilderBlocks } from "@builder.io/react";
import PropTypes from "prop-types";
import { useState } from "react";

/**
  TabPanel

  A component that renders a tab panel.
  @param {object} props - The props for the component.
    @param {node} children - The children to render in the tab panel.
    @param {number} index - The index of the tab panel.
    @param {number} value - The value of the tab panel.
  @returns {JSX.Element} A tab panel.
*/
function TabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      {...other}
    >
      {value === index && <Box sx={{ p: 3 }}>{children}</Box>}
    </div>
  );
}

TabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.number.isRequired,
  value: PropTypes.number.isRequired,
};

/**
  BasicTabs

  A component that renders a basic tabs view.
  @param {object} props - The props for the component.
    @param {number} defaultTabIndex - The default tab index to display.
    @param {object} properties - An object with the following properties:
      @param {string} variant - The variant of the tabs view. One of "standard", "fullWidth", or "scrollable".
      @param {boolean} centered - Whether the tabs should be centered.
    @param {object[]} tabs - An array of objects representing the tabs, each with the following properties:
      @param {string} label - The label for the tab.
      @param {boolean} disable - Whether the tab is disabled.
      @param {object[]} content - An array of Builder.io blocks to display as content for the tab.
  @returns {JSX.Element} A tabs view with content for each tab.
*/
const MUITabs = (props) => {
  const [value, setValue] = useState(props.defaultTabIndex ?? 0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <Box sx={{ width: "100%" }}>
      <Box sx={{ borderBottom: 1, borderColor: "divider" }}>
        <Tabs
          value={value}
          onChange={handleChange}
          centered={props.properties?.centered}
          variant={props.properties?.variant}
        >
          {props.tabs.map((tab, index) => (
            <Tab label={tab.label} key={index} disabled={tab.disable} />
          ))}
        </Tabs>
      </Box>
      {props.tabs.map((tab, index) => (
        <TabPanel value={value} index={index} key={index}>
          {props.tabs?.length && (
            <BuilderBlocks
              parentElementId={props.builderBlock.id}
              dataPath={`component.options.tabs.${value}.content`}
              blocks={tab.content}
            />
          )}
        </TabPanel>
      ))}
    </Box>
  );
};

export default MUITabs;
