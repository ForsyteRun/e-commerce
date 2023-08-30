import { useEffect } from 'react';
import { Outlet } from 'react-router-dom';
import Wrapper from 'UI/Wrapper';
import Header from 'components/Header';
import identificateUserOnAppStart from 'helpers/identificateUserOnAppStart';
import { useAppDispatch, useAppSelector } from 'hooks/useRedux';
import styles from './App.module.scss';
import BurgerModal from 'components/BurgerModal';

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
    <div className={styles.container}>
      <BurgerModal />
      <Header />
      <main>
        <Wrapper>
          <Outlet />
        </Wrapper>
      </main>
    </div>
  );
};

export default App;
