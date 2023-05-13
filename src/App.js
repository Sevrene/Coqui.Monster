import "./builder.io";

import { Route, Routes } from "react-router-dom";
import builder, { BuilderComponent } from "@builder.io/react";
import { useEffect, useState } from "react";

import { Box } from "@mui/system";
import { BrowserRouter } from "react-router-dom";
import DevHandle from "./components/devHandle";
import Header from "./components/header";

builder.init(process.env.REACT_APP_BUILDER_IO_ACCESS_TOKEN);

function App() {
  const [backgroundStyle, setBackgroundStyle] = useState("#A9A9A9");
  const [isBackgroundLoaded, setIsBackgroundLoaded] = useState(false);

  useEffect(() => {
    builder.init(process.env.REACT_APP_BUILDER_IO_ACCESS_TOKEN);
    builder.get('background-style').promise().then(({ data }) => {
      const { direction, colors } = data?.backgroundGradient ?? {};
      if (colors && colors.length > 0) {
        const gradientDirection = `${direction || 0}deg`;
        const gradientColors = colors
          .map(
            (color) =>
              `${color.color ? color.color : "rgba(0,0,0,0)"} ${color.colorStop}%`
          )
          .join(", ");
        const backgroundGradient = `linear-gradient(${gradientDirection}, ${gradientColors})`;
        setBackgroundStyle(backgroundGradient);
      } else {
        setBackgroundStyle("#A9A9A9");
      }
    }).catch((error) => {
      console.error(error);
      setBackgroundStyle("#A9A9A9");
    }).finally(() => {
      setIsBackgroundLoaded(true);
    });
  }, []);

  return (
    <>
      {isBackgroundLoaded && (
      <Box sx={{ minHeight: "100vh", background: backgroundStyle }}>
        <BrowserRouter>
          <Header />
          <Routes>
            <Route path="/" element={<BuilderComponent model="page" />} />
            if (Builder.isPreviewing || Builder.isEditing){" "}
            {
              <Route
                path="/preview"
                element={<BuilderComponent model="symbol" />}
              />
            }
          </Routes>
          <DevHandle />
        </BrowserRouter>
      </Box>
    )}
  </>
  );
}

export default App;
