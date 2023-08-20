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
  const refreshToken = getRefreshTokenCookie();

  if (refreshToken) {
    dispatch(fetchUserDataByRefreshToken(refreshToken));
  } else {
    dispatch(createAnonymousUser());
  }

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
