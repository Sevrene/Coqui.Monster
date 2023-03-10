import { List, ListItem, ListItemButton, ListItemIcon, ListItemText } from '@mui/material';
import { Bolt } from '@mui/icons-material';

/**
 * ReactList
 * 
 * A React functional component that renders a list of items as links with icons.
 * @param {object[]} items - An array of objects representing the list items, each with the following properties:
 *  @param {string} items.text - The text to display for the list item.
 *  @param {boolean} items.MaterialIcon - A boolean indicating whether to use a Material UI icon or a custom icon.
 *  @param {string} items.icon - The URL of the custom icon to display if items.MaterialIcon is false.
 *  @param {string} items.iconName - The name of the Material UI icon to display if items.MaterialIcon is true.
 *  @param {string} items.link - The URL to link to when the list item is clicked.
 * @returns {JSX.Element} A list of links with icons.
*/
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