import React from 'react';
import { Button } from '@mantine/core';
import styles from './app.module.css';
import { Routes, Route, Link } from 'react-router-dom';
import Favorites from './pages/Favorites';
import FindVacancy from './pages/FindVacancy';
import Layout from './components/Layout/Layout';
import AuthService from './services/authService';
import SingleVacancy from './pages/SingleVacancy';
import { useEffect } from 'react';
// AuthService.auth();

function App() {
  return (
    <Routes>
      <Route path='/' element={<Layout />}>
        <Route path='/vacancy' element={<FindVacancy />} />
        <Route path='favorites' element={<Favorites />} />
        <Route path='/vacancy/:id' element={<SingleVacancy />} />
      </Route>
    </Routes>
  );
}
export default App;
