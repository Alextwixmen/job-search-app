import styles from './pages.module.css';
import Filter from '../components/Filter/Filter';
import SearchVacancy from '../components/SearchVacancy/SearchVacancy';
import { useState, useEffect } from 'react';
import VacanciesService from '../services/vacanciesService';
const FindVacancy = () => {
  const [vacancies, changeVacancies] = useState();
  useEffect(() => {
    VacanciesService.getVacancies().then((data) => changeVacancies(data));
  }, []);
  const handleFilter = (filterInfo) => {
    console.log('handleFilter');
    const filteredVacancies = VacanciesService.getVacancies(filterInfo);
    filteredVacancies.then((vacancy) => changeVacancies(vacancy));
  };
  return (
    <div className={styles.container}>
      <Filter handleFilter={handleFilter} />
      <SearchVacancy vacancies={vacancies} changeVacancies={changeVacancies} />
    </div>
  );
};
export default FindVacancy;
