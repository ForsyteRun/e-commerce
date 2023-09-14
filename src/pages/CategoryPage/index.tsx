import { useAppSelector } from 'hooks/useRedux';
import ProductPagination from 'pages/CategoryPage/components/ProductPagination';
import Spinner from 'UI/Spinner';
import ProductsList from './components/ProductsList';
import Sort from './components/Sort';
import SearchBar from './components/SearchBar';
import styles from './CategoryPage.module.scss';
import Filters from './components/Filters';

const CategoryPage = () => {
  const { loading } = useAppSelector((state) => state.productsDataSlice);
  const isPending = loading === 'pending';

  return (
    <section className={styles.category}>
      <div className={styles.container}>
        <div className={styles.control}>
          <div className={styles.panel}>
            <Filters />
            <Sort />
          </div>
          <SearchBar />
        </div>
        <div className={styles.productsList}>
          {isPending ? <Spinner /> : <ProductsList />}
          <ProductPagination />
        </div>
      </div>
    </section>
  );
};

export default CategoryPage;
