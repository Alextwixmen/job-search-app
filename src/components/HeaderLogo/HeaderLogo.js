import styles from './HeaderLogo.module.css';
import { ReactComponent as LogoHeader } from '../../assets/icons/HeaderLogo.svg';

const HeaderLogo = () => {
  return (
    <div className={styles.headerLogo}>
      <LogoHeader />
      <div className={styles.logoText}>Jobored</div>
    </div>
  );
};
export default HeaderLogo;
