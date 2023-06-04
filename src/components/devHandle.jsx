import { AlternateEmail, Code, LogoDev } from "@mui/icons-material";
import { SpeedDial, SpeedDialAction, Tooltip } from "@mui/material";

const actions = [
  {
    icon: <AlternateEmail />,
    name: "Is Graphic Design your passion? Get in touch with me on Discord!",
    link: "https://discord.com/users/167827741360652290",
  },
  {
    icon: <Code />,
    name: "Source Code - Feel free to contribute!",
    link: "https://github.com/Sevrene/Coqui.Monster",
  },
];

const tooltipStyles = {
  tooltip: {
    sx: {
      textAlign: "center",
      fontSize: "1.2rem",
      fontWeight: "bold",
      color: "white",
      backgroundColor: "black",
      borderRadius: "1rem",
      padding: "0.5rem",
      boxShadow: "0 0 0.5rem black",
    },
  },
};

// TODO: Work out a way to make the dev handle work as intended on mobile devices.
/**
 * @file Dev Handle Component
 *
 * @summary A component that displays a dev handle in the bottom right corner of the screen.
 * @description This component is used to display a dev handle in the bottom right corner of the screen.
 *
 * @returns {React.Component} DevHandle
 */
function DevHandle() {
  const handleLinkClick = (link) => () => {
    window.open(link, "_blank");
  };

  return (
    <div style={{ position: "fixed", bottom: 0, right: 0 }}>
      <Tooltip
        title="Sevrene"
        placement="left-end"
        PopperProps={{
          modifiers: [
            {
              name: "offset",
              options: {
                offset: [-15, 0],
              },
            },
          ],
        }}
        componentsProps={tooltipStyles}
      >
        <SpeedDial
          ariaLabel="Dev Handle"
          sx={{ position: "absolute", bottom: 0, right: 0 }}
          icon={<LogoDev />}
          FabProps={{
            sx: {
              background: "transparent",
              "&:hover": {
                backgroundColor: "transparent",
              },
              boxShadow: 0,
            },
          }}
        >
          {actions.map((action) => (
            <SpeedDialAction
              key={action.name}
              icon={action.icon}
              tooltipTitle={action.name}
              componentsProps={tooltipStyles}
              onClick={handleLinkClick(action.link)}
            />
          ))}
        </SpeedDial>
      </Tooltip>
    </div>
  );
}

export default DevHandle;
