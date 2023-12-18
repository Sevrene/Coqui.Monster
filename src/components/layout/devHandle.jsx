import { AlternateEmail, Code, LogoDev } from '@mui/icons-material';

import SpeedDial from '@mui/material/SpeedDial';
import SpeedDialAction from '@mui/material/SpeedDialAction';
import Tooltip from '@mui/material/Tooltip';
import { useState } from 'react';

const actions = [
  {
    icon: <Code />,
    name: 'Source Code - Feel free to contribute!',
    link: 'https://github.com/Sevrene/Coqui.Monster',
  },
  {
    icon: <AlternateEmail />,
    name: 'Discord Contact',
    link: 'https://discord.com/users/167827741360652290',
  },
];

const tooltipStyles = {
  sx: {
    fontSize: '1rem',
  },
};

/**
 * A component that displays a speed dial with links to the source code and Discord contact.
 *
 * @returns {JSX.Element} The `DevHandle` component.
 */
export default function DevHandle() {
  const [open, setOpen] = useState(false);

  return (
    <Tooltip
      title='Sevrene'
      placement='right-end'
      PopperProps={{
        modifiers: [
          {
            name: 'offset',
            options: {
              offset: [-15, 0],
            },
          },
        ],
      }}
      slotProps={{ tooltip: tooltipStyles }}
      open={open}
    >
      <SpeedDial
        ariaLabel='Credits dial'
        sx={{
          position: 'absolute',
          bottom: 0,
          left: 0,
        }}
        FabProps={{
          sx: {
            color: 'grey',
            background: 'transparent',
            '&:hover': {
              backgroundColor: 'transparent',
            },
            boxShadow: 'none',
          },
        }}
        direction='up'
        open={open}
        onOpen={() => setOpen(true)}
        onClose={() => setOpen(false)}
        icon={<LogoDev />}
      >
        {actions.map((action) => (
          <SpeedDialAction
            key={action.name}
            icon={action.icon}
            tooltipTitle={action.name}
            slotProps={{ tooltip: tooltipStyles }}
            onClick={() =>
              window.open(action.link, '_blank', 'noopener,noreferrer')
            }
          />
        ))}
      </SpeedDial>
    </Tooltip>
  );
}
