import React from 'react';
import { Route, Routes } from 'react-router-dom';
import HomePage from './HomePage';
import DetailPage from './DetailPage';

function App() {
  return <>
      <Routes>
        <Route exact path="/" element={<HomePage/>} />
        <Route path="/item/:id" element={<DetailPage/>} />
      </Routes>
  </>
}

export default App;
