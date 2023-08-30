import { useAppDispatch, useAppSelector } from 'hooks/useRedux';
import { useEffect } from 'react';
import ProductCard from 'pages/CategoryPage/components/ProductCard';
import fetchAllProductsData from 'store/productsDataSlice/fetchAllProductsData';
import styles from './CatalogPage.module.scss';
import BreadcrumbsNavigation from './components/Breadcrumbs';
import Navigation from './components/Navigation';

const CatalogPage = () => {
  const dispatch = useAppDispatch();
  const products = useAppSelector((state) => state.productsDataSlice.data);

  useEffect(() => {
    dispatch(fetchAllProductsData());
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <section className={styles.catalog}>
      <BreadcrumbsNavigation />
      <div className={styles.container}>
        <Navigation />
        <div className={styles.products}>
          <h2 className={styles.title}>Products</h2>
          <div className={styles.content}>
            {products?.map((product) => (
              <ProductCard key={product.id} data={product} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default CatalogPage;
