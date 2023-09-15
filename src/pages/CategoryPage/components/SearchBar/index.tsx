import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import { TextField, IconButton } from '@mui/material';
import { Search } from '@mui/icons-material';
import { getCategoryIdBySlug } from 'pages/CategoryPage/helpers/getCategoryParams';
import { useAppDispatch, useAppSelector } from 'hooks/useRedux';
import fetchProductsData from 'store/productsDataSlice/fetchProductsData';
import useIconButtonColorTheme from 'helpers/useIconButtonColorTheme';
import { setSearchValue, resetSearchValue } from 'store/searchSlice';
import createQuery from 'helpers/createQuery';
import { IProductsQuery } from 'types';
import styles from './SearchBar.module.scss';

const SearchBar = () => {
  const dispatch = useAppDispatch();
  const { pathname } = useLocation();
  const { searchValue } = useAppSelector((state) => state.searchSlice);
  const sort = useAppSelector((state) => state.sortSlice);
  const { attributes } = useAppSelector((state) => state.filtersSlice);

  const formattedPathname = pathname.replace(/\*$/, '');
  const slug = formattedPathname.slice(formattedPathname.lastIndexOf('/') + 1);
  const categoryId = getCategoryIdBySlug(slug);

  const offset = 0;
  const query: IProductsQuery = createQuery(
    offset,
    searchValue,
    categoryId,
    sort,
    attributes
  );

  const submitHandler = (e: React.FormEvent<HTMLElement>) => {
    e.preventDefault();
    dispatch(fetchProductsData(query));
  };

  const handleSearchChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const newValue = e.target.value;
    dispatch(setSearchValue(newValue));
  };

  useEffect(() => {
    dispatch(resetSearchValue());
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [pathname]);

  return (
    <form className={styles.searchContainer} onSubmit={submitHandler}>
      <TextField
        variant="outlined"
        size="small"
        fullWidth
        placeholder="Search"
        value={searchValue}
        onChange={handleSearchChange}
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
