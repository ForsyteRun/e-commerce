import { useEffect } from 'react';
import { Outlet } from 'react-router-dom';
import Wrapper from 'UI/Wrapper';
import Header from 'components/Header';
import BurgerModal from 'components/BurgerModal';
import { AppProvider } from 'context';
import { identificateUserOnAppStart } from 'helpers';
import CssBaseline from '@mui/material/CssBaseline';
import styles from './App.module.scss';

const App = () => {
  useEffect(() => {
    identifyUser();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <AppProvider>
      <>
        <CssBaseline />
        <div className={styles.container}>
          <BurgerModal />
          <Header />
          <main>
            <Wrapper>
              <Outlet />
            </Wrapper>
          </main>
        </div>
      </>
    </AppProvider>
  );
};

export default App;
