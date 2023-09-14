import { useEffect, useState } from 'react';
import { Button } from '@mui/material';
import TuneRoundedIcon from '@mui/icons-material/TuneRounded';
import { useAppDispatch, useAppSelector } from 'hooks/useRedux';
import { useLocation } from 'react-router-dom';
import { resetFilters } from 'store/filtersSlice';
import { getCategoryIdBySlug } from 'pages/CategoryPage/helpers/getCategoryParams';
import createQuery from 'helpers/createQuery';
import { IProductsQuery } from 'types';
import fetchProductsData from 'store/productsDataSlice/fetchProductsData';
import FiltersModalWindow from './components/FiltersModalWindow';

const Filters = () => {
  const dispatch = useAppDispatch();
  const { pathname } = useLocation();
  const [open, setOpen] = useState(false);
  const { isButtonActive } = useAppSelector((state) => state.filtersSlice);
  const { searchValue } = useAppSelector((state) => state.searchSlice);
  const sort = useAppSelector((state) => state.sortSlice);
  const { attributes } = useAppSelector((state) => state.filtersSlice);
  const hasAttributes = Object.keys(attributes).length > 0;

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
    if (hasAttributes) {
      dispatch(fetchProductsData(query));
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [attributes]);

  useEffect(() => {
    dispatch(resetFilters());
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [pathname]);

  return (
    <>
      <Button
        variant={isButtonActive ? 'contained' : 'outlined'}
        onClick={() => setOpen(true)}
      >
        <TuneRoundedIcon />
      </Button>
      <FiltersModalWindow open={open} onClose={() => setOpen(false)} />
    </>
  );
};

export default Filters;
