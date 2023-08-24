import { NavLink } from 'react-router-dom';
import LogoIcon from 'assets/images/svg/logo.svg';
import { PathNames } from 'types';
import styles from './Logo.module.scss';

const Logo = () => {
  return (
    <NavLink className={styles.logo} to={PathNames.index}>
      <span className={styles.wrapper}>
        <img src={LogoIcon} alt="logo" className={styles.icon} />
        <span>Printerix</span>
      </span>
    </NavLink>
  );
};

export default Logo;
