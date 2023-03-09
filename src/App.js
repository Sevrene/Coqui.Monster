import './App.css';
import { BrowserRouter } from 'react-router-dom';
import { BuilderComponent } from '@builder.io/react';
import Header from './components/header';
import styled from '@emotion/styled';
import './builder.io';

const Root = styled.div`
  background: linear-gradient(180deg, #6600cc 0%, #000000 100%);
  min-height: 100vh;
`;

function App() {
  return (
    <Root>
      <BrowserRouter>
        <Header />
      </BrowserRouter>
      <BuilderComponent model="page" />
    </Root>
  );
}

export default App;