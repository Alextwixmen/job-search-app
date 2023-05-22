import styles from './findVacancy.module.css';
import Filter from '../../components/Filter/Filter';
import SearchVacancy from '../../components/SearchVacancy/SearchVacancy';
import { useState, useEffect, useLayoutEffect } from 'react';
import VacanciesService from '../../services/vacanciesService';
import { Paginate } from '../../components/Pagination/Paginate';
import LocalStorageService from '../../services/localStorageService';
import OptionsService from '../../services/OptionsService';
const FindVacancy = (props) => {
  const [vacancies, changeVacancies] = useState();
  const [isLoading, setLoading] = useState(true);
  const [filterOptions, setFilterOptions] = useState();
  const [inputValue, setValue] = useState('');
  const [totalPages, setTotal] = useState(0);
  const [activePage, setPage] = useState(1);
  const [previousOptions, setPreviousOptions] = useState({});
  const [isAuth, setAuth] = useState(false);
  useEffect(() => {
    const options = OptionsService.getAllOptions();
    setFilterOptions(options);
    setValue(options.vacancyName);
    setPage(Number(options.page) ? Number(options.page) : 1);
    setLoading(true);

    VacanciesService.getVacancies(options).then((data) => {
      if (data === null) {
        console.log('data =>>', data);
      } else {
        changeVacancies(data);
        setLoading(false);
        setAuth(true);
      }
    });
  }, []);

  const handleFilter = (filterInfo) => {
    OptionsService.setFilterOptions({ ...filterInfo, vacancyName: inputValue });
    OptionsService.setPageNumber(1);
    setFilterOptions(filterInfo);
    const filteredVacancies = VacanciesService.getVacancies({
      vacancyName: inputValue,
      ...filterInfo,
      page: 1,
    });
    setLoading(true);
    setPage(1);
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
      <Filter
        handleFilter={handleFilter}
        industryName={filterOptions?.industryName}
        payment_from={filterOptions?.payment_from}
        payment_to={filterOptions?.payment_to}
        industry={filterOptions?.industry}
      />
      <div className={styles.innerContainer}>
        <SearchVacancy
          vacancies={vacancies}
          changeVacancies={changeVacancies}
          isLoading={isLoading}
          handlePagination={handlePagination}
          setValue={setValue}
          filterOptions={filterOptions}
          vacancyName={filterOptions?.vacancyName}
          setPage={setPage}
          setLoading={setLoading}
        />
        <Paginate
          total={totalPages}
          handlePagination={handlePagination}
          page={activePage}
          setPage={setPage}
        />
      </div>
    </div>
  );
};
export default FindVacancy;
