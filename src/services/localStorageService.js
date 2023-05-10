export default class LocalStorageService {
  static setItem(item) {
    localStorage.setItem(item.key, JSON.stringify(item));
  }
  static getItem(key) {
    return localStorage.getItem(key);
  }
  static getFavoriteVacancies() {
    const favoriteVacancies = [];
    for (let key in localStorage) {
      if (localStorage.hasOwnProperty(key)) {
        favoriteVacancies.push(JSON.parse(LocalStorageService.getItem(key)));
      }
    }
    return favoriteVacancies;
  }
  static deleteItem(key) {
    localStorage.removeItem(key);
  }
}
