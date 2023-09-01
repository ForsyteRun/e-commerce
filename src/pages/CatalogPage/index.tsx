import { Outlet } from 'react-router-dom';
import BreadcrumbsNavigation from './components/Breadcrumbs';
import Navigation from './components/Navigation';
import styles from './CatalogPage.module.scss';

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
