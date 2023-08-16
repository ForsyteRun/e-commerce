import { useState } from 'react';
import useCookie from './useCookie';
import { VoidFunction, UpdateRefreshToken } from '../types';

function useRefreshToken(): [string, UpdateRefreshToken, VoidFunction] {
  const [cookieValue, updateCookieValue, removeCookieValue] =
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

  return [refreshToken, updateRefreshToken, removeCookieValue];
}

export default useRefreshToken;
