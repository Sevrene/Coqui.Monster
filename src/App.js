import "./builder.io";

import { Route, Routes } from "react-router-dom";

import { BrowserRouter } from "react-router-dom";
import { BuilderComponent } from "@builder.io/react";
import DevHandle from "./components/devHandle";
import Header from "./components/header";
import styled from "@emotion/styled";

// Root styling temporarily hard coded
const Root = styled.div`
  background: linear-gradient(180deg, #6600cc 0%, #000000 100%);
  min-height: 100vh;
`;

function App() {
  return (
    <Root>
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
    </Root>
  );
}

export default App;
