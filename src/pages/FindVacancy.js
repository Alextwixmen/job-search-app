import styles from './pages.module.css';
import Filter from '../components/Filter/Filter';
import SearchVacancy from '../components/SearchVacancy/SearchVacancy';
import { useState, useEffect, useLayoutEffect } from 'react';
import VacanciesService from '../services/vacanciesService';
import { Paginate } from '../components/Pagination/Paginate';
import LocalStorageService from '../services/localStorageService';
import OptionsService from '../services/OptionsService';
const FindVacancy = (props) => {
  const [vacancies, changeVacancies] = useState();
  const [isLoading, setLoading] = useState(true);
  const [filterOptions, setFilterOptions] = useState();
  const [inputValue, setValue] = useState('');
  const [totalPages, setTotal] = useState(0);
  const [activePage, setPage] = useState(1);
  const [previousOptions, setPreviousOptions] = useState({});
  useEffect(() => {
    const options = OptionsService.getAllOptions();
    setLoading(true);
    VacanciesService.getVacancies(options).then((data) => {
      changeVacancies(data);
      setLoading(false);
    });
  }, []);

  useLayoutEffect(() => {
    const options = OptionsService.getAllOptions();
    setFilterOptions(options);
  }, []);

  const handleFilter = (filterInfo) => {
    OptionsService.setFilterOpntions(filterInfo);
    setFilterOptions(filterInfo);
    const filteredVacancies = VacanciesService.getVacancies({
      vacancyName: inputValue,
      ...filterInfo,
      page: 1,
    });
    setLoading(true);
    filteredVacancies.then((vacancy) => {
      changeVacancies(vacancy);
      setLoading(false);
    });
  };

  const handlePagination = (e) => {
    OptionsService.setPageNumber(e);
    setPage(e);
    const vacancies = VacanciesService.getVacancies({
      ...filterOptions,
      page: e,
      vacancyName: inputValue,
    });
    setLoading(true);
    vacancies.then((vacancies) => {
      changeVacancies(vacancies);
      setLoading(false);
    });
  };

  useEffect(() => {
    if (VacanciesService.total > 500) {
      setTotal(125);
    } else if (!VacanciesService.total) {
      setTotal(1);
    } else {
      setTotal(Math.ceil(VacanciesService.total / 4));
    }
  }, [VacanciesService.total]);
  return (
    <div className={styles.container}>
      <Filter handleFilter={handleFilter} filterOptions={filterOptions} />
      <div className={styles.innerContainer}>
        <SearchVacancy
          vacancies={vacancies}
          changeVacancies={changeVacancies}
          isLoading={isLoading}
          handlePagination={handlePagination}
          setValue={setValue}
          filterOptions={filterOptions}
        />
        <Paginate
          total={totalPages}
          handlePagination={handlePagination}
          page={
            JSON.parse(LocalStorageService.getItem('options'))?.page ||
            activePage
          }
          setPage={setPage}
        />
      </div>
    </div>
  );
};
export default FindVacancy;
