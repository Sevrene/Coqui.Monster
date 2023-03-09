import * as React from 'react';
import PropTypes from 'prop-types';
import { Box, Tab, Tabs} from '@mui/material';
import { BuilderBlocks } from '@builder.io/react';

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

const BasicTabs = props => {
  const [value, setValue] = React.useState(props.defaultTabIndex ?? 0);
  
  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <Box sx={{ width: '100%' }}>
      <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
        <Tabs value={value} onChange={handleChange} centered={props.centered}>
          {props.tabs.map((tab, index) => (
            <Tab label={tab.label} key={index} />
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