import { useEffect } from 'react';
import { Outlet } from 'react-router-dom';
import identificateUserOnAppStart from 'helpers/identificateUserOnAppStart';
import Header from './components/Header';
import { useAppDispatch, useAppSelector } from './hooks/useRedux';

const App = () => {
  const dispatch = useAppDispatch();
  const userType = useAppSelector((state) => state.userDataSlice.data.type);

  useEffect(() => {
    identificateUserOnAppStart(dispatch, userType);
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
