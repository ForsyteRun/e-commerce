import { NavLink } from 'react-router-dom';
import { PathNames } from 'types';
import { List, ListItem, ListItemText } from '@mui/material';
import { useAppDispatch, useAppSelector } from 'hooks/useRedux';
import { useEffect } from 'react';
import fetchCategoriesList from 'store/categoriesSlice/fetchCategoriesList';
import styles from './Navigation.module.scss';

const Navigation = () => {
  const dispatch = useAppDispatch();
  const { data } = useAppSelector((state) => state.categoriesSlice);

  useEffect(() => {
    dispatch(fetchCategoriesList());
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <div className={styles.container}>
      <h2 className={styles.title}>Categories</h2>
      <nav className={styles.navigation}>
        <List component="ul" sx={{ display: 'flex' }}>
          {data?.map((category) => (
            <li key={category.id}>
              <ListItem
                button
                component={NavLink}
                to={`${PathNames.catalog}/${category.key}`}
              >
                <ListItemText primary={category.name} />
              </ListItem>
            </li>
          ))}
        </List>
      </nav>
    </div>
  );
};

export default Navigation;
