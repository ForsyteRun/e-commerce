import Box from '@mui/material/Box';
import UserNavigation from './components/UserNavigation';
import Logo from './components/Logo';
import styles from './Header.module.scss';
import Profile from './components/Profile';

const Header = () => {
  return (
    <header className={styles.header}>
      <Logo />
      <Box className={styles.header__navigation}>
        <UserNavigation />
        <Profile />
      </Box>
    </header>
  );
};

export default Header;
