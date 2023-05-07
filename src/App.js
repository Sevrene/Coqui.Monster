import "./builder.io";

import { Route, Routes } from "react-router-dom";
import builder, { BuilderComponent } from "@builder.io/react";
import { useEffect, useState } from "react";

import { Box } from "@mui/system";
import { BrowserRouter } from "react-router-dom";
import DevHandle from "./components/devHandle";
import Header from "./components/header";

function App() {
  const [modelData, setModelData] = useState(null);

  // Fetch data from Builder.io when the component mounts
  useEffect(() => {
    async function fetchData() {
      builder.init(process.env.REACT_APP_BUILDER_IO_ACCESS_TOKEN);
      try {
        const data = await builder.get("page").toPromise();
        setModelData(data.data);
      } catch (error) {
        console.error(error);
      }
    }
    fetchData();
  }, []);

  //if (modelData) {
  //  const ogImage = document.querySelector('#og-image');
  //  ogImage.setAttribute('content', modelData.image);
  //}

  const backgroundStyle = () => {
    if (modelData?.backgroundGradient) {
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
            `${color.color ? color.color : "rgba(0,0,0,0)"} ${color.colorStop}%`
        )
        .join(", ");
      return `linear-gradient(${gradientDirection}, ${gradientColors})`;
    } else {
      return "#A9A9A9";
    }
  };

  return (
    <Box sx={{ minHeight: "100vh", background: backgroundStyle() }}>
      <BrowserRouter>
        <Header />
        <Routes>
          <Route
            path="/"
            element={
              <BuilderComponent
                model="page"
                contentLoaded={(modelData) => {
                  const seoDesc = document.querySelector('#SEO-Desc');
                  seoDesc.setAttribute('content', modelData.description)
                  const seoImage = document.querySelector('#SEO-Image');
                  seoImage.setAttribute('content', modelData.image);

                }}
              />
            }
          />
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
  );
}

export default App;
