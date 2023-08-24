import NavLinkButton from 'UI/NavLinkButton';
import { PathNames } from 'types';
import UserNavigation from './components/UserNavigation';
import Logo from './components/Logo';
import styles from './Header.module.scss';
import Search from './components/Search';

const Header = () => {
  return (
    <header className={styles.header}>
      <div className={styles.headerContent}>
        <Logo />
        <div className={styles.container}>
          <NavLinkButton path={PathNames.catalog}>Catalog</NavLinkButton>
          <div className={styles.headerElements}>
            <Search />
            <UserNavigation />
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
