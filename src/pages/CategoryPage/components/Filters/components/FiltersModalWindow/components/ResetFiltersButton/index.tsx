import { Button } from '@mui/material';
import { ClearRounded } from '@mui/icons-material';
import { useLocation } from 'react-router-dom';
import { useAppDispatch, useAppSelector } from 'hooks/useRedux';
import { resetFilters } from 'store/filtersSlice';
import { getCategoryIdBySlug } from 'pages/CategoryPage/helpers/getCategoryParams';
import fetchProductsData from 'store/productsDataSlice/fetchProductsData';
import createQuery from 'helpers/createQuery';
import { IProductsQuery } from 'types';

const ResetFiltersButton = () => {
  const dispatch = useAppDispatch();
  const { pathname } = useLocation();
  const { searchValue } = useAppSelector((state) => state.searchSlice);
  const sort = useAppSelector((state) => state.sortSlice);
  const emptyAttributeObject = {};

  const formattedPathname = pathname.replace(/\*$/, '');
  const slug = formattedPathname.slice(formattedPathname.lastIndexOf('/') + 1);
  const categoryId = getCategoryIdBySlug(slug);
  const offset = 0;

  const query: IProductsQuery = createQuery(
    offset,
    searchValue,
    categoryId,
    sort,
    emptyAttributeObject
  );

  const handleReset = () => {
    dispatch(resetFilters());
    dispatch(fetchProductsData(query));
  };

  return (
    <Button
      variant="outlined"
      color="error"
      startIcon={<ClearRounded />}
      onClick={handleReset}
      sx={{ maxWidth: 200, margin: '0.25rem auto' }}
    >
      Reset Filters
    </Button>
  );
};

export default ResetFiltersButton;
