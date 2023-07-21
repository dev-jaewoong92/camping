import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import styled from '@emotion/styled';
import Header from './components/Header';
import Categories from './components/Categories';
import ItemList from './components/ItemList';

const AppWrapper = styled.div`
  font-family: Arial, sans-serif;
  max-width: 500px;
  margin: 0 auto;
  padding: 16px;
`;

const App = () => {
    return (
        <BrowserRouter>
            <AppWrapper>
                <Header />
                <Routes>
                    <Route path="/" element={<Categories />} />
                    <Route path="/category/*" element={<ItemList />} />
                </Routes>
            </AppWrapper>
        </BrowserRouter>
    );
};

export default App;