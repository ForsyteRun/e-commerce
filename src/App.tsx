import { useEffect } from 'react';
import { Outlet } from 'react-router-dom';
import Header from './components/Header';
import { useAppDispatch } from './hooks/useRedux';
import {
  createAnonymousUser,
  fetchUserDataByRefreshToken,
} from './store/userDataSlice/thunks';
import { getRefreshTokenCookie } from './helpers/processRefreshTokenCookie';

const App = () => {
  const dispatch = useAppDispatch();

  useEffect(() => {
    const refreshToken = getRefreshTokenCookie();

    if (refreshToken) {
      dispatch(fetchUserDataByRefreshToken(refreshToken));
    } else {
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
