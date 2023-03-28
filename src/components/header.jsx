import { AppBar, Box, Toolbar } from "@mui/material";
import { BuilderComponent, builder } from "@builder.io/react";
import { useEffect, useState } from "react";

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

  // Map elevation values to corresponding numbers
  const elevationMap = {
    none: 0,
    low: 1,
    medium: 12,
    high: 24,
  };

  let backgroundStyle = {};

  // Once the model data has been fetched, determine the background styling based on any background gradient provided
  if (modelData) {
    const { direction, colors } = modelData.backgroundGradient;
    // If there is only one color, use it as the background color
    if (colors.length === 1) {
      backgroundStyle = { backgroundColor: colors[0].color ?? "transparent" };
    } else {
      // If there are multiple colors, create a linear gradient using them
      const gradientDirection = `${direction || 0}deg`;
      const gradientColors = colors
        .map(
          (color) =>
            `${color.color ? color.color : "rgba(0,0,0,0)"} ${color.colorStop}%`
        )
        .join(", ");
      backgroundStyle = {
        background: `linear-gradient(${gradientDirection}, ${gradientColors})`,
      };
    }
  }

  return (
    <AppBar
      position={modelData?.sticky ? "sticky" : "static"}
      elevation={elevationMap[modelData?.elevation]}
      sx={{ ...backgroundStyle }}
    >
      <Toolbar variant="dense" disableGutters={true}>
        <Box sx={{ width: "100%" }}>
          <BuilderComponent model="header" data={modelData} />
        </Box>
      </Toolbar>
    </AppBar>
  );
}

export default Header;
