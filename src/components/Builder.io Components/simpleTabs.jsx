import { useState } from 'react';
import PropTypes from 'prop-types';
import { Box, Tab, Tabs} from '@mui/material';
import { BuilderBlocks } from '@builder.io/react';

/**
 * 
 * TabPanel
 * 
 * A component that renders a tab panel.
 * @param {object} props - The props for the component.
 *  @param {node} props.children - The children to render in the tab panel.
 *  @param {number} props.index - The index of the tab panel.
 *  @param {number} props.value - The value of the tab panel.
 * @returns {JSX.Element} A tab panel.
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
      {value === index && (
        <Box sx={{ p: 3 }}>
          {children}
        </Box>
      )}
    </div>
  );
}

TabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.number.isRequired,
  value: PropTypes.number.isRequired,
};

/**
 * 
 * BasicTabs
 * 
 * A component that renders a basic tabs view.
 * @param {object} props - The props for the component.
 *  @param {number} [props.defaultTabIndex] - The default tab index to display. Defaults to 0.
 *  @param {boolean} [props.centered] - Whether the tabs should be centered. Defaults to false.
 *  @param {object[]} props.tabs - An array of objects representing the tabs, each with the following properties:
 *    @param {string} tabs.label - The label for the tab.
 *    @param {object[]} tabs.content - An array of Builder.io blocks to display as content for the tab.
 *  @param {object} props.builderBlock - A Builder.io block object.
 * @returns {JSX.Element} A tabs view with content for each tab.
*/
const BasicTabs = props => {
  const [value, setValue] = useState(props.defaultTabIndex ?? 0);
  
  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <Box sx={{ width: '100%' }}>
      <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
        <Tabs value={value} onChange={handleChange} centered={props.centered} variant={props.variant}>
          {props.tabs.map((tab, index) => (
            <Tab label={tab.label} key={index} disabled={tab.disable}/>
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

export default BasicTabs;