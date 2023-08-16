import { useState, useCallback } from 'react';
import Cookies from 'js-cookie';
import { UpdateCookie } from '../types';

function useCookie(
  name: string,
  defaultValue: string = ''
): [string, UpdateCookie, () => void] {
  const [value, setValue] = useState(() => {
    const cookie = Cookies.get(name);
    return cookie || defaultValue;
  });

  const updateCookie: UpdateCookie = useCallback(
    (newValue, options) => {
      Cookies.set(name, newValue, options);
      setValue(newValue);
    },
    [name]
  );

  const removeCookie = useCallback((): void => {
    Cookies.remove(name);
    setValue('');
  }, [name]);

  return [value, updateCookie, removeCookie];
}

export default useCookie;
