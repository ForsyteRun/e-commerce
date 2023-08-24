import { useEffect } from 'react';
import { Outlet } from 'react-router-dom';
import identificateUserOnAppStart from 'helpers/identificateUserOnAppStart';
import Header from 'components/Header';
import { useAppDispatch, useAppSelector } from 'hooks/useRedux';

const App = () => {
  const dispatch = useAppDispatch();
  const { authenticationMode } = useAppSelector(
    (state) => state.userDataSlice.data
  );

  useEffect(() => {
    identificateUserOnAppStart(dispatch, authenticationMode);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <>
      <Header />
      <main className="main">
        <div className="wrapper">
          <Outlet />
        </div>
      </main>
    </>
  );
};

export default App;
