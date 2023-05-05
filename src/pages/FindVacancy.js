import styles from './pages.module.css';
import Filter from '../components/Filter/Filter';
import SearchVacancy from '../components/SearchVacancy/SearchVacancy';
const FindVacancy = () => {
  return (
    <div className={styles.container}>
      <Filter />
      <SearchVacancy />
    </div>
  );
};
export default FindVacancy;
