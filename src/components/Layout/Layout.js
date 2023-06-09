import { Link, Outlet } from 'react-router-dom';
import styles from './Layout.module.css';
import HeaderLogo from '../HeaderLogo/HeaderLogo';
import { useMatch } from 'react-router-dom';

const Layout = () => {
  const findVacancyRoute = useMatch('/vacancy');
  const favoritesRoute = useMatch('/favorites');
  const notFoundRoute = useMatch('/emptyState');

  let findVacancyStyle = null;
  let favoritesStyle = null;

  if (findVacancyRoute) {
    findVacancyStyle = 'activeLink';
  } else if (favoritesRoute || notFoundRoute) {
    favoritesStyle = 'activeLink';
  }

  return (
    <div className={styles.wrapper}>
      <header className={styles.header}>
        <div className='container'>
          <nav className={styles.nav}>
            <HeaderLogo />
            <div className={styles.linksContainer}>
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
            </div>
          </nav>
        </div>
      </header>
      <main>
        <div className='container'>
          <Outlet />
        </div>
      </main>
    </div>
  );
};
export default Layout;
