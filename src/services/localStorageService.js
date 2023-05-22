export default class LocalStorageService {
  static setItem(item) {
    localStorage.setItem(item.key, JSON.stringify(item));
  }

  static getItem(key) {
    return localStorage.getItem(key);
  }

  static getFavoriteVacancies() {
    const vacancies = JSON.parse(
      LocalStorageService.getItem('favoritesVacancies')
    );
    return vacancies;
  }

  static deleteItem(key) {
    localStorage.removeItem(key);
  }

  static setBearer(bearer) {
    localStorage.setItem('bearer', bearer);
  }
  static getBearer() {
    if (localStorage.getItem('bearer')) {
      return JSON.parse(localStorage.getItem('bearer'));
    }
  }
}
