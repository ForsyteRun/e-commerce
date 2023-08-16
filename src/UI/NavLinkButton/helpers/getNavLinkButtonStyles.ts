import { GetNavLinkButtonStyles } from '../../../types';

const getNavLinkButtonStyles: GetNavLinkButtonStyles = ({ isActive }) =>
  isActive ? 'button_active' : 'button';

export default getNavLinkButtonStyles;
