/* eslint-disable no-console */
import { useEffect } from 'react';
import { Outlet } from 'react-router-dom';
import { useAppDispatch } from './hooks/useRedux';
import { setUserLoginState } from './store/userSlice';
import useApi from './hooks/useApi';
import useRefreshToken from './hooks/useRefreshToken';
import Header from './components/Header';
// import createNewAnonymousUserWithCart from './services/sdkClient/createNewAnonymousUserWithCart';
import { createAnonymousUser } from './store/userDataSlice';

const App = () => {
  const dispatch = useAppDispatch();
  const { refreshTokenApi } = useApi();
  // const { logInUser } = useApi();
  const { refreshToken } = useRefreshToken();

  const noRefreshTokenMessage =
    'The refresh token was not found. It may have expired.';

  // const createNewAnonymousUser = (): void => {
  //   createNewAnonymousUserWithCart()
  //     .then(() => {
  //       dispatch(setUserLoginState(false));
  //     })
  //     .catch(console.error);
  // };

  useEffect(() => {
    // logInUser({ email: 'mainuser1@gmail.com', password: 'itspassworD1!' });

    if (refreshToken) {
      refreshTokenApi
        .me()
        .activeCart()
        .get()
        .execute()
        .then((data) => {
          const cart = data.body;

          if (cart.customerId) {
            dispatch(setUserLoginState(true));
          } else if (cart.anonymousId) {
            dispatch(setUserLoginState(false));
          }
        })
        .catch((e) => {
          if (e.message === noRefreshTokenMessage) {
            // createNewAnonymousUser();
            dispatch(createAnonymousUser());
          } else {
            console.error(e);
          }
        });
    } else {
      // createNewAnonymousUser();
      dispatch(createAnonymousUser());
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
