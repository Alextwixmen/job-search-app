import { Link, Outlet } from 'react-router-dom';
import styles from './Layout.module.css';
import HeaderLogo from '../HeaderLogo/HeaderLogo';
import { useMatch } from 'react-router-dom';
import { useMatches } from 'react-router-dom';
const Layout = () => {
  const findVacancyRoute = useMatch('/vacancy');
  const favoritesRoute = useMatch('/favorites');
  const notFoundRoute = useMatch('/notFound');
  let findVacancyStyle = null;
  let favoritesStyle = null;
  if (findVacancyRoute) {
    findVacancyStyle = 'activeLink';
  } else if (favoritesRoute || notFoundRoute) {
    favoritesStyle = 'activeLink';
  }
  return (
    <div className={styles.container}>
      <header className={styles.header}>
        <HeaderLogo />
        <Link
          to='/vacancy'
          className={`${styles.links} ${styles[findVacancyStyle]}`}
        >
          Поиск Вакансий
        </Link>
        <Link
          to='/favorites'
          className={`${styles.links} ${styles[favoritesStyle]}`}
        >
          Избранное
        </Link>
      </header>
      <main className={`${styles.container} ${styles.main}`}>
        <Outlet />
      </main>
    </div>
  );
};
export default Layout;
