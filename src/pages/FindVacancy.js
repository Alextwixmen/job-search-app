import styles from './pages.module.css';
import Filter from '../components/Filter/Filter';
import SearchVacancy from '../components/SearchVacancy/SearchVacancy';
import { useState, useEffect } from 'react';
import VacanciesService from '../services/vacanciesService';
import { Paginate } from '../components/Pagination/Paginate';

const FindVacancy = () => {
  const [vacancies, changeVacancies] = useState();
  const [isLoading, setLoading] = useState(true);
  const [filterInfo, setFilterInfo] = useState();

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

  const handlePagination = (e) => {
    const vacancies = VacanciesService.getVacancies({ page: e });
    vacancies.then((vacancies) => {
      changeVacancies(vacancies);
    });
  };
  const changeFilterInfo = (info) => {
    console.log('info', info);
    setFilterInfo(info);
  };
  return (
    <div className={styles.container}>
      <Filter handleFilter={handleFilter} changeFilterInfo={changeFilterInfo} />
      <SearchVacancy
        vacancies={vacancies}
        changeVacancies={changeVacancies}
        isLoading={isLoading}
        handlePagination={handlePagination}
      />
    </div>
  );
};
export default FindVacancy;
