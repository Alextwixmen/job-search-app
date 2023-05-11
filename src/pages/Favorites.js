import styles from './pages.module.css';
import SingleVacancy from '../components/SingleVacancy/SingleVacancy';
import LocalStorageService from '../services/localStorageService';
import { useState } from 'react';
import { Navigate } from 'react-router-dom';
const Favorites = () => {
  const [favoriteVacancies, changeFavoriteVacancies] = useState(
    LocalStorageService.getFavoriteVacancies()
  );
  const handleDeleteVacancy = (vacancyInfo) => {
    changeFavoriteVacancies(
      favoriteVacancies.filter((vacancy) => {
        return vacancy.key !== vacancyInfo.key;
      })
    );
    LocalStorageService.deleteItem(vacancyInfo.key);
  };
  if (localStorage.length === 0) {
    return <Navigate to='/notFound' />;
  }
  return (
    <div className={styles.favoritesContainer}>
      {favoriteVacancies.map((vacancy) => {
        return (
          <SingleVacancy
            vacancyInfo={vacancy}
            handleDeleteVacancy={handleDeleteVacancy}
            favoriteStar={true}
          />
        );
      })}
    </div>
  );
};

export default Favorites;
