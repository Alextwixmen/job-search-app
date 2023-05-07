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
  // fetch(
  //   'https://startup-summer-2023-proxy.onrender.com/2.0/vacancies/?client_secret=v3.r.137440105.ffdbab114f92b821eac4e21f485343924a773131.06c3bdbb8446aeb91c35b80c42ff69eb9c457948',
  //   {
  //     headers: {
  //       'Content-Type': 'application/json',
  //       'x-secret-key': 'GEU4nvd3rej*jeh.eqp',
  //     },
  //   }
  // )
  //   .then((response) => response.json())
  //   .then((data) => console.log(data));
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
