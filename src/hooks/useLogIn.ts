import { _ErrorResponse } from '@commercetools/platform-sdk';
import useApi from './useApi';
import { useAppDispatch } from './useRedux';
import { LoginFormValues } from '../types/index';
import { setLoginError, setUserLoginState } from '../store/userSlice';
import handleLoginError from '../pages/LoginPage/components/LoginForm/components/LoginError/helpers/HandleLoginErrors';

function useLogIn() {
  const authService = useApi();
  const dispatch = useAppDispatch();

  const logIn = (values: LoginFormValues) => {
    authService
      .logInUser(values)
      .then(() => {
        dispatch(setUserLoginState(true));
        dispatch(setLoginError(null));
      })
      .catch((error: _ErrorResponse) => {
        handleLoginError(error, dispatch);
        dispatch(setUserLoginState(false));
      });
  };

  return { logIn };
}

export default useLogIn;
