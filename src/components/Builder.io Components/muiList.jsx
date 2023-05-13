import {
  List,
  ListItem,
  ListItemButton,
  ListItemIcon,
  ListItemText,
  ListSubheader,
} from "@mui/material";

import { BuilderBlocks } from "@builder.io/react";
import SvgIconLoader from "../../svgIconLoader";

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
  return (
    <List
      dense={props.properties?.dense}
      disablePadding={props.properties?.disablePadding}
      sx={{ overflow: "auto", maxHeight: props.maxDisplayHeight }}
      subheader={<li />}
    >
      {props.subsections.map((section, index) => [
        <li>
          {section.properties?.includeSubheader && (
            <ListSubheader
              color="inherit"
              sx={{ backgroundColor: "inherit" }}
              disableSticky={section.properties?.disableSticky}
              inset={section.properties?.inset}
              disableGutters={section.properties?.disableGutters}
            >
              <BuilderBlocks
                parentElementId={props.builderBlock.id}
                dataPath={`component.options.subsections.${index}.subheaders`}
                blocks={section.subheaders}
              />
            </ListSubheader>
          )}
          {section.items.map((item, index) => (
            <ListItem
              key={index}
              disableGutters={true}
              disablePadding={true}
              divider={item.properties?.divider}>
              {item.link ? (
                <ListItemButton
                  component="a"
                  href={item.link}
                  target="_blank"
                  rel="noopener"
                  disableGutters={item.properties?.disableGutters}
                  disabled={item.properties?.disabled}
                >
                  {props.properties?.icon?.showIcon && (
                    <ListItemIcon>
                      {SvgIconLoader(props.properties?.icon)}
                    </ListItemIcon>
                  )}
                  <ListItemText 
                    primary={item.text}
                    secondary={item.subtext}
                  />
                </ListItemButton>
              ) : (
                <>
                  {props.properties?.icon?.showIcon && (
                    <ListItemIcon>
                      {SvgIconLoader(props.properties?.icon)}
                    </ListItemIcon>
                  )}
                  <ListItemText
                    primary={item.text}
                    secondary={item.subtext}
                  />
                </>
              )}
            </ListItem>
          ))}
        </li>
      ])}
    </List>
  );
};

export default MUIList;
