import styles from './pages.module.css';
import SingleVacancy from '../components/SingleVacancy/SingleVacancy';
import LocalStorageService from '../services/localStorageService';
import { useState } from 'react';
import { Navigate } from 'react-router-dom';
import { Paginate } from '../components/Pagination/Paginate';
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
  if (!localStorage.length) {
    return <Navigate to='/notFound' />;
  }
  const handlePagination = (e) => {
    console.log('клик');
  };
  return (
    <div className={styles.favoritesContainer}>
      {favoriteVacancies.map((vacancy) => {
        return (
          <SingleVacancy
            vacancyInfo={vacancy}
            handleDeleteVacancy={handleDeleteVacancy}
            favoriteStar={true}
            key={vacancy.key}
            vacancyName={'vacancyName'}
            vacancySalary={'salaryInfo'}
            typeOfWork={'typeOfWork'}
            vacancyMainPart={'vacancyMainPart'}
          />
        );
      })}
      <Paginate
        total={Math.round(favoriteVacancies.length / 4)}
        handlePagination={handlePagination}
      />
    </div>
  );
};

export default Favorites;
