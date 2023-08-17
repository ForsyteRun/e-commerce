import { useAppSelector } from '../../../../hooks/useRedux';
import LogOut from './components/LogOut';
import NavLinkButton from '../../../../UI/NavLinkButton';
import { PathNames } from '../../../../types';
import styles from './UserNavigation.module.scss';

const UserNavigation = () => {
  const { isLogged, isUpdated } = useAppSelector((state) => state.userSlice);

  return (
    <nav className={styles.userNavigation}>
      {isLogged && isUpdated && <LogOut />}
      {!isLogged && isUpdated && (
        <>
          <NavLinkButton path={PathNames.register}>Register</NavLinkButton>
          <NavLinkButton path={PathNames.login}>Login</NavLinkButton>
        </>
      )}
    </nav>
  );
};

export default UserNavigation;
