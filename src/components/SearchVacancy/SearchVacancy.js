import SingleVacancy from '../SingleVacancy/SingleVacancy';
import SearchInput from '../SearchInput/SearchInput';
import styles from './searchVacancy.module.css';
import { useEffect, useState } from 'react';
import VacanciesService from '../../services/vacanciesService';
import Loader from '../Loader/Loader';

const SearchVacancy = (props) => {
  const [searchVacancies, handleSearch] = useState();
  const onSubmit = () => {
    props.changeVacancies(searchVacancies);
  };
  const [inputValue, changeInputValue] = useState();
  const handleChange = (e) => {
    changeInputValue(e.target.value);
    VacanciesService.getVacancies({ vacancyName: e.target.value }).then(
      (data) => handleSearch(data)
    );
  };
  return props.isLoading ? (
    <div className={styles.spinnerContainer}>
      <SearchInput
        handleCnahge={handleChange}
        value={inputValue}
        onSubmit={onSubmit}
      />
      <Loader />
    </div>
  ) : (
    <div className={styles.searchVacancyContainer}>
      <SearchInput
        handleCnahge={handleChange}
        value={inputValue}
        onSubmit={onSubmit}
      />
      {props.vacancies.map((elem) => {
        return <SingleVacancy vacancyInfo={elem} key={elem.id} />;
      })}
    </div>
  );
};
export default SearchVacancy;
