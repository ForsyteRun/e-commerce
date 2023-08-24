import { NavLink } from 'react-router-dom';
import LogoIcon from 'assets/images/svg/logo.svg';
import { PathNames } from 'types';
import styles from './Logo.module.scss';

const Logo = () => {
  return (
    <NavLink className={styles.logo} to={PathNames.index}>
      <img src={LogoIcon} alt="logo" className={styles.icon} />
      <span>Printerix</span>
    </NavLink>
  );
};

export default Logo;
