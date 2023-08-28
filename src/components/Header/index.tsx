import Wrapper from 'UI/Wrapper';
import UserNavigation from './components/UserNavigation';
import Logo from './components/Logo';
import styles from './Header.module.scss';
import AppNavigation from './components/AppNavigation';

const Header = () => {
  return (
    <header className={styles.header}>
      <Wrapper>
        <div className={styles.container}>
          <Logo />
          <AppNavigation />
          <UserNavigation />
        </div>
      </Wrapper>
    </header>
  );
};

export default Header;
