import { useEffect } from 'react';
import { Outlet } from 'react-router-dom';
import Wrapper from 'UI/Wrapper';
import Header from 'components/Header';
import BurgerModal from 'components/BurgerModal';
import AppSnackbar from 'components/AppSnackbar';
import { AppProvider } from 'context';
import { identifyUser } from 'helpers';
import styles from './App.module.scss';

const App = () => {
  useEffect(() => {
    identifyUser();
  }, []);

  return (
    <AppProvider>
      <div className={styles.container}>
        <BurgerModal />
        <Header />
        <main>
          <Wrapper>
            <Outlet />
          </Wrapper>
        </main>
        <AppSnackbar />
      </div>
    </AppProvider>
  );
};

export default App;
