/* eslint-disable no-console */
import { useEffect } from 'react';
import { Outlet } from 'react-router-dom';
import Header from './components/Header';
import useApi from './hooks/useApi';
import useRefreshToken from './hooks/useRefreshToken';
import { useAppDispatch } from './hooks/useRedux';
import { setUserLoginState } from './store/userSlice';

function App() {
  const { anonymousApi, refreshTokenApi, logInUser } = useApi();
  const { refreshToken, removeRefreshToken } = useRefreshToken();
  const dispatch = useAppDispatch();

  useEffect(() => {
    const badTokenMessage =
      'The refresh token was not found. It may have expired.';

    // eslint-disable-next-line react-hooks/rules-of-hooks
    logInUser({
      email: 'mainuser1@gmail.com',
      password: 'itspassworD1!',
    });

    if (refreshToken) {
      console.log('Refresh Flow');
      refreshTokenApi
        .me()
        .get()
        .execute()
        .then(() => {
          console.log('Logged user');
          dispatch(setUserLoginState(true));
        })
        .catch((e) => {
          if (e.message === badTokenMessage) {
            console.log('Refresh Token is out of date');
            removeRefreshToken();
            anonymousApi.me().carts().get().execute();
          } else if (e.statusCode === 403) {
            console.log('Anonymous user');
            dispatch(setUserLoginState(false));
          } else {
            console.error(e);
          }
        });
    } else {
      console.log('Anonymous Flow');
      anonymousApi.me().carts().get().execute();
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
}

export default App;
