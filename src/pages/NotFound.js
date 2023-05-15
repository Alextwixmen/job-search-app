import styles from './pages.module.css';
import { ReactComponent as NotFoundPic } from '../assets/images/notFoundPicture.svg';
import { Button } from '@mantine/core';
import { Navigate, useNavigate } from 'react-router-dom';
const NotFound = () => {
  let navigate = useNavigate();
  const handleClick = () => {
    navigate('/vacancy');
  };
  return (
    <div className={styles.notFoundContainer}>
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
export default NotFound;
