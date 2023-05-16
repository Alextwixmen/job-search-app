import { Link, Outlet } from 'react-router-dom';
import styles from './Layout.module.css';
import HeaderLogo from '../HeaderLogo/HeaderLogo';
import { useMatch } from 'react-router-dom';
import { useMatches } from 'react-router-dom';
import { useNavigate, useLocation } from 'react-router-dom';
import { useEffect } from 'react';
const Layout = () => {
  const findVacancyRoute = useMatch('/vacancy');
  const favoritesRoute = useMatch('/favorites');
  const notFoundRoute = useMatch('/notFound');
  const location = useLocation();

  const navigate = useNavigate();
  let findVacancyStyle = null;
  let favoritesStyle = null;
  if (findVacancyRoute) {
    findVacancyStyle = 'activeLink';
  } else if (favoritesRoute || notFoundRoute) {
    favoritesStyle = 'activeLink';
  }
  useEffect(() => {
    if (location.pathname === '/') {
      navigate('/vacancy');
    }
  }, []);

  return (
    <div className={styles.wrapper}>
      <header className={styles.header}>
        <div className={styles.headerContainer}>
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
      <main className={`${styles.container} ${styles.main}`}>
        <Outlet />
      </main>
    </div>
  );
};
export default Layout;
