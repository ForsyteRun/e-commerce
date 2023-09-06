import { useAppSelector } from 'hooks/useRedux';
import NavLinkButton from 'UI/NavLinkButton';
import { useMediaQueryContext } from 'context/MediaQueryContext';
import { PathNames } from 'types';
import LogOutButton from './components/LogOutButton';
import UserProfileButton from './components/UserProfileButton';
import styles from './UserNavigation.module.scss';
import BurgerButton from './components/BurgerButton';
import CartPageButton from './components/CartPageButton';

const UserNavigation = () => {
  const { authenticationMode } = useAppSelector(
    (state) => state.userDataSlice.data
  );
  const isRegistered = authenticationMode === 'Password';
  const notRegisteredUserButtons = (
    <>
      <NavLinkButton path={PathNames.register}>Register</NavLinkButton>
      <NavLinkButton path={PathNames.login}>Login</NavLinkButton>
    </>
  );
  const registeredUserButtons = (
    <>
      <LogOutButton />
      <UserProfileButton />
    </>
  );

  const { isMobile } = useMediaQueryContext();

  return (
    <nav className={styles.userNavigation}>
      {isRegistered ? registeredUserButtons : notRegisteredUserButtons}
      <CartPageButton />
      {isMobile && <BurgerButton />}
    </nav>
  );
};

export default UserNavigation;
