import {
  List,
  ListSubheader,
  ListItem,
  ListItemButton,
  ListItemIcon,
  ListItemText,
} from "@mui/material";
import { Bolt } from "@mui/icons-material";

/**
  MUIList
  
  A React functional component that renders a list of items as links with icons.
  @param {Object} props - The props object for the component.
    @param {boolean} props.dense - A boolean value indicating whether to use dense padding for the list items.
    @param {number} props.maxDisplayHeight - The maximum height of the list, in pixels.
    @param {Object[]} props.subsections - An array of objects representing the sections to be included in the list.
      @param {boolean} props.subsections.includeSubheader - A boolean value indicating whether to include a subheader for the section.
      @param {string} props.subsections.subheader - The text to be displayed as the subheader for the section.
      @param {Object[]} props.subsections.items - An array of objects representing the items to be included in the section.
      @param {string} props.subsections.items.link - The URL to which the item should link.
      @param {string} props.subsections.items.text - The text to be displayed for the item.
    @param {Object} props.icon - An optional object representing the icon to be displayed next to each item.
      @param {boolean} props.icon.showIcon - A boolean value indicating whether to display an icon for each item.
      @param {string} props.icon.iconType - A string value indicating the type of icon to be displayed. Possible values: "default", "upload".
      @param {string} props.icon.iconFile - The icon file to be displayed, if iconType is set to "upload".
  @returns {JSX.Element} A list of links with icons.
*/
const MUIList = (props) => {
  // Alter the itemIcon based on icon settings
  const itemIcon = props.icon?.showIcon ? (
    props.icon?.iconType === "default" ? (
      <Bolt />
    ) : (
      <img src={props.icon?.iconFile} alt="icon" width={24} height={24} />
    )
  ) : undefined;

  return (
    <List
      dense={props.dense}
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
