import ProductPagination from 'pages/CategoryPage/components/ProductPagination';
import Sort from './components/Sort';
import SearchBar from './components/SearchBar';
import Filters from './components/Filters';
import Content from './components/Content';
import styles from './CategoryPage.module.scss';

const CategoryPage = () => {
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
        <div className={styles.content}>
          <Content />
          <ProductPagination />
        </div>
      </div>
    </section>
  );
};

export default CategoryPage;
