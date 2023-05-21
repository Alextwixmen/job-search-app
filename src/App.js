import React, { useContext, useEffect, useLayoutEffect, useState } from 'react';
import styles from './app.module.css';
import { Routes, Route } from 'react-router-dom';
import Favorites from './pages/Favorites';
import FindVacancy from './pages/FindVacancy';
import Layout from './components/Layout/Layout';
import AuthService from './services/authService';
import SingleVacancy from './pages/SingleVacancy/SingleVacancy';
import NotFound from './pages/NotFound';
import LocalStorageService from './services/localStorageService';
import dateHelper from './utils/dateHelper';
import OptionsService from './services/OptionsService';

// AuthService.auth().then((data) => console.log(data));
localStorage.setItem(
  'bearer',
  JSON.stringify({
    access_token:
      'v3.r.137440105.7b5ee2c83b2dabfefa1cdf0534feb56029e0df2f.0b63a12f8a31fbf13324bdbb5ab2ada86441667f',
    refresh_token:
      'v3.r.137440105.3937d2f10b8fe9e867519b2b22b4cf3ea9e98836.1437fccc29bb4a918c30b11b05d4dcd7d21b2a1b',
    ttl: 1685223389,
    expires_in: 604800,
    token_type: 'Bearer',
    reg_user_resumes_count: 1,
  })
);
function App() {
  LocalStorageService.deleteItem('options');

  useLayoutEffect(() => {
    localStorage.setItem('favoritesVacancies', JSON.stringify([]));
    OptionsService.resetAllOptions();
  }, []);
  useEffect(() => {
    // if (!localStorage.getItem('bearer')) {
    //   // AuthService.auth().then((data) =>
    //   //   LocalStorageService.setBearer(JSON.stringify(data))
    //   // );
    // } else {
    //   const isRefresh = dateHelper(
    //     JSON.parse(localStorage.getItem('bearer')).ttl
    //   );
    //   if (isRefresh) {
    //     const access_token = JSON.parse(
    //       LocalStorageService.getItem('bearer')
    //     ).access_token;
    //     AuthService.refreshToken(access_token).then((data) =>
    //       LocalStorageService.setBearer(JSON.stringify(data))
    //     );
    //   }
    // }
  }, []);
  return (
    <Routes>
      <Route path='/' element={<Layout />}>
        <Route path='/vacancy' element={<FindVacancy />} />
        <Route path='favorites' element={<Favorites />} />
        <Route path='/vacancy/:id' element={<SingleVacancy />} />
        <Route path='/notFound' element={<NotFound />} />
        <Route path='/vacancy/:query' element={<FindVacancy />} />
      </Route>
    </Routes>
  );
}
export default App;
