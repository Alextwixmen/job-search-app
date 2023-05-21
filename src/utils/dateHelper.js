const compareDate = (date) => new Date((date - 5 * 60) * 1000) === new Date();

export default compareDate;
