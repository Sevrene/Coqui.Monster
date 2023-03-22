import { SpeedDial, SpeedDialAction, Tooltip } from '@mui/material';
import { AlternateEmail, CodeOff, LogoDev } from '@mui/icons-material';

// TODO: Get a custom Developer Logo to use as a Dev Handle

const actions = [
  { icon: <AlternateEmail />, name: "Contact", link: "https://discord.com/users/167827741360652290" },
  { icon: <CodeOff />, name: "Source Code - Currently Private", link: "#" },
];

export default function DevHandle() {
  const handleLinkClick = (link) => () => {
    window.open(link, '_blank');
  };

  return (
    <div style={{ position: "fixed", bottom: 0, right: 0 }}>
      <Tooltip
        title="Sevrene"
        placement="left-end"
        arrow
        PopperProps={{
          modifiers: [{
            name: "offset",
            options: {
              offset: [-15, 0],
            },
          }],
        }}
      >
        <SpeedDial
          ariaLabel="Dev Handle"
          sx={{ position: 'absolute', bottom: 0, right: 0 }}
          icon={<LogoDev />}
        >
          {actions.map((action) => (
            <SpeedDialAction
              key={action.name}
              icon={action.icon}
              tooltipTitle={action.name}
              onClick={action.name !== "Source Code - Currently Private" ? handleLinkClick(action.link) : null}
            />
          ))}
        </SpeedDial>
      </Tooltip>
    </div>
  );
}

