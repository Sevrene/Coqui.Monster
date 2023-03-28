import {
  List,
  ListItem,
  ListItemButton,
  ListItemIcon,
  ListItemText,
  ListSubheader,
} from "@mui/material";

/**
  MUIList
  
  A React functional component that renders a list of items as links with icons.
  @param {Object} props - The props object for the component.
    @param {number} maxDisplayHeight - The maximum height of the list, in pixels.
    @param {Object} properties - An object representing the properties of the list.
      @param {boolean} dense - A boolean value indicating whether to use dense padding for the list items.
      @param {Object} icon - An object representing the icon to be displayed next to each item.
        @param {boolean} showIcon - A boolean value indicating whether to display an icon for each item.
        @param {URL} iconURL - The icon file to be displayed, if iconType is set to "upload".
    @param {Object[]} subsections - An array of objects representing the sections to be included in the list.
      @param {boolean} includeSubheader - A boolean value indicating whether to include a subheader for the section.
      @param {string} subheader - The text to be displayed as the subheader for the section.
      @param {Object[]} items - An array of objects representing the items to be included in the section.
        @param {string} text - The text to be displayed for the item.  
        @param {string} link - The URL to which the item should link.
  @returns {JSX.Element} A list of links with icons.
*/
const MUIList = (props) => {
  // Alter the itemIcon based on icon settings
  const itemIcon = props.properties?.icon?.showIcon ? (
    <img
      src={props.properties.icon.iconURL}
      alt="icon"
      width={24}
      height={24}
    />
  ) : undefined;
  
  return (
    <List
      dense={props.properties?.dense}
      sx={{ overflow: "auto", maxHeight: props.maxDisplayHeight, padding: 0 }}
    >
      {props.subsections.map((section) => [
        section.includeSubheader && (
          <ListSubheader sx={{ backgroundColor: "inherit" }}>
            {section.subheader}
          </ListSubheader>
        ),
        section.items.map((item, index) => (
          <ListItem key={index} disablePadding>
            {item.link !== "" ? (
              <ListItemButton
                component="a"
                href={item.link}
                target="_blank"
                rel="noopener"
              >
                {itemIcon && <ListItemIcon>{itemIcon}</ListItemIcon>}
                <ListItemText primary={item.text} />
              </ListItemButton>
            ) : (
              <>
                {itemIcon && <ListItemIcon>{itemIcon}</ListItemIcon>}
                <ListItemText primary={item.text} />
              </>
            )}
          </ListItem>
        )),
      ])}
    </List>
  );
};

export default MUIList;
