import SingleVacancy from '../SingleVacancy/SingleVacancy';
import SearchInput from '../SearchInput/SearchInput';
import styles from './searchVacancy.module.css';
import { useEffect, useState } from 'react';
import VacanciesService from '../../services/vacanciesService';
import Loader from '../Loader/Loader';

const SearchVacancy = () => {
  const [vacancies, changeVacancies] = useState();
  useEffect(() => {
    VacanciesService.getVacancies().then((data) => changeVacancies(data));
  }, []);

  const [searchVacancies, handleSearch] = useState();
  const onSubmit = () => {
    changeVacancies(searchVacancies);
  };
  const [inputValue, changeInputValue] = useState();
  const handleChange = (e) => {
    changeInputValue(e.target.value);
    VacanciesService.getVacancies({ vacancyName: e.target.value }).then(
      (data) => handleSearch(data)
    );
  };

  if (!vacancies)
    return (
      <div className={styles.searchVacancyContainer}>
        <SearchInput
          handleCnahge={handleChange}
          value={inputValue}
          onSubmit={onSubmit}
        />
        <Loader />
      </div>
    );
  return (
    <div className={styles.searchVacancyContainer}>
      <SearchInput
        handleCnahge={handleChange}
        value={inputValue}
        onSubmit={onSubmit}
      />
      {vacancies.map((elem) => {
        return <SingleVacancy vacancyInfo={elem} />;
      })}
    </div>
  );
};
export default SearchVacancy;
