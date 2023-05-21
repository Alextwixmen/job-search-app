import SingleVacancy from '../SingleVacancy/SingleVacancy';
import SearchInput from '../SearchInput/SearchInput';
import styles from './searchVacancy.module.css';
import { useEffect, useState } from 'react';
import VacanciesService from '../../services/vacanciesService';
import Loader from '../Loader/Loader';
import LocalStorageService from '../../services/localStorageService';

const SearchVacancy = (props) => {
  const [searchVacancies, handleSearch] = useState();
  const onSubmit = () => {
    VacanciesService.getVacancies({
      vacancyName:
        inputValue ||
        JSON.parse(LocalStorageService.getItem('options'))?.inputValue,
      ...props.filterOptions,
      industry: '',
    }).then((data) => {
      handleSearch(data);
      props.changeVacancies(data);
    });
  };
  const [inputValue, changeInputValue] = useState('');

  const handleChahge = (e) => {
    props.setValue(e.target.value);
    changeInputValue(e.target.value);
    const options = JSON.parse(LocalStorageService.getItem('options'));
    LocalStorageService.setItem({
      ...options,
      inputValue: e.target.value,
      key: 'options',
    });
  };
  return props.isLoading ? (
    <div className={styles.spinnerContainer}>
      <SearchInput
        handleChange={handleChahge}
        value={
          inputValue ||
          JSON.parse(LocalStorageService.getItem('options'))?.inputValue
        }
        onSubmit={onSubmit}
      />
      <Loader />
    </div>
  ) : (
    <div className={styles.searchVacancyContainer}>
      <SearchInput
        handleChange={handleChahge}
        value={
          inputValue ||
          JSON.parse(LocalStorageService.getItem('options'))?.inputValue
        }
        onSubmit={onSubmit}
      />
      <div className={styles.singleVacancyContainer}>
        {props.vacancies.map((elem) => {
          return (
            <SingleVacancy
              vacancyInfo={elem}
              key={elem.id}
              vacancyName={'vacancyName'}
              vacancySalary={'salaryInfo'}
              typeOfWork={'typeOfWork'}
              vacancyMainPart={'vacancyMainPart'}
            />
          );
        })}
      </div>
    </div>
  );
};
export default SearchVacancy;
