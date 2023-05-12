import styles from './pages.module.css';
import Filter from '../components/Filter/Filter';
import SearchVacancy from '../components/SearchVacancy/SearchVacancy';
import { useState, useEffect } from 'react';
import VacanciesService from '../services/vacanciesService';
import { Paginate } from '../components/Pagination/Paginate';

const FindVacancy = () => {
  const [vacancies, changeVacancies] = useState();
  const [isLoading, setLoading] = useState(true);
  const [filterOptions, setFilterOptions] = useState();
  const [inputValue, setValue] = useState('');
  const [totalPages, setTotal] = useState(0);
  useEffect(() => {
    let response = VacanciesService.getVacancies();
    setLoading(true);
    response.then((data) => {
      changeVacancies(data);
      setLoading(false);
    });
  }, []);

  const handleFilter = (filterInfo) => {
    const filteredVacancies = VacanciesService.getVacancies({
      vacancyName: inputValue,
      ...filterInfo,
    });
    setLoading(true);
    filteredVacancies.then((vacancy) => {
      changeVacancies(vacancy);
      setLoading(false);
    });
  };

  const handlePagination = (e) => {
    console.log('filterOptions', filterOptions);
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
  const handleFilterOptions = (info) => {
    setFilterOptions(info);
  };
  useEffect(() => {
    if (VacanciesService.total > 500) {
      setTotal(125);
    } else if (VacanciesService.total === 0) {
      setTotal(1);
    } else {
      setTotal(Math.floor(VacanciesService.total / 4));
    }
  }, [VacanciesService.total]);
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
        <Paginate total={totalPages} handlePagination={handlePagination} />
      </div>
    </div>
  );
};
export default FindVacancy;
