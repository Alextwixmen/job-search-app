import styles from './pages.module.css';
import Filter from '../components/Filter/Filter';
import SearchVacancy from '../components/SearchVacancy/SearchVacancy';
import { useState, useEffect } from 'react';
import VacanciesService from '../services/vacanciesService';
const FindVacancy = () => {
  const [vacancies, changeVacancies] = useState();
  const [isLoading, setLoading] = useState(true);
  useEffect(() => {
    let response = VacanciesService.getVacancies();
    setLoading(true);
    response.then((data) => {
      changeVacancies(data);
      setLoading(false);
    });
  }, []);
  const handleFilter = (filterInfo) => {
    const filteredVacancies = VacanciesService.getVacancies(filterInfo);
    setLoading(true);
    filteredVacancies.then((vacancy) => {
      changeVacancies(vacancy);
      setLoading(false);
    });
  };
  return (
    <div className={styles.container}>
      <Filter handleFilter={handleFilter} />
      <SearchVacancy
        vacancies={vacancies}
        changeVacancies={changeVacancies}
        isLoading={isLoading}
      />
    </div>
  );
};
export default FindVacancy;
