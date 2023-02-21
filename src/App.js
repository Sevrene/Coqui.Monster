import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { useEffect, useState } from 'react';
import Header from './components/header';
import styled from '@emotion/styled';
import LandingPage from './pages/LandingPage';
import { FetchData } from './contentful';

const Root = styled.div`
  background: linear-gradient(180deg, #311b92 0%, #000000 100%);
  min-height: 100vh;
`;

function App() {
  const [pages, setPages] = useState([]);

  useEffect(() => {
    FetchData('page').then(pages => {
      setPages(pages);
    });
  }, []);
  
  return (
    <Root>
      <Header />
      <BrowserRouter>
        <Routes>
          {pages.map((page) => {
            return (
              <Route
              key={page.urlSlug}
              path={page.urlSlug}
              element={<LandingPage pageData={page} />}
              />
            ) 
          })}
          <Route path="*" element={<p>Fetching Pages</p>} /> 
        </Routes>
      </BrowserRouter>
    </Root>
  );
}

export default App;