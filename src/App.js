import { BrowserRouter } from 'react-router-dom';
import styled from '@emotion/styled';
import { BuilderComponent } from '@builder.io/react';
import './builder.io';
import { Route, Routes } from 'react-router-dom';
// Header temporarily hard coded
import Header from './components/header';
import DevHandle from './components/devHandle';

// Root styling temporarily hard coded
const Root = styled.div`
  background: linear-gradient(180deg, #6600cc 0%, #000000 100%);
  min-height: 100vh;
`;

function App() {
  return (
    <Root>
      <BrowserRouter>
        {/* Header temporarily hard coded */}
        <Header />
        <Routes>
          <Route path="/" element={<BuilderComponent model="page" />} />
          <Route path="/preview" element={<BuilderComponent model="symbol" />} />
        </Routes>
        <DevHandle />
      </BrowserRouter>
      </Root>
  );
}

export default App;