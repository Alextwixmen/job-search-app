export default class LocalStorageService {
  static getItem(key) {
    return localStorage.getItem(key);
  }

  static getFavoriteVacancies() {
    if (localStorage.getItem('favoritesVacancies')) {
      return JSON.parse(LocalStorageService.getItem('favoritesVacancies'));
    }
  }

  static getIndustries() {
    if (localStorage.getItem('industries')) {
      return JSON.parse(LocalStorageService.getItem('industries'));
    }
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
