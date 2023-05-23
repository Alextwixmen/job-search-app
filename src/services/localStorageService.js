export default class LocalStorageService {
  static getItem(key) {
    return localStorage.getItem(key);
  }

  static getFavoriteVacancies() {
    if (localStorage.getItem('favoritesVacancies')) {
      return JSON.parse(LocalStorageService.getItem('favoritesVacancies'));
    }
  }

  static getIndustryVocabluary() {
    if (localStorage.getItem('industryVocabluary')) {
      return JSON.parse(LocalStorageService.getItem('industryVocabluary'));
    }
  }
  static getNameOfIndustries() {
    if (localStorage.getItem('namesOfIndustries')) {
      return JSON.parse(LocalStorageService.getItem('namesOfIndustries'));
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
