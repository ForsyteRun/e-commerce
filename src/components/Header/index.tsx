import UserNavigation from './components/UserNavigation';
import Logo from './components/Logo';
import styles from './Header.module.scss';

const Header = () => {
  return (
    <header className={styles.header}>
      <Logo />
      <UserNavigation />
    </header>
  );
};

export default Header;
