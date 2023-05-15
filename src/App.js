import React, { useEffect } from 'react';
import styles from './app.module.css';
import { Routes, Route } from 'react-router-dom';
import Favorites from './pages/Favorites';
import FindVacancy from './pages/FindVacancy';
import Layout from './components/Layout/Layout';
import AuthService from './services/authService';
import SingleVacancy from './pages/SingleVacancy/SingleVacancy';
import NotFound from './pages/NotFound';
// AuthService.auth().then((data) => console.log(data));

function App() {
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
