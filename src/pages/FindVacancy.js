import styles from './pages.module.css';
import Filter from '../components/Filter/Filter';
import SearchVacancy from '../components/SearchVacancy/SearchVacancy';
import { useState, useEffect } from 'react';
import VacanciesService from '../services/vacanciesService';
import { Paginate } from '../components/Pagination/Paginate';
import LocalStorageService from '../services/localStorageService';

const FindVacancy = (props) => {
  const [vacancies, changeVacancies] = useState();
  const [isLoading, setLoading] = useState(true);
  const [filterOptions, setFilterOptions] = useState();
  const [inputValue, setValue] = useState('');
  const [totalPages, setTotal] = useState(0);
  const [activePage, setPage] = useState(1);
  useEffect(() => {
    let response = VacanciesService.getVacancies(
      JSON.parse(LocalStorageService.getItem('options'))
    );
    setLoading(true);
    response.then((data) => {
      changeVacancies(data);
      setLoading(false);
    });
  }, []);

  const handleFilter = (filterInfo) => {
    console.log('filterInfo', filterInfo);
    LocalStorageService.setItem({
      ...JSON.parse(LocalStorageService.getItem('options')),
      page: 1,
    });
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

  const handleFilterOptions = (info) => {
    const options = JSON.parse(LocalStorageService.getItem('options'));
    if (options) {
      LocalStorageService.setItem({
        ...options,
        payment_from: info.payment_from || options.payment_from,
        payment_to: info.payment_to || options.payment_to,
        industry:
          info.industry ||
          JSON.parse(LocalStorageService.getItem('options')).industry,
      });
    } else {
      LocalStorageService.setItem({
        key: 'options',
        payment_from: info.payment_from,
        payment_to: info.payment_to,
      });
    }
    setFilterOptions(info);
  };

  const handlePagination = (e) => {
    const options = JSON.parse(LocalStorageService.getItem('options'));
    LocalStorageService.setItem({ ...options, key: 'options', page: e });
    setPage(e);
    const vacancies = VacanciesService.getVacancies({
      ...filterOptions,
      page: e,
      count: '',
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
      setTotal(Math.floor(VacanciesService.total / 4));
    }
  }, [VacanciesService.total]);
  // console.log(filterOptions?.industry);
  return (
    <div className={styles.container}>
      <Filter
        handleFilter={handleFilter}
        handleFilterOptions={handleFilterOptions}
      />
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
