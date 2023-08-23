import UserNavigation from './components/UserNavigation';
import Logo from './components/Logo';
import styles from './Header.module.scss';
import Search from './components/Search';

const Header = () => {
  return (
    <header className={styles.header}>
      <Logo />
      <Search />
      <UserNavigation />
    </header>
  );
};

export default Header;
