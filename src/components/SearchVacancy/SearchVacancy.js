import SingleVacancy from '../SingleVacancy/SingleVacancy';
import SearchInput from '../SearchInput/SearchInput';
import styles from './searchVacancy.module.css';
const SearchVacancy = () => {
  return (
    <div className={styles.searchVacancyContainer}>
      <SearchInput />
      <SingleVacancy />
      <SingleVacancy />
      <SingleVacancy />
      <SingleVacancy />
      <SingleVacancy />
    </div>
  );
};
export default SearchVacancy;
