import SingleVacancy from '../SingleVacancy/SingleVacancy';
import SearchInput from '../SearchInput/SearchInput';
import styles from './searchVacancy.module.css';
import { useEffect, useState } from 'react';
import VacanciesService from '../../services/vacanciesService';
import Loader from '../Loader/Loader';
import LocalStorageService from '../../services/localStorageService';
import OptionsService from '../../services/OptionsService';
const SearchVacancy = (props) => {
  const [inputValue, changeInputValue] = useState('');
  const onSubmit = () => {
    VacanciesService.getVacancies({
      vacancyName: inputValue,
      ...props.filterOptions,
    }).then((data) => {
      props.changeVacancies(data);
    });
  };
  useEffect(() => {
    changeInputValue(props.vacancyName);
  }, []);
  useEffect(() => {
    changeInputValue(props.vacancyName);
  }, [props.vacancyName]);

  const handleChahge = (e) => {
    props.setValue(e.target.value);
    changeInputValue(e.target.value);
    OptionsService.setInputValue(e.target.value);
  };

  return props.isLoading ? (
    <div className={styles.spinnerContainer}>
      <SearchInput
        handleChange={handleChahge}
        value={inputValue}
        onSubmit={onSubmit}
      />
      <Loader />
    </div>
  ) : (
    <div className={styles.searchVacancyContainer}>
      <SearchInput
        handleChange={handleChahge}
        value={inputValue}
        onSubmit={onSubmit}
        inputValue={props.filterOptions}
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
