import LocalStorageService from '../services/localStorageService';

const refillFavoritesVacancies = (deletedVacancy) => {
  const favoritesVacancies = JSON.parse(
    LocalStorageService.getItem('favoritesVacancies')
  );

  for (let arr of favoritesVacancies) {
    for (let vacancy of arr) {
      if (vacancy.key === deletedVacancy.key) {
        const index = arr.indexOf(vacancy);
        arr.splice(index, 1);
      }
    }
  }
  return fillTheArrayInOrder(favoritesVacancies);
};
function fillTheArrayInOrder(disorderedArr) {
  for (let i = 0; i < disorderedArr.length; i++) {
    if (disorderedArr[i].length === 4) continue;
    if (disorderedArr[i + 1]) {
      while (disorderedArr[i].length !== 4) {
        const firstElement = disorderedArr[i + 1].shift();
        disorderedArr[i].unshift(firstElement);
      }
    }
  }
  const orderedArr = disorderedArr.filter((arr) => arr.length !== 0);
  localStorage.setItem('favoritesVacancies', JSON.stringify(orderedArr));
  return orderedArr;
}
export default refillFavoritesVacancies;
