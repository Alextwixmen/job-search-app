import { Link, Outlet } from 'react-router-dom';
import styles from './Layout.module.css';
import HeaderLogo from '../HeaderLogo/HeaderLogo';
const Layout = () => {
  return (
    <div className={styles.container}>
      <header className={styles.header}>
        <HeaderLogo />
        <Link to='/findVacancy' className={styles.links}>
          Поиск Вакансий
        </Link>
        <Link to='/favorites' className={styles.links}>
          Избравнное
        </Link>
      </header>
      <main className={`${styles.container} ${styles.main}`}>
        <Outlet />
      </main>
    </div>
  );
};
export default Layout;
