import LocalStorageService from '../services/localStorageService';

const isVacancyFavorite = (vacancyId) => {
  const favoriteVacancies = LocalStorageService.getFavoriteVacancies();
  if (!favoriteVacancies) return null;
  let isFavorite;
  for (let arr of favoriteVacancies) {
    for (let vacancy of arr) {
      if (vacancy.key !== vacancyId) {
        continue;
      } else if (vacancy.key === vacancyId) {
        isFavorite = true;
        break;
      }
    }
  }
  return isFavorite;
};
export default isVacancyFavorite;
