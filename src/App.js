import React, { useContext, useEffect, useLayoutEffect, useState } from 'react';
import styles from './app.module.css';
import { Routes, Route } from 'react-router-dom';
import Favorites from './pages/Favorites/Favorites';
import FindVacancy from './pages/FindVacancy/FindVacancy';
import Layout from './components/Layout/Layout';
import AuthService from './services/authService';
import SingleVacancy from './pages/SingleVacancy/SingleVacancy';
import NotFound from './pages/NotFound/NotFound';
import LocalStorageService from './services/localStorageService';
import dateHelper from './utils/dateHelper';
import OptionsService from './services/OptionsService';
import { useNavigate } from 'react-router-dom';
// AuthService.auth().then((data) => console.log(data));

function App() {
  const navigate = useNavigate();

  LocalStorageService.deleteItem('options');
  useEffect(() => {
    localStorage.setItem('favoritesVacancies', JSON.stringify([]));
    OptionsService.resetAllOptions();
  }, []);
  useEffect(() => {
    if (!localStorage.getItem('bearer')) {
      AuthService.auth().then((data) => {
        LocalStorageService.setBearer(JSON.stringify(data));
        navigate('/vacancy');
      });
    } else {
      const isRefresh = dateHelper(
        JSON.parse(localStorage.getItem('bearer')).ttl
      );
      if (isRefresh) {
        const access_token = JSON.parse(
          LocalStorageService.getItem('bearer')
        ).access_token;
        AuthService.refreshToken(access_token).then((data) =>
          LocalStorageService.setBearer(JSON.stringify(data))
        );
      }
    }
  }, []);
  return (
    <Routes>
      <Route path='/' element={<Layout />}>
        <Route path='/vacancy' element={<FindVacancy />} />
        <Route path='favorites' element={<Favorites />} />
        <Route path='/vacancy/:id' element={<SingleVacancy />} />
        <Route path='/notFound' element={<NotFound />} />
      </Route>
    </Routes>
  );
}
export default App;
