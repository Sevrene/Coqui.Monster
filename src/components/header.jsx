import { AppBar, Box, Toolbar, useScrollTrigger } from "@mui/material";
import { BuilderComponent, builder } from "@builder.io/react";
import { useEffect, useState } from "react";

import styled from "@emotion/styled";

const StyledAppBar = styled(({ modelData, shouldApplyStyling, ...other }) => (
  <AppBar {...other} />
))`
  transition: box-shadow 0s;
  background: none;
  &::before {
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background: ${({ modelData }) => {
      if (modelData && modelData.backgroundGradient) {
        const { direction, colors } = modelData.backgroundGradient ?? {};
        // If there is only one color, use it as the background color
        if (colors.length === 1) {
          return colors[0].color ?? "transparent";
        }
        // If there are multiple colors, create a linear gradient using them
        const gradientDirection = `${direction || 0}deg`;
        const gradientColors = colors
          .map(
            (color) =>
              `${color.color ? color.color : "rgba(0,0,0,0)"} ${
                color.colorStop
              }%`
          )
          .join(", ");
        return `linear-gradient(${gradientDirection}, ${gradientColors})`;
      } else {
        return "transparent";
      }
    }};
    opacity: ${({ shouldApplyStyling }) => {
      return shouldApplyStyling ? 1 : 0;
    }};
    transition: opacity 0.5s ease-in-out;
  }
`;

/**
  Header Component
  
  A component that renders the header of a web page using data fetched from Builder.io.
  It uses the Material-UI AppBar and Toolbar components and the BuilderComponent to render the content of the header.
  @returns {JSX.Element} The header of a web page.
*/
function Header() {
  const [modelData, setModelData] = useState(null);

  // Fetch data from Builder.io when the component mounts
  useEffect(() => {
    async function fetchData() {
      builder.init(process.env.REACT_APP_BUILDER_IO_ACCESS_TOKEN);
      try {
        const data = await builder.get("header").toPromise();
        setModelData(data.data);
      } catch (error) {
        console.error(error);
      }
    }
    fetchData();
  }, []);

  const trigger = useScrollTrigger({
    target: window,
    disableHysteresis: true,
    threshold: 0,
  });

  // Map elevation values to corresponding numbers
  const elevationMap = {
    none: 0,
    low: 1,
    medium: 12,
    high: 24,
  };

  const shouldApplyStyling =
    modelData?.hideStylingUntilScrolled === false || trigger;

  return (
    <StyledAppBar
      position={modelData?.sticky ? "sticky" : "static"}
      elevation={shouldApplyStyling ? elevationMap[modelData?.elevation] : 0}
      modelData={modelData}
      shouldApplyStyling={shouldApplyStyling}
    >
      <Toolbar variant="dense" disableGutters={true}>
        <Box sx={{ width: "100%" }}>
          <BuilderComponent model="header" />
        </Box>
      </Toolbar>
    </StyledAppBar>
  );
}

export default Header;
