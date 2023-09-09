import { useAppSelector } from 'hooks/useRedux';
// import FilterSideBar from './components/FilterSideBar';
import ProductPagination from 'pages/CategoryPage/components/ProductPagination';
import Spinner from 'UI/Spinner';
import ProductCard from './components/ProductCard';
import Sort from './components/Sort';
import SearchBar from './components/SearchBar';
import styles from './CategoryPage.module.scss';

const CategoryPage = () => {
  const { data, loading } = useAppSelector((state) => state.productsDataSlice);
  const isPending = loading === 'pending';

  return (
    <section className={styles.category}>
      <div className={styles.container}>
        {/* <FilterSideBar /> */}
        <div className={styles.content}>
          <div className={styles.control}>
            <Sort />
            <SearchBar />
          </div>
          {isPending ? (
            <div className={styles.spinnerContainer}>
              <Spinner />
            </div>
          ) : (
            <div className={styles.productsContainer}>
              <div className={styles.products}>
                {data?.map((product) => (
                  <ProductCard key={product.id} data={product} />
                ))}
              </div>
              <ProductPagination />
            </div>
          )}
        </div>
      </div>
    </section>
  );
};

export default CategoryPage;
