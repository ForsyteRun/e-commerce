import { ThemeProvider } from '@mui/material';
import CssBaseline from '@mui/material/CssBaseline';
import Wrapper from 'UI/Wrapper';
import BurgerModal from 'components/BurgerModal';
import Header from 'components/Header';
import { AppProvider } from 'context';
import { identifyUser } from 'helpers';
import { useEffect } from 'react';
import { Outlet } from 'react-router-dom';
import theme from './theme';
import styles from './App.module.scss';

const App = () => {
  useEffect(() => {
    identifyUser();
  }, []);

  return (
    <AppProvider>
      <ThemeProvider theme={theme}>
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
      </ThemeProvider>
    </AppProvider>
  );
};

export default App;
