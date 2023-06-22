import {
  List,
  ListItem,
  ListItemButton,
  ListItemIcon,
  ListItemText,
  ListSubheader,
} from "@mui/material";

import { BuilderBlocks } from "@builder.io/react";
import { Fragment } from "react";
import SvgIconLoader from "../../svgIconLoader";

/**
 * @file Defines the MUIList builder block.
 *
 * @summary A React functional component that renders a list of items as links with icons.
 * This component is based on the Material UI List component.
 *
 * @see {@link https://mui.com/components/lists/}
 * @see {@link https://mui.com/api/list/}
 *
 * @param {Object} props - An object containing the props for the component.
 * @param {Object} props.properties - An object containing the properties for the component.
 * @param {Object} props.properties.icon - An object containing the properties for the icon.
 * @param {boolean} props.properties.icon.showIcon - A boolean to show or hide the icon.
 * @param {string} props.properties.icon.iconColor - A string indicating the color of the  icon.
 * @param {File} props.properties.icon.iconFile - A file containing the icon.
 * @param {Object} props.properties.maxDisplayHeight - The maximum height of the list.
 * @param {Object} props.properties.dense - A boolean to set the list to dense.
 * @param {Object} props.properties.disablePadding - A boolean to disable padding on the list.
 * @param {Object} props.subsections - An object containing the subsections for the component.
 * @param {Object} props.subsections.properties - An object containing the properties for the subsections.
 * @param {boolean} props.subsections.properties.includeSubheader - A boolean to include a subheader.
 * @param {boolean} props.subsections.properties.disableGutters - A boolean to disable gutters.
 * @param {boolean} props.subsections.properties.disableSticky - A boolean to disable sticky.
 * @param {boolean} props.subsections.properties.inset - A boolean to set the inset.
 * @param {Object} props.subsections.items - An object containing the items for the subsections.
 * @param {Object} props.subsections.items.text - A string containing the text for the items.
 * @param {Object} props.subsections.items.subtext - A string containing the subtext for the items.
 * @param {Object} props.subsections.items.link - A string containing the link for the items.
 * @param {Object} props.subsections.items.properties - An object containing the properties for the items.
 * @param {boolean} props.subsections.items.properties.disableGutters - A boolean to disable gutters.
 * @param {boolean} props.subsections.items.properties.divider - A boolean to set the divider.
 * @param {boolean} props.subsections.items.properties.disable - A boolean to disable the items.
 * @param {Object} props.builderBlock - An object containing the builder block for the component.
 * @param {string} props.builderBlock.id - A string containing the id for the builder block.
 *
 * @returns {JSX.Element} - This List component.
 *
 * @exports MUIList
 */
const MUIList = (props) => {
  return (
    <List
      dense={props.properties.dense}
      disablePadding={props.properties.disablePadding}
      sx={{
        overflow: "auto",
        maxHeight: props.properties.maxDisplayHeight || undefined,
      }}
      subheader={<li />}
    >
      {props.subsections.map((section, index) => [
        <Fragment key={index}>
          {section.properties?.includeSubheader && (
            <ListSubheader
              color="inherit"
              disableSticky={section.properties.disableSticky}
              inset={section.properties.inset}
              disableGutters={section.properties.disableGutters}
            >
              <BuilderBlocks
                parentElementId={props.builderBlock.id}
                dataPath={`component.options.subsections.${index}.subheaders`}
                blocks={section.subheader}
              />
            </ListSubheader>
          )}
          {section.items.map((item, index) => (
            <ListItem
              key={index}
              disableGutters={true}
              disablePadding={true}
              divider={item.properties?.divider}
              sx={{ paddingLeft: item.link ? undefined : 2 }}
            >
              {item.link ? (
                <ListItemButton
                  component="a"
                  href={item.link}
                  target="_blank"
                  rel="noopener"
                  disableGutters={item.properties?.disableGutters}
                  disabled={item.properties?.disable}
                >
                  {props.properties.icon?.showIcon && (
                    <SvgIconLoader {...props.properties.icon} />
                  )}
                  <ListItemText primary={item.text} secondary={item.subtext} />
                </ListItemButton>
              ) : (
                <>
                  {props.properties.icon?.showIcon && (
                    <SvgIconLoader {...props.properties.icon} />
                  )}
                  <ListItemText primary={item.text} secondary={item.subtext} />
                </>
              )}
            </ListItem>
          ))}
        </Fragment>,
      ])}
    </List>
  );
};

export default MUIList;
