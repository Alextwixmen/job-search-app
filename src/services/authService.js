import LocalStorageService from './localStorageService';
export default class AuthService {
  static auth = async () => {
    try {
      const response = await fetch(
        'https://startup-summer-proxy-production.up.railway.app/2.0/oauth2/password/?login=sergei.stralenia@gmail.com&password=paralect123&client_id=2356&client_secret=v3.r.137440105.ffdbab114f92b821eac4e21f485343924a773131.06c3bdbb8446aeb91c35b80c42ff69eb9c457948',
        {
          headers: {
            'Content-Type': 'application/json',
            'x-secret-key': 'GEU4nvd3rej*jeh.eqp',
            'X-Api-App-Id':
              'v3.r.137440105.ffdbab114f92b821eac4e21f485343924a773131.06c3bdbb8446aeb91c35b80c42ff69eb9c457948',
          },
        }
      );
      const user = await response.json();
      return user;
    } catch (error) {
      throw error;
    }
  };
  static refreshToken = async (refreshToken) => {
    try {
      const response = await fetch(
        `https://startup-summer-proxy-production.up.railway.app/2.0/oauth2/refresh_token/?refresh_token=${refreshToken}&client_id=2356&client_secret=v3.r.137440105.ffdbab114f92b821eac4e21f485343924a773131.06c3bdbb8446aeb91c35b80c42ff69eb9c457948`,
        {
          headers: {
            'Content-Type': 'application/json',
            'x-secret-key': 'GEU4nvd3rej*jeh.eqp',
            'X-Api-App-Id':
              'v3.r.137440105.ffdbab114f92b821eac4e21f485343924a773131.06c3bdbb8446aeb91c35b80c42ff69eb9c457948',
            Authorization: `Bearer ${
              JSON.parse(LocalStorageService.getItem('bearer'))?.access_token
            }`,
          },
        }
      );
      return await response.json();
    } catch (error) {
      throw error;
    }
  };
}
