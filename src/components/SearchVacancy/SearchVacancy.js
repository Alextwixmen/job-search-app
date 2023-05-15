import SingleVacancy from '../SingleVacancy/SingleVacancy';
import SearchInput from '../SearchInput/SearchInput';
import styles from './searchVacancy.module.css';
import { useEffect, useState } from 'react';
import VacanciesService from '../../services/vacanciesService';
import Loader from '../Loader/Loader';

const SearchVacancy = (props) => {
  const [searchVacancies, handleSearch] = useState();
  const onSubmit = () => {
    VacanciesService.getVacancies({
      vacancyName: inputValue,
      ...props.filterOptions,
      industry: '',
    }).then((data) => {
      handleSearch(data);
      props.changeVacancies(data);
    });
  };
  const [inputValue, changeInputValue] = useState('');

  // useEffect(() => {
  //   VacanciesService.getVacancies({
  //     vacancyName: inputValue,
  //     ...props.filterOptions,
  //     industry: '',
  //   }).then((data) => handleSearch(data));
  // }, [inputValue]);

  const handleChahge = (e) => {
    props.setValue(e.target.value);
    changeInputValue(e.target.value);
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
      />
      <div className={styles.singleVacancyContainer}>
        {props.vacancies.map((elem) => {
          return <SingleVacancy vacancyInfo={elem} key={elem.id} />;
        })}
      </div>
    </div>
  );
};
export default SearchVacancy;
