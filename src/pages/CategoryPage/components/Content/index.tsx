import { useAppSelector } from 'hooks/useRedux';
import Spinner from 'UI/Spinner';
import ProductsList from '../ProductsList';
import styles from './Content.module.scss';

const Content = () => {
  const { data, loading } = useAppSelector((state) => state.productsDataSlice);
  const { isFiltersActive } = useAppSelector((state) => state.filtersSlice);
  const isPending = loading === 'pending';
  const noProductsFound = isFiltersActive && data?.length === 0;

  if (isPending) {
    return <Spinner />;
  }
  if (noProductsFound) {
    return (
      <p className={styles.message}>
        No products were found matching your selection.
      </p>
    );
  }
  return <ProductsList />;
};

export default Content;
