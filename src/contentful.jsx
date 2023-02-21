import { client } from './client';
import { List, ListItem, ListItemButton, ListItemIcon, ListItemText, Link } from '@mui/material';
import { BlockTitle } from './components/blockRenders';
import { documentToReactComponents } from '@contentful/rich-text-react-renderer';
import { BLOCKS } from '@contentful/rich-text-types';
import BoltIcon from '@mui/icons-material/Bolt';

export function FetchData(type) {
  return client.getEntries({ content_type: type })
    .then(response => response.items.map(item => item.fields));
};

export function renderContentBlock(contentBlock) {
  return Object.entries(contentBlock.fields).map(([key, value]) => {
    switch(key) {
      case 'headline': {
        return (
          <BlockTitle title={value} />
        );
      }
      case 'body': {
        return (
          <div variant="body2">
            {documentToReactComponents(value, defaultCustomRenderOptions)}
          </div>
        );
      }
      case 'file': {
        return <img style={{ width: '100%' }} src={value.fields.file.url} alt={value.fields.title} />
      }
      default:
        return null
    }
  });
}

const defaultCustomRenderOptions = {
  /*renderMark: {
    [MARKS.BOLD]: (text) => <strong>{text}</strong>,
    [MARKS.ITALIC]: (text) => <em>{text}</em>,
    [MARKS.UNDERLINE]: (text) => <u>{text}</u>,
    [MARKS.CODE]: (text) => <code>{text}</code>,
    [MARKS.STRIKETHROUGH]: (text) => <del>{text}</del>,
  },*/
  renderNode: {
    [BLOCKS.PARAGRAPH]: (node, children) => <div>{children}</div>,
    [BLOCKS.UL_LIST]: (node, children) => <List dense>{children}</List>,
    [BLOCKS.LIST_ITEM]: (node, children) => {
      const text = children[0].props.children[1].props
      // TODO: Collapse sections
      // TODO: properly key everything
      // TODO: Alter contentful to restrict possible formatting
      // TODO: Should default lists assume links exist?
      // TODO: Only create link and button if link exists
      // TODO: Allow for choosing the icon (Boolean to include, specify icon name?)
      // TODO: Allow to "build your own list" with different icons per line???
      return (
        <Link sx={{textDecoration: 'none'}} href={text.href} target="_blank" rel="noreferrer">
          <ListItem disablePadding>
            <ListItemButton>
              <ListItemIcon>
                <BoltIcon />
              </ListItemIcon>
              <ListItemText primary={text.children[0]} />
            </ListItemButton>
          </ListItem>
        </Link>
      );
    },
    /*[BLOCKS.HEADING_1]: (node, children) => <h1>{children}</h1>,
    [BLOCKS.HEADING_2]: (node, children) => <h2>{children}</h2>,
    [BLOCKS.HEADING_3]: (node, children) => <h3>{children}</h3>,
    [BLOCKS.HEADING_4]: (node, children) => <h4>{children}</h4>,
    [BLOCKS.HEADING_5]: (node, children) => <h5>{children}</h5>,
    [BLOCKS.HEADING_6]: (node, children) => <h6>{children}</h6>,
    [BLOCKS.OL_LIST]: (node, children) => <ol>{children}</ol>,
    
    [BLOCKS.QUOTE]: (node, children) => <blockquote>{children}</blockquote>,
    [BLOCKS.HR]: (node) => <hr />,
    [BLOCKS.EMBEDDED_ASSET]: (node) => {
      const url = node.data.target.fields.file.url;
      const alt = node.data.target.fields.description;
      return <img src={url} alt={alt} />;
    },*/
  },
};