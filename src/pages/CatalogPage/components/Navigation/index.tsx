import { NavLink } from 'react-router-dom';
import { List, ListItemButton, ListItemText } from '@mui/material';
import { useAppSelector } from 'hooks/useRedux';
import { PathNames } from 'types';
import styles from './Navigation.module.scss';

const Navigation = () => {
  const { data } = useAppSelector((state) => state.categoriesSlice);

  const rootCategories = data?.filter((category) => !category.parent);

  return (
    <nav className={styles.navigation}>
      <List
        component="ul"
        sx={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'center' }}
      >
        {rootCategories?.map((category) => (
          <ListItemButton
            key={category.id}
            component={NavLink}
            to={`${PathNames.catalog}/${category.slug}`}
            sx={{ maxWidth: '200px', textAlign: 'center', borderRadius: '5px' }}
          >
            <ListItemText primary={category.name} />
          </ListItemButton>
        ))}
      </List>
    </nav>
  );
};

export default Navigation;
