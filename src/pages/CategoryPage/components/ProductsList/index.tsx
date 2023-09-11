import { useAppSelector } from 'hooks/useRedux';
import ProductCard from '../ProductCard';
import styles from './ProductsList.module.scss';

const ProductsList = () => {
  const { data } = useAppSelector((state) => state.productsDataSlice);
  return (
    <div className={styles.container}>
      {data?.map((product) => <ProductCard key={product.id} data={product} />)}
    </div>
  );
};

export default ProductsList;
