import { AlternateEmail, CodeOff, LogoDev } from "@mui/icons-material";
import { SpeedDial, SpeedDialAction, Tooltip } from "@mui/material";

const actions = [
  {
    icon: <AlternateEmail />,
    name: "Contact",
    link: "https://discord.com/users/167827741360652290",
  },
  { icon: <CodeOff />, name: "Source Code - Currently Private", link: "#" },
];

/**
  DevHandle Component

  A component that renders a dev handle button that opens a SpeedDial with links to the developer's contact information and source code.
  @returns {JSX.Element} The dev handle button.
*/
function DevHandle() {
  /**
    Handles link clicks by opening the link in a new tab.
    @param {string} link - The link to open in a new tab.
  */
  const handleLinkClick = (link) => () => {
    window.open(link, "_blank");
  };

  return (
    <div style={{ position: "fixed", bottom: 0, right: 0 }}>
      <Tooltip
        title="Sevrene"
        placement="left-end"
        arrow
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
      >
        <SpeedDial
          ariaLabel="Dev Handle"
          sx={{ position: "absolute", bottom: 0, right: 0 }}
          icon={<LogoDev />}
        >
          {actions.map((action) => (
            <SpeedDialAction
              key={action.name}
              icon={action.icon}
              tooltipTitle={action.name}
              onClick={
                action.name !== "Source Code - Currently Private"
                  ? handleLinkClick(action.link)
                  : null
              }
            />
          ))}
        </SpeedDial>
      </Tooltip>
    </div>
  );
}

export default DevHandle;
