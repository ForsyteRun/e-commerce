import Wrapper from 'UI/Wrapper';
import UserNavigation from './components/UserNavigation';
import Logo from './components/Logo';
import styles from './Header.module.scss';
import AppNavigation from './components/AppNavigation';
import { useMediaQuery } from '@mui/material';

const Header = () => {
  const matches = useMediaQuery('screen and (min-width: 768px)');

  return (
    <header className={styles.header}>
      <Wrapper>
        <div className={styles.container}>
          <Logo />
          {matches && <AppNavigation />}
          <UserNavigation />
        </div>
      </Wrapper>
    </header>
  );
};

export default Header;
