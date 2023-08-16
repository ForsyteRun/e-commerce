import { useState, useCallback } from 'react';
import Cookies from 'js-cookie';
import { UpdateCookie, VoidFunction } from '../types';

function useCookie(
  name: string,
  defaultValue: string = ''
): [string, UpdateCookie, VoidFunction] {
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

  const removeCookie: VoidFunction = useCallback(() => {
    Cookies.remove(name);
    setValue('');
  }, [name]);

  return [value, updateCookie, removeCookie];
}

export default useCookie;
