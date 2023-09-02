import { Outlet } from 'react-router-dom';
import { useMediaQueryContext } from 'context/MediaQueryContext';
import BreadcrumbsNavigation from './components/Breadcrumbs';
import Navigation from './components/Navigation';
import styles from './CatalogPage.module.scss';
import CatalogNavigationButton from './components/CatalogNavigationButton';
import CatalogNavigationModal from './components/CatalogNavigationModal';

const CatalogPage = () => {
  const { isDesktop } = useMediaQueryContext();

  return (
    <>
      <section className={styles.catalog}>
        <div className={styles.navigation_panel}>
          {!isDesktop && <CatalogNavigationButton />}
          <BreadcrumbsNavigation />
        </div>
        <div className={styles.container}>
          {isDesktop && <Navigation />}
          <Outlet />
        </div>
      </section>
      <CatalogNavigationModal />
    </>
  );
};

export default CatalogPage;
