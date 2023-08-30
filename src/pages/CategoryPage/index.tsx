import { useAppDispatch, useAppSelector } from 'hooks/useRedux';
import { useEffect, useState } from 'react';
import fetchAllProductsData from 'store/productsDataSlice/fetchAllProductsData';
// import BreadcrumbsNavigation from 'pages/CatalogPage/components/Breadcrumbs';
// import Navigation from 'pages/CatalogPage/components/Navigation';
import FilterSideBar from './components/FilterSideBar';
import ProductCard from './components/ProductCard';
import styles from './CategoryPage.module.scss';
import Sort from './components/Sort';
import SearchBar from './components/SearchBar';

const CategoryPage = () => {
  const dispatch = useAppDispatch();
  const { data } = useAppSelector((state) => state.productsDataSlice);
  const [sortOption, setSortOption] = useState('default');

  useEffect(() => {
    dispatch(fetchAllProductsData());
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <section className={styles.category}>
      <h2 className={styles.title}>Products</h2>
      <div className={styles.container}>
        <FilterSideBar />
        <div className={styles.content}>
          <div className={styles.control}>
            <Sort sortOption={sortOption} setSortOption={setSortOption} />
            <SearchBar />
          </div>
          <div className={styles.productsContainer}>
            {data?.map((product) => (
              <ProductCard key={product.id} data={product} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default CategoryPage;
