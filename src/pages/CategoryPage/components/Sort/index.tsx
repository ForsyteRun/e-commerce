import SortButton from './components/SortButton';
import styles from './Sort.module.scss';

const Sort = () => {
  return (
    <div className={styles.container}>
      <SortButton by="price" />
      <SortButton by="name" />
    </div>
  );
};

export default Sort;
