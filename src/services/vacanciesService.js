export default class VacanciesService {
  static getVacancies = async (options) => {
    let keyWord = '';
    if (options?.vacancyName !== undefined) {
      keyWord = options.vacancyName;
    }
    console.log(options);
    try {
      const response = await fetch(
        `https://startup-summer-2023-proxy.onrender.com/2.0/vacancies/?count=4&keyword=${keyWord}&catalogues=${options?.industry}&payment_from=${options?.payment_from}&payment_to=${options?.payment_to}`,
        {
          headers: {
            Host: 'api.superjob.ru',
            'Content-type': 'application/json',
            'X-Api-App-Id':
              'v3.r.137440105.ffdbab114f92b821eac4e21f485343924a773131.06c3bdbb8446aeb91c35b80c42ff69eb9c457948',
            'x-secret-key': 'GEU4nvd3rej*jeh.eqp',
            'Access-Control-Allow-Origin': '*',
            Authorization:
              'Bearer v3.r.137440105.a0685e4bf923876ea5be52eb2878c820bc478583.4d193bd3be770cdce79f3e697d2e5c6d5fb1ac76',
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
