import { useAppDispatch, useAppSelector } from 'hooks/useRedux';
import { useEffect, useState } from 'react';
import fetchAllProductsData from 'store/productsDataSlice/fetchAllProductsData';
import FilterSideBar from './components/FilterSideBar';
import ProductCard from './components/ProductCard';
import styles from './CatalogPage.module.scss';
import Sort from './components/Sort';

const Catalog = () => {
  const dispatch = useAppDispatch();
  const { data } = useAppSelector((state) => state.productsDataSlice);
  const [sortOption, setSortOption] = useState('default');

  useEffect(() => {
    dispatch(fetchAllProductsData());
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <div className={styles.container}>
      <FilterSideBar />
      <div className={styles.content}>
        <div className={styles.sortContainer}>
          <Sort sortOption={sortOption} setSortOption={setSortOption} />
        </div>
        {data &&
          data.map((product) => (
            <ProductCard key={product.id} data={product} />
          ))}
      </div>
    </div>
  );
};

export default Catalog;
