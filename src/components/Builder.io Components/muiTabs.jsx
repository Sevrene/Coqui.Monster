import { Badge, Box, Tab, Tabs } from "@mui/material";
import { useEffect, useState } from "react";

import { BuilderBlocks } from "@builder.io/react";
import PropTypes from "prop-types";
import fetchTwitchLiveStatus from "../../fetchTwitchLiveStatus";

/**
 * Defines the TabPanel component.
 *
 * A helper function that renders a TabPanel component from the Material UI library.
 * Utilized in the MUITabs component.
 *
 * @see {@link https://material-ui.com/components/tabs/}
 * @see {@link https://material-ui.com/api/tabs/}
 *
 * @param {object} props - The props for the component.
 * @param {object} props.children - The children of the component.
 * @param {object} props.value - The value of the component.
 * @param {object} props.index - The index of the component.
 * @param {object} props.other - The other props of the component.
 *
 * @returns {JSX.Element} - The TabPanel component.
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
 * @file Defines the MUITabs component.
 *
 * A React functional component that renders a Tabs component from the Material UI library.
 * This component accepts children in its TabPanel section.
 *
 * @see {@link https://material-ui.com/components/tabs/}
 * @see {@link https://material-ui.com/api/tabs/}
 *
 * @param {object} props - The props for the component.
 * @param {object} props.defaultTabIndex - The default tab index.
 * @param {object} props.properties - The properties of the component.
 * @param {object} props.properties.variant - The variant of the component.
 * @param {object} props.properties.centered - Whether the component is centered.
 * @param {object} props.tabs - The tabs of the component.
 * @param {object} props.tabs.label - The label of the tab.
 * @param {object} props.tabs.content - The content of the tab.
 * @param {object} props.tabs.disable - Whether the tab is disabled.
 * @param {object} props.builderBlock - The Builder.io builder block that is passed to the component from the Builder.io editor.
 * @param {object} props.builderBlock.id - The id of the Builder.io builder block.
 *
 * @returns {JSX.Element} The MUITabs component.
 *
 * @exports MUITabs
 */
const MUITabs = (props) => {
  const [value, setValue] = useState(props.defaultTabIndex ?? 0);
  const [isLive, setIsLive] = useState(false);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  useEffect(() => {
    const updateTwitchStatus = async () => {
      // TODO: Confirm if my API key needs to be refreshed periodically.
      // Confirm if the API key is being used correctly.
      const liveStatus = await fetchTwitchLiveStatus("Coqui");
      setIsLive(liveStatus);
    };

    updateTwitchStatus();
  }, []);

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
            <Tab
              label={
                tab.label === "Stream" ? (
                  <Badge
                    anchorOrigin={{ horizontal: "left", vertical: "top" }}
                    color="error"
                    badgeContent={"LIVE"}
                    invisible={!isLive}
                    sx={{
                      "& .MuiBadge-badge": {
                        width: 32,
                        height: 16,
                        fontSize: 10,
                        top: -6,
                      },
                    }}
                  >
                    {tab.label}
                  </Badge>
                ) : (
                  tab.label
                )
              }
              key={index}
              disabled={tab.disable}
              sx={{ overflow: "visible" }}
            />
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
