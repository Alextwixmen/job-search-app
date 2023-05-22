class OptionsService {
  static setFilterOptions(options) {
    localStorage.setItem('filterOptions', JSON.stringify({ ...options }));
  }

  static resetFilterOpntions() {
    localStorage.removeItem('filterOptions');
  }
  static setInputValue(inputValue) {
    localStorage.setItem('inputValue', inputValue);
  }
  static resetInputValue() {
    localStorage.removeItem('inputValue');
  }
  static setPageNumber(pageNumber) {
    localStorage.setItem('page', pageNumber);
  }
  static resetPageNumber() {
    localStorage.removeItem('page');
  }
  static resetAllOptions() {
    OptionsService.resetFilterOpntions();
    OptionsService.resetInputValue();
    OptionsService.resetPageNumber();
  }
  static getAllOptions() {
    return {
      ...JSON.parse(localStorage.getItem('filterOptions')),
      page: localStorage.getItem('page'),
      vacancyName: localStorage.getItem('inputValue'),
    };
  }
}
export default OptionsService;
