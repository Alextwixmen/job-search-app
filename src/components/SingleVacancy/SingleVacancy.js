import styles from './singleVacancy.module.css';
import { Link } from 'react-router-dom';
import LocalStorageService from '../../services/localStorageService';
import { ReactComponent as Star } from '../../assets/icons/Save Button.svg';
const SingleVacancy = (props) => {
  const handleStartClick = (vacancyInfo) => {
    const shortVacancyInfo = {
      typeOfWork: vacancyInfo.type_of_work.title,
      vacancyTown: vacancyInfo.town.title,
      profession: vacancyInfo.profession,
      payment_from: vacancyInfo.payment_from,
      key: props.vacancyInfo.id,
    };
    LocalStorageService.setItem(shortVacancyInfo);
  };
  const handlePrevent = (e) => {
    if (e.target.localName === 'svg' || e.target.localName === 'path') {
      e.preventDefault();
    }
  };
  const handleClick =
    props.handleDeleteVacancy !== undefined
      ? props.handleDeleteVacancy
      : handleStartClick;
  const favoriteStar = props.favoriteStar === true ? 'favoriteStarIcon' : null;
  return (
    <Link to={'/vacancy/123123'} onClick={(e) => handlePrevent(e)}>
      <div className={styles.singlaVacancyContainer}>
        <div className={styles.vacancyHeader}>
          <div className={styles.vacancyName}>
            {props.vacancyInfo.profession && props.vacancyInfo.profession}
          </div>
          <button
            className={styles.favoriteStar}
            onClick={() => handleClick(props.vacancyInfo)}
          >
            <Star className={`${styles.star} ${styles[favoriteStar]}`} />
          </button>
        </div>
        <div className={styles.vacancyMainPart}>
          <div className={styles.salaryInfo}>
            з/п от {props.vacancyInfo.payment_from} rub
          </div>
          <div className={styles.divider}>.</div>
          <div>
            {props.vacancyInfo.typeOfWork ||
              props.vacancyInfo.type_of_work.title}
          </div>
        </div>
        <div className={styles.footer}>
          <div className={styles.footerIcon}>
            <svg
              width='16'
              height='18'
              viewBox='0 0 16 18'
              fill='none'
              xmlns='http://www.w3.org/2000/svg'
            >
              <path
                d='M12.714 12.8807C11.9335 13.6612 10.3013 15.2935 9.17814 16.4166C8.52727 17.0675 7.47304 17.0678 6.82217 16.4169C5.7186 15.3134 4.11797 13.7127 3.28593 12.8807C0.682439 10.2772 0.682439 6.05612 3.28593 3.45262C5.88943 0.849126 10.1105 0.849126 12.714 3.45262C15.3175 6.05612 15.3175 10.2772 12.714 12.8807Z'
                stroke='#ACADB9'
                strokeWidth='1.25'
                strokeLinecap='round'
                strokeLinejoin='round'
              />
              <path
                d='M10.5 8.16667C10.5 9.54738 9.38069 10.6667 7.99998 10.6667C6.61927 10.6667 5.49998 9.54738 5.49998 8.16667C5.49998 6.78595 6.61927 5.66667 7.99998 5.66667C9.38069 5.66667 10.5 6.78595 10.5 8.16667Z'
                stroke='#ACADB9'
                strokeWidth='1.25'
                strokeLinecap='round'
                strokeLinejoin='round'
              />
            </svg>
          </div>
          <div className={styles.footerLocation}>
            {props.vacancyInfo.vacancyTown || props.vacancyInfo.town.title}
          </div>
        </div>
      </div>
    </Link>
  );
};
export default SingleVacancy;
