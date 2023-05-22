import styles from './emptyState.module.css';
import { ReactComponent as NotFoundPic } from '../../assets/images/notFoundPicture.svg';
import { useNavigate } from 'react-router-dom';
const EmptyState = () => {
  let navigate = useNavigate();
  const handleClick = () => {
    navigate('/vacancy');
  };
  return (
    <div className={styles.emptyStateContainer}>
      <div className={styles.notFoundItems}>
        <NotFoundPic className={styles.notFoundPic} />
        <span className={styles.notFoundText}>Упс, здесь еще ничего нет!</span>
        <button onClick={handleClick} className={styles.vacancySearch}>
          Поиск Вакансий
        </button>
      </div>
    </div>
  );
};
export default EmptyState;
