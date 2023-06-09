import styles from './favorites.module.css';
import Vacancy from '../../components/Vacancy/Vacancy';
import LocalStorageService from '../../services/localStorageService';
import { useState } from 'react';
import { Navigate } from 'react-router-dom';
import { Paginate } from '../../components/Pagination/Paginate';
import refillFavoritesVacancies from '../../utils/refillFavoritesVacancies';

const Favorites = () => {
  const [favoriteVacancies, changeFavoriteVacancies] = useState(
    LocalStorageService.getFavoriteVacancies()
  );
  const [pageNumber, setPageNumber] = useState(1);
  const [vacanciesForPage, setVacanciesForPage] = useState(
    () => LocalStorageService.getFavoriteVacancies()[pageNumber - 1]
  );

  const handleDeleteVacancy = (vacancyInfo) => {
    for (let i = 0; i < favoriteVacancies.length; i++) {
      for (let k = 0; k < favoriteVacancies[i].length; k++) {
        if (favoriteVacancies[i][k].key === vacancyInfo.key) {
          refillFavoritesVacancies(favoriteVacancies[i][k]);
        }
      }
    }

    changeFavoriteVacancies(LocalStorageService.getFavoriteVacancies());

    if (vacanciesForPage.length != 1) {
      setVacanciesForPage(
        LocalStorageService.getFavoriteVacancies()[pageNumber - 1]
      );
    } else {
      const previousPage =
        LocalStorageService.getFavoriteVacancies().length - 1;
      setVacanciesForPage(
        LocalStorageService.getFavoriteVacancies()[previousPage]
      );
      handlePagination(previousPage + 1);
    }
  };
  if (!LocalStorageService.getFavoriteVacancies()?.length) {
    return <Navigate to='/emptyState' />;
  }

  const handlePagination = (e) => {
    setPageNumber(e);
    setVacanciesForPage(favoriteVacancies[e - 1]);
  };

  return (
    <div className={styles.favoritesContainer}>
      <div className={styles.favotiesVacancies}>
        {vacanciesForPage.map((vacancy) => {
          return (
            <Vacancy
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
      </div>

      <Paginate
        total={Math.ceil(favoriteVacancies.length)}
        handlePagination={handlePagination}
        page={pageNumber}
        favoritePagination={'favoritePagination'}
      />
    </div>
  );
};

export default Favorites;
