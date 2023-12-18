import '@builder.io/widgets';

import { Box, IconButton, Tooltip } from '@mui/material';

import { Builder } from '@builder.io/react';
import { alpha } from '@mui/material/styles';

const IconLinkGroup = ({ links }) => {
  return (
    <Box sx={{ textAlign: 'center' }}>
      <div
        style={{
          fontSize: 'large',
          fontWeight: 'bold',
          marginBottom: '8px',
        }}
      >
        Links
      </div>
      {links.map((link) => (
        <Tooltip title={link.tooltip} key={link.tooltip} placement='top'>
          <IconButton
            aria-label={link.tooltip}
            href={link.url}
            target='_blank'
            rel='noopener noreferrer'
            sx={{
              color: link.iconColor || 'initial',
              '&:hover': {
                backgroundColor: link.iconColor
                  ? alpha(link.iconColor, 0.15)
                  : 'initial',
                textDecoration: 'none',
              },
            }}
          >
            {link.icon /*TODO: Figure out how to dynamically import a tabler icon based on the provided name. Maybe stick it into svgr? */}
          </IconButton>
        </Tooltip>
      ))}
    </Box>
  );
};

Builder.registerComponent(IconLinkGroup, {
  name: 'IconLinkGroup',
  image: 'https://tabler-icons.io/static/tabler-icons/icons-png/click.png',
  inputs: [
    {
      name: 'links',
      type: 'list',
      defaultValue: [
        {
          tooltip: 'Google',
          url: 'https://google.com',
          icon: 'Tabler Icon Name Here',
          iconColor: '',
        },
      ],
      subFields: [
        {
          name: 'tooltip',
          type: 'string',
          required: false,
        },
        {
          name: 'url',
          type: 'url',
          required: true,
        },
        { name: 'icon', type: 'string', required: true },
        {
          name: 'iconColor',
          type: 'color',
          required: false,
        },
      ],
    },
  ],
});

export default IconLinkGroup;
