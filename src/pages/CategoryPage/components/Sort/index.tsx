import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import { useAppDispatch } from 'hooks/useRedux';
import { resetSort } from 'store/sortSlice';
import SortButton from './components/SortButton';
import styles from './Sort.module.scss';

const Sort = () => {
  const { pathname } = useLocation();
  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(resetSort());
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [pathname]);

  return (
    <div className={styles.container}>
      <SortButton by="price" />
      <SortButton by="name" />
    </div>
  );
};

export default Sort;
