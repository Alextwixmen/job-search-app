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
    localStorage.setItem('pageNumber', pageNumber);
  }
  static resetPageNumber() {
    localStorage.removeItem('pageNumber');
  }
  static resetAllOptions() {
    OptionsService.resetFilterOpntions();
    OptionsService.resetInputValue();
    OptionsService.resetPageNumber();
  }
  static getAllOptions() {
    return {
      ...JSON.parse(localStorage.getItem('filterOptions')),
      // pageNumber: localStorage.getItem('pageNumber'),
      vacancyName: localStorage.getItem('inputValue'),
    };
  }
}
export default OptionsService;
