import { NavLink } from 'react-router-dom';
import getNavLinkButtonStyles from './helpers/getNavLinkButtonStyles';
import { NavLinkButtonProps } from '../../types';

function NavLinkButton({ children, path }: NavLinkButtonProps): JSX.Element {
  return (
    <NavLink className={getNavLinkButtonStyles} to={path}>
      {children}
    </NavLink>
  );
}

export default NavLinkButton;
