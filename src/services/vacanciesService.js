import LocalStorageService from './localStorageService';
import dateHelper from '../utils/dateHelper';
import AuthService from './authService';
export default class VacanciesService {
  static total = null;
  static getVacancies = async (options) => {
    const page = !Boolean(options?.page) ? 1 : options?.page;
    const keyWord = options?.vacancyName || '';
    const industry = options?.industry || '';
    const payment_from = options?.payment_from || '';
    const payment_to = options?.payment_to || '';
    let no_agreement = '';
    if (payment_from || payment_to) {
      no_agreement = 1;
    }
    try {
      const isRefresh = dateHelper(
        JSON.parse(localStorage.getItem('bearer'))?.ttl
      );
      if (isRefresh) {
        const access_token = JSON.parse(
          LocalStorageService.getItem('bearer')
        ).access_token;
        const tokenData = await AuthService.refreshToken(access_token);
        LocalStorageService.setBearer(JSON.stringify(tokenData));
      }
      const response = await fetch(
        `https://startup-summer-proxy-production.up.railway.app/2.0/vacancies/?count=4&page=${
          page - 1
        }&keyword=${keyWord}&catalogues=${industry}&payment_from=${payment_from}&payment_to=${payment_to}&no_agreement=1&published=1`,
        {
          headers: {
            Host: 'api.superjob.ru',
            'Content-type': 'application/json',
            'X-Api-App-Id':
              'v3.r.137440105.ffdbab114f92b821eac4e21f485343924a773131.06c3bdbb8446aeb91c35b80c42ff69eb9c457948',
            'x-secret-key': 'GEU4nvd3rej*jeh.eqp',
            'Access-Control-Allow-Origin': '*',
            Authorization: `Bearer ${
              LocalStorageService.getBearer().access_token
            }`,
          },
        }
      );
      const vacancies = await response.json();
      this.total = vacancies.total;
      return vacancies.objects;
    } catch (error) {
      throw error;
    }
  };
}
