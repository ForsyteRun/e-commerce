import NavigationButton from 'UI/NavigationButton';
import { PathNames } from 'types';
import styles from './AppNavigation.module.scss';

const AppNavigation = () => {
  return (
    <div className={styles.container}>
      <NavigationButton path={PathNames.index}>Home</NavigationButton>
      <NavigationButton path={PathNames.catalog}>Catalog</NavigationButton>
      <NavigationButton path={PathNames.about}>About Us</NavigationButton>
    </div>
  );
};

export default AppNavigation;
