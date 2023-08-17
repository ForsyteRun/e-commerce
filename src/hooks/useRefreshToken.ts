import { useState } from 'react';
import useCookie from './useCookie';
import { UpdateRefreshToken } from '../types';

function useRefreshToken() {
  const [cookieValue, updateCookieValue, removeRefreshToken] =
    useCookie('refreshToken');

  const [refreshToken, setRefreshToken] = useState(
    cookieValue ? `${import.meta.env.VITE_PROJECT_KEY}:${cookieValue}` : ''
  );

  const updateRefreshToken: UpdateRefreshToken = (value) => {
    const refreshTokenValue = value.split(':')[1];
    setRefreshToken(value);
    updateCookieValue(refreshTokenValue, {
      expires: 200,
      samesite: 'strict',
      path: '/',
    });
  };

  return { refreshToken, updateRefreshToken, removeRefreshToken };
}

export default useRefreshToken;
