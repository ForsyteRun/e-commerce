import { useState, useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import { TextField, IconButton } from '@mui/material';
import { Search } from '@mui/icons-material';
import { getCategoryIdBySlug } from 'pages/CategoryPage/helpers/getCategoryParams';
import { useAppDispatch } from 'hooks/useRedux';
import fetchProductsData from 'store/productsDataSlice/fetchProductsData';
import useIconButtonColorTheme from 'helpers/useIconButtonColorTheme';
import styles from './SearchBar.module.scss';

const SearchBar = () => {
  const dispatch = useAppDispatch();
  const { pathname } = useLocation();
  const [searchValue, setSearchValue] = useState('');

  const submitHandler = (e: React.FormEvent<HTMLElement>) => {
    e.preventDefault();
    const formattedPathname = pathname.replace(/\*$/, '');
    const slug = formattedPathname.slice(
      formattedPathname.lastIndexOf('/') + 1
    );
    const categoryId = getCategoryIdBySlug(slug);
    dispatch(fetchProductsData({ searchValue, categoryId }));
  };

  useEffect(() => {
    setSearchValue('');
  }, [pathname]);

  return (
    <form className={styles.searchContainer} onSubmit={submitHandler}>
      <TextField
        variant="outlined"
        size="small"
        fullWidth
        placeholder="Search"
        value={searchValue}
        onChange={(e) => setSearchValue(e.target.value)}
        className={styles.searchField}
        sx={{
          '& fieldset': {
            border: '1px solid #eaebed',
            borderRadius: '12px',
          },
        }}
      />
      <IconButton
        type="submit"
        onSubmit={submitHandler}
        sx={{
          ml: '0.25rem',
          ...useIconButtonColorTheme('25, 118, 210'),
        }}
      >
        <Search />
      </IconButton>
    </form>
  );
};

export default SearchBar;
