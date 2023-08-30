import { Outlet } from 'react-router-dom';
import styles from './CatalogPage.module.scss';
import BreadcrumbsNavigation from './components/Breadcrumbs';
import Navigation from './components/Navigation';

const CatalogPage = () => {
  return (
    <section className={styles.catalog}>
      <BreadcrumbsNavigation />
      <Navigation />
      <Outlet />
    </section>
  );
};

export default CatalogPage;
