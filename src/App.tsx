import { useEffect } from 'react';
import { Outlet } from 'react-router-dom';
import Wrapper from 'UI/Wrapper';
import Header from 'components/Header';
import { identificateUserOnAppStart } from 'helpers';
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
      <main>
        <Wrapper>
          <Outlet />
        </Wrapper>
      </main>
    </>
  );
};

export default App;
