import styles from './singleVacancy.module.css';
import { Link } from 'react-router-dom';
import LocalStorageService from '../../services/localStorageService';
import { ReactComponent as Star } from '../../assets/icons/Save Button.svg';
import { ReactComponent as LocationIcon } from '../../assets/icons/LocationIcon.svg';
import { useState } from 'react';

const SingleVacancy = (props) => {
  const [isFavoriteStar, setFavoriteStar] = useState(false);
  const handleStarClick = (vacancyInfo) => {
    setFavoriteStar(true);
    const shortVacancyInfo = {
      typeOfWork: vacancyInfo.type_of_work.title,
      vacancyTown: vacancyInfo.town.title,
      profession: vacancyInfo.profession,
      payment_from: vacancyInfo.payment_from,
      key: props.vacancyInfo.id,
      vacancyRichText: vacancyInfo.vacancyRichText,
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
      : handleStarClick;

  const favoriteStar =
    props.favoriteStar ||
    localStorage.getItem(props.vacancyInfo.id) ||
    isFavoriteStar
      ? 'favoriteStarIcon'
      : null;
  const vacancyId = props.vacancyInfo.id
    ? props.vacancyInfo.id
    : props.vacancyInfo.key;
  return (
    <Link
      to={`/vacancy/${vacancyId}`}
      onClick={(e) => handlePrevent(e)}
      state={{ from: props.vacancyInfo }}
    >
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
            <LocationIcon />
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
