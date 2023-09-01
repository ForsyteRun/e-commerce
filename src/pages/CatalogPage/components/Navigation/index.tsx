import { useAppSelector } from 'hooks/useRedux';
import NavigationList from './components/NavigationList';
import styles from './Navigation.module.scss';

const Navigation = () => {
  const { data } = useAppSelector((state) => state.categoriesSlice);

  const rootCategories = data?.filter((category) => !category.parent) || [];

  return (
    <nav className={styles.navigation}>
      <div className={styles.container}>
        <h2 className={styles.title}>Catalog</h2>
        <NavigationList categories={rootCategories} />
      </div>
    </nav>
  );
};

export default Navigation;
