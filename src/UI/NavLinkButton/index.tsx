import { NavLink } from 'react-router-dom';
import { useAppSelector } from 'hooks/useRedux';
import { NavLinkButtonProps, PathNames } from 'types';
import styles from 'styles/button.module.scss';

const NavLinkButton = ({ children, path }: NavLinkButtonProps): JSX.Element => {
  const userData = useAppSelector((state) => state.userDataSlice);

  const isPending = userData.loading === 'pending';
  const userType = userData.data.type;
  const isNotUserOrPending = !userType || isPending;
  const isLoginPage = path === PathNames.login;
  const isRegisterPage = path === PathNames.register;
  const isLoginOrRegisterPage = isLoginPage || isRegisterPage;

  const buttonClasses =
    isLoginOrRegisterPage && isNotUserOrPending
      ? `${styles.button} ${styles.button_disabled}`
      : styles.button;

  return (
    <NavLink className={buttonClasses} to={path}>
      {children}
    </NavLink>
  );
};

export default NavLinkButton;
