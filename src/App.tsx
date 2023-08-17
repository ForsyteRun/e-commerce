/* eslint-disable no-console */
import { useEffect } from 'react';
import { Outlet } from 'react-router-dom';
import { useAppDispatch } from './hooks/useRedux';
import { setUserLoginState } from './store/userSlice';
import useApi from './hooks/useApi';
import useRefreshToken from './hooks/useRefreshToken';
import Header from './components/Header';

const App = () => {
  const dispatch = useAppDispatch();
  const { refreshTokenApi, anonymousApi } = useApi();
  // const { logInUser } = useApi();
  const { refreshToken } = useRefreshToken();

  const noRefreshTokenMessage =
    'The refresh token was not found. It may have expired.';

  const createNewAnonymousUser = (): void => {
    anonymousApi
      .me()
      .carts()
      .get()
      .execute()
      .then(() => {
        dispatch(setUserLoginState(false));
      })
      .catch(console.error);
  };

  useEffect(() => {
    // logInUser({ email: 'mainuser1@gmail.com', password: 'itspassworD1!' });

    if (refreshToken) {
      refreshTokenApi
        .me()
        .get()
        .execute()
        .then(() => {
          dispatch(setUserLoginState(true)); // if there is no error - it seems that user is already logged in
        })
        .catch((e) => {
          if (e.statusCode === 403) {
            dispatch(setUserLoginState(false)); // 403 error mean that we have anonymous refresh token
          } else if (e.message === noRefreshTokenMessage) {
            createNewAnonymousUser();
          } else {
            console.error(e);
          }
        });
    } else {
      createNewAnonymousUser();
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <>
      <Header />
      <main>
        <Outlet />
      </main>
    </>
  );
};

export default App;
