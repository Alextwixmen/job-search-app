import styles from './pages.module.css';
import Filter from '../components/Filter/Filter';
import SearchInput from '../components/SearchInput/SearchInput';
const FindVacancy = () => {
  return (
    <div className={styles.container}>
      <Filter />
      <SearchInput />
    </div>
  );
};
export default FindVacancy;
