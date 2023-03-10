import { BrowserRouter } from 'react-router-dom';
import styled from '@emotion/styled';
import { BuilderComponent } from '@builder.io/react';
import './builder.io';
// Header temporarily hard coded
import Header from './components/header';

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
      </BrowserRouter>
      <BuilderComponent model="page" />
    </Root>
  );
}

export default App;