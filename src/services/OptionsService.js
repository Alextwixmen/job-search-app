class OptionsService {
  static setFilterOpntions(options) {
    localStorage.setItem('filterOptions', JSON.stringify({ ...options }));
  }
  static getIndustryName() {
    return JSON.parse(localStorage.getItem('filterOptions'))?.industryName;
  }
  static getPayment_from() {
    return JSON.parse(localStorage.getItem('filterOptions'))?.payment_from;
  }
  static getPayment_to() {
    return JSON.parse(localStorage.getItem('filterOptions'))?.payment_to;
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
      pageNumber: localStorage.getItem('pageNumber'),
      vacancyName: localStorage.getItem('inputValue'),
    };
  }
}
export default OptionsService;
