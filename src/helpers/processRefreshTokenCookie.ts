import Cookies from 'js-cookie';

export const getRefreshTokenCookie = (): string => {
  const cookie = Cookies.get('refreshToken');
  return cookie ? `${import.meta.env.VITE_PROJECT_KEY}:${cookie}` : '';
};

export const updateRefreshTokenCookie = (value: string): void => {
  const refreshToken = value.split(':')[1];
  Cookies.set('refreshToken', refreshToken, {
    expires: 200,
    samesite: 'strict',
    path: '/',
  });
};

export const removeRefreshTokenCookie = (): void => {
  Cookies.remove('refreshToken');
};
