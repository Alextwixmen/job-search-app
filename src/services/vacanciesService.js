export default class VacanciesService {
  static getVacancies = async (options) => {
    // let keyWord = '';
    // if (options?.vacancyName !== undefined) {
    //   keyWord = options.vacancyName;
    // }
    const page = options?.page !== undefined ? options.page : '';
    const keyWord =
      options?.vacancyName !== undefined ? options.vacancyName : '';
    const industry = options?.industry !== undefined ? options.industry : '';
    const payment_from =
      options?.payment_from !== undefined ? options.payment_from : '';
    const payment_to =
      options?.payment_to !== undefined ? options?.payment_to : '';
    console.log(
      `https://startup-summer-2023-proxy.onrender.com/2.0/vacancies/?count=4&page=${page}&keyword=${keyWord}&catalogues=${industry}&payment_from=${payment_from}&payment_to=${payment_to}`
    );
    try {
      const response = await fetch(
        `https://startup-summer-2023-proxy.onrender.com/2.0/vacancies/?count=4&page=${page}&keyword=${keyWord}&catalogues=${industry}&payment_from=${payment_from}&payment_to=${payment_to}`,
        {
          headers: {
            Host: 'api.superjob.ru',
            'Content-type': 'application/json',
            'X-Api-App-Id':
              'v3.r.137440105.ffdbab114f92b821eac4e21f485343924a773131.06c3bdbb8446aeb91c35b80c42ff69eb9c457948',
            'x-secret-key': 'GEU4nvd3rej*jeh.eqp',
            'Access-Control-Allow-Origin': '*',
            Authorization:
              'Bearer v3.r.137440105.057f1dc06c112cdb854f43a1e89caa290c16592a.d643d4826e24cd63e623d783c865d5d2144e22ce',
          },
        }
      );
      const vacancies = await response.json();
      return vacancies.objects;
    } catch (error) {
      throw error;
    }
  };
}
