import Wrapper from 'UI/Wrapper';
import { useMediaQueryContext } from 'context/MediaQueryContext';
import UserNavigation from './components/UserNavigation';
import Logo from './components/Logo';
import styles from './Header.module.scss';
import AppNavigation from './components/AppNavigation';

const Header = () => {
  const isMobile = useMediaQueryContext();

  return (
    <header className={styles.header}>
      <Wrapper>
        <div className={styles.container}>
          <Logo />
          {!isMobile && <AppNavigation />}
          <UserNavigation />
        </div>
      </Wrapper>
    </header>
  );
};

export default Header;
