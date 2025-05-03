'use client';

import {
  Box,
  Drawer,
  List,
  ListItem,
  Tooltip,
  Typography,
} from '@mui/material';

import { DrawerContext } from '@/providers/drawerCtxProvider';
import { IconExternalLink } from '@tabler/icons-react';
import React from 'react';
import { Redirect } from '@/payload-types';

interface RedirectsMenuProps {
  redirects: Redirect[];
}

export default function RedirectsMenu({ redirects }: RedirectsMenuProps) {
  const { openDrawer, toggleDrawer } = React.useContext(DrawerContext);
  const isOpen = openDrawer === 'redirects';

  return (
    <Drawer anchor='right' open={isOpen} onClose={() => toggleDrawer(null)}>
      <Box
        sx={{
          display: 'flex',
          justifyContent: 'center',
          padding: '16px',
          backgroundColor: 'link.main',
          border: '1px solid black',
        }}
      >
        <IconExternalLink color='black' />
      </Box>
      <List style={{ width: '300px', padding: '0' }}>
        {redirects.map((redirect) => {
          if (redirect.hidden) return null;

          if (!redirect.to.url || !redirect.from || !redirect.name) {
            console.error('Invalid redirect data', redirect);
            return null;
          }

          return (
            <ListItem
              key={redirect.from}
              component='a'
              href={redirect.to.url}
              target='_blank'
              rel='noopener noreferrer'
              divider
              sx={{
                display: 'flex',
                flexDirection: 'column',
                gap: 0.25,
                px: 2,
                py: 1.5,
                color: 'inherit',
                backgroundColor: 'background.paper',
                filter: 'brightness(1)',
                transition:
                  'transform 0.2s cubic-bezier(.4,2,.6,1), background-color 0.2s, filter 0.2s, padding-bottom 0.2s',
                '&:hover': {
                  backgroundColor: 'background.paper',
                  filter: 'brightness(1.5)',
                  pb: 2.5,
                },
              }}
            >
              <Box
                display='flex'
                alignItems='center'
                justifyContent='space-between'
                width='100%'
              >
                <Typography variant='body1' fontWeight={500}>
                  {redirect.name}
                </Typography>
                <IconExternalLink />
              </Box>

              <Tooltip
                title={process.env.NEXT_PUBLIC_BASE_URL + redirect.from}
                placement='left'
              >
                <Typography
                  variant='body2'
                  color='text.secondary'
                  sx={{
                    whiteSpace: 'nowrap',
                    overflow: 'hidden',
                    textOverflow: 'ellipsis',
                    fontFamily: 'monospace',
                    width: '100%',
                  }}
                >
                  {redirect.from}
                </Typography>
              </Tooltip>

              <Tooltip title={redirect.to.url} placement='left'>
                <Typography
                  variant='caption'
                  color='text.disabled'
                  sx={{
                    whiteSpace: 'nowrap',
                    overflow: 'hidden',
                    textOverflow: 'ellipsis',
                    fontFamily: 'monospace',
                    width: '100%',
                  }}
                >
                  {`→ ${redirect.to.url}`}
                </Typography>
              </Tooltip>
            </ListItem>
          );
        })}
      </List>
    </Drawer>
  );
}
