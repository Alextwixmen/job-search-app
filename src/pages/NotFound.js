import styles from './pages.module.css';
import { ReactComponent as NotFoundPic } from '../assets/images/notFoundPicture.svg';
import { Button } from '@mantine/core';
import { Navigate } from 'react-router-dom';
const NotFound = () => {
  const handleClick = () => {
    return <Navigate to='/vacancy' />;
  };
  return (
    <div className={styles.notFoundContainer}>
      <div className={styles.notFoundItems}>
        <NotFoundPic className={styles.notFoundPic} />
        <span className={styles.notFoundText}>Упс, здесь еще ничего нет!</span>
        <Button
          variant='light'
          radius={8}
          pt={10}
          pb={10}
          pl={24}
          pr={24}
          onClick={handleClick}
        >
          <span className={styles.btnText}>Поиск Вакансий</span>
        </Button>
      </div>
    </div>
  );
};
export default NotFound;
