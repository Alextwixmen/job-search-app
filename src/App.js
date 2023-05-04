import { Button } from '@mantine/core';
import styles from './app.module.css';
import { Routes, Route, Link } from 'react-router-dom';
import Favorites from './pages/Favorites';
import FindVacancy from './pages/FindVacancy';
import Layout from './components/Layout/Layout';
function App() {
  return (
    <>
      <Routes>
        <Route path='/' element={<Layout />}>
          <Route path='/findVacancy' element={<FindVacancy />} />
          <Route path='favorites' element={<Favorites />} />
        </Route>
      </Routes>
    </>
  );
}
export default App;
