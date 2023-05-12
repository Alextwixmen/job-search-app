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
        {/* <Button
          variant='light'
          radius={8}
          pt={10}
          pb={10}
          pl={24}
          pr={24}
          style={{
            fontSize: '14px',
            color: '#3B7CD3',
            fontFamily: 'Open Sans',
            fontWeight: 600,
          }}
        >
          Поиск Вакансий
          {/* <span className={styles.btnText}>Поиск Вакансий</span> */}
        {/* </Button> */}
      </div>
    </div>
  );
};
export default NotFound;
