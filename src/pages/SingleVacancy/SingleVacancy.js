import styles from './singleVacancy.module.css';
import { useLocation } from 'react-router-dom';
import Vacancy from '../../components/SingleVacancy/SingleVacancy';
import { VacancyDescription } from '../../components/VacancyDescription/VacancyDescription';
export const SingleVacancy = (props) => {
  const location = useLocation();
  const { from } = location.state;
  return (
    <div className={styles.singleVacancyContainer}>
      <Vacancy vacancyInfo={from} />
      <VacancyDescription vacancyInfo={from} />
    </div>
  );
};
export default SingleVacancy;
