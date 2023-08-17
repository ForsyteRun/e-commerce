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

  useEffect(() => {
    const noRefreshTokenMessage =
      'The refresh token was not found. It may have expired.';

    // logInUser({ email: 'mainuser1@gmail.com', password: 'itspassworD1!' });

    if (refreshToken) {
      refreshTokenApi
        .me()
        .get()
        .execute()
        .then(() => {
          dispatch(setUserLoginState(true));
        })
        .catch((e) => {
          if (e.statusCode === 403) {
            dispatch(setUserLoginState(false));
          } else if (e.message === noRefreshTokenMessage) {
            anonymousApi.me().carts().get().execute().catch(console.error);
          } else {
            console.error(e);
          }
        });
    } else {
      anonymousApi
        .me()
        .carts()
        .get()
        .execute()
        .then(() => {
          dispatch(setUserLoginState(false));
        })
        .catch(console.error);
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
