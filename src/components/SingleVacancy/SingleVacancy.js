import styles from './singleVacancy.module.css';
import { Link } from 'react-router-dom';
import LocalStorageService from '../../services/localStorageService';
import { ReactComponent as Star } from '../../assets/icons/Save Button.svg';
import { ReactComponent as LocationIcon } from '../../assets/icons/LocationIcon.svg';
import { ReactComponent as Dot } from '../../assets/icons/dot.svg';
import { useState } from 'react';

const SingleVacancy = (props) => {
  const [isFavoriteStar, setFavoriteStar] = useState(null);
  const handleStarClick = (vacancyInfo) => {
    if (LocalStorageService.getItem(props.vacancyInfo.id)) {
      LocalStorageService.deleteItem(props.vacancyInfo.id);
      setFavoriteStar(false);
    } else {
      setFavoriteStar(true);
      const shortVacancyInfo = {
        typeOfWork: vacancyInfo.type_of_work.title,
        vacancyTown: vacancyInfo.town.title,
        profession: vacancyInfo.profession,
        payment_from: vacancyInfo.payment_from,
        key: props.vacancyInfo.id,
        vacancyRichText: vacancyInfo.vacancyRichText,
        payment_to: vacancyInfo.payment_to,
        currency: vacancyInfo.currency,
      };
      LocalStorageService.setItem(shortVacancyInfo);
    }
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
    localStorage.getItem(props.vacancyInfo.id) ||
    localStorage.getItem(props.vacancyInfo.key)
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
          <div className={styles[props.vacancyName]}>
            {props.vacancyInfo.profession && props.vacancyInfo.profession}
          </div>
          <button
            className={styles.favoriteStar}
            onClick={() => handleClick(props.vacancyInfo)}
          >
            <Star className={`${styles.star} ${styles[favoriteStar]}`} />
          </button>
        </div>
        <div className={styles[props.vacancyMainPart]}>
          <div className={styles[props.vacancySalary]}>
            {props.vacancyInfo.payment_to &&
            props.vacancyInfo.payment_from !== 0
              ? `з/п ${props.vacancyInfo.payment_from} - ${props.vacancyInfo.payment_to} ${props.vacancyInfo.currency}`
              : `з/п от ${props.vacancyInfo.payment_from} ${props.vacancyInfo.currency}`}
          </div>
          <Dot />
          <div className={styles[props.typeOfWork]}>
            {props.vacancyInfo.typeOfWork ||
              props.vacancyInfo.type_of_work?.title}
          </div>
        </div>
        <div className={styles.footer}>
          <div className={styles.footerIcon}>
            <LocationIcon />
          </div>
          <div className={styles.footerLocation}>
            {props.vacancyInfo.vacancyTown || props.vacancyInfo.town?.title}
          </div>
        </div>
      </div>
    </Link>
  );
};
export default SingleVacancy;
