import SingleVacancy from '../Vacancy/Vacancy';
import SearchInput from '../SearchInput/SearchInput';
import styles from './searchVacancy.module.css';
import { useEffect, useState } from 'react';
import VacanciesService from '../../services/vacanciesService';
import Loader from '../Loader/Loader';
import OptionsService from '../../services/OptionsService';
const SearchVacancy = (props) => {
  const [inputValue, changeInputValue] = useState('');
  const onSubmit = () => {
    props.setLoading(true);
    props.setPage(1);
    VacanciesService.getVacancies({
      ...props.filterOptions,
      vacancyName: inputValue,
    })
      .then((data) => {
        props.setLoading(false);

        props.changeVacancies(data);
      })
      .catch((error) => console.log(error));
  };
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
