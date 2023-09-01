import { useState } from 'react';
import { useAppSelector } from 'hooks/useRedux';
import FilterSideBar from './components/FilterSideBar';
import ProductCard from './components/ProductCard';
import Sort from './components/Sort';
import SearchBar from './components/SearchBar';
import styles from './CategoryPage.module.scss';

const CategoryPage = () => {
  const { data } = useAppSelector((state) => state.productsDataSlice);
  const [sortOption, setSortOption] = useState('default');

  return (
    <section className={styles.category}>
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
