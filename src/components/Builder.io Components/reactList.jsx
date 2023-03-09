import { List, ListItem, ListItemButton, ListItemIcon, ListItemText } from '@mui/material';
import React  from 'react';
import { Bolt } from '@mui/icons-material';

const ReactList = ({ items }) => (
  <List dense>
    {items.map((item, index) => (
      <ListItem key={index} disablePadding>
        <ListItemButton component="a" href={item.link} target="_blank" rel="noreferrer">
          <ListItemIcon>
            {item.MaterialIcon && item.iconName !== undefined ? 
              <Bolt />
              : <img src={item.icon} alt={'icon'} />
            }
          </ListItemIcon>
          <ListItemText primary={item.text} />
        </ListItemButton>
      </ListItem>
    ))}
  </List>
);

export default ReactList;