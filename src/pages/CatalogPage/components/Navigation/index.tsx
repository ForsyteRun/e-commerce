import { useState } from 'react';
import { NavLink, useLocation } from 'react-router-dom';
import { Button, List, ListItemButton } from '@mui/material';
import { ExpandLess, ExpandMore } from '@mui/icons-material';
import { useAppSelector } from 'hooks/useRedux';
import { PathNames } from 'types';
import styles from './Navigation.module.scss';

const Navigation = () => {
  const { pathname } = useLocation();
  const { data } = useAppSelector((state) => state.categoriesSlice);
  const [selected, setSelected] = useState('');

  const formattedPathname = pathname.replace(/\/*$/, '');

  const location = formattedPathname.slice(
    formattedPathname.lastIndexOf('/') + 1
  );

  const rootCategories = data?.filter((category) => !category.parent);

  const selectedHandler = (
    e: React.MouseEvent<HTMLElement, MouseEvent>,
    slug: string = ''
  ) => {
    e.stopPropagation();
    setSelected(selected === slug ? '' : slug);
  };

  return (
    <nav className={styles.navigation}>
      <List
        component="ul"
        sx={{
          display: 'flex',
          flexWrap: 'wrap',
          justifyContent: 'center',
          p: '0.5rem',
        }}
      >
        {rootCategories?.map((category) => {
          const { slug, id, name } = category;
          return (
            <ListItemButton
              key={id}
              sx={{ maxWidth: '200px', borderRadius: '5px', p: '0.5rem' }}
              onClick={(e) => selectedHandler(e, slug)}
              selected={selected === slug}
            >
              <Button
                component={NavLink}
                disabled={slug === location}
                disableRipple
                onClick={selectedHandler}
                sx={{
                  lineHeight: 1,
                  m: '0.5rem auto',
                  p: 0,
                  ':hover': {
                    backgroundColor: 'transparent',
                    textDecoration: 'underline',
                  },
                }}
                to={`${PathNames.catalog}/${slug}`}
                variant="text"
              >
                {name}
              </Button>
              {selected === slug ? <ExpandLess /> : <ExpandMore />}
            </ListItemButton>
          );
        })}
      </List>
    </nav>
  );
};

export default Navigation;
