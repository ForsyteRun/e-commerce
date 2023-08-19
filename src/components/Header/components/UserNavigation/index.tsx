import NavLinkButton from '../../../../UI/NavLinkButton';
import { PathNames } from '../../../../types';
import styles from './UserNavigation.module.scss';

const UserNavigation = () => {
  return (
    <nav className={styles.userNavigation}>
      <NavLinkButton path={PathNames.register}>Register</NavLinkButton>
      <NavLinkButton path={PathNames.login}>Login</NavLinkButton>
    </nav>
  );
};

export default UserNavigation;
