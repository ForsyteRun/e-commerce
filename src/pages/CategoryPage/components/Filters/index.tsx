import { useEffect, useState } from 'react';
import { Button } from '@mui/material';
import TuneRoundedIcon from '@mui/icons-material/TuneRounded';
import { useAppDispatch, useAppSelector } from 'hooks/useRedux';
import { useLocation } from 'react-router-dom';
import { getCategoryIdBySlug } from 'pages/CategoryPage/helpers/getCategoryParams';
import createQuery from 'helpers/createQuery';
import { IProductsQuery } from 'types';
import fetchProductsData from 'store/productsDataSlice/fetchProductsData';
import FiltersModalWindow from './components/FiltersModalWindow';

const Filters = () => {
  const dispatch = useAppDispatch();
  const { pathname } = useLocation();
  const [open, setOpen] = useState(false);
  const { searchValue } = useAppSelector((state) => state.searchSlice);
  const sort = useAppSelector((state) => state.sortSlice);
  const { attributes, isFiltersActive } = useAppSelector(
    (state) => state.filtersSlice
  );

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

  useEffect(() => {
    if (isFiltersActive) {
      dispatch(fetchProductsData(query));
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [isFiltersActive, attributes]);

  return (
    <>
      <Button
        variant={isFiltersActive ? 'contained' : 'outlined'}
        onClick={() => setOpen(true)}
      >
        <TuneRoundedIcon />
      </Button>
      <FiltersModalWindow open={open} onClose={() => setOpen(false)} />
    </>
  );
};

export default Filters;
