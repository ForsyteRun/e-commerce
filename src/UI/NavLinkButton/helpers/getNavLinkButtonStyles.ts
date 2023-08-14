import { GetNavLinkButtonStyles } from '../../../types';
import '../../../styles/global.scss';

const getNavLinkButtonStyles: GetNavLinkButtonStyles = ({ isActive }) =>
  isActive ? 'button_active' : 'button';

export default getNavLinkButtonStyles;
