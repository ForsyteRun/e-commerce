import { Box, Pagination } from '@mui/material';
import { useAppDispatch, useAppSelector } from 'hooks/useRedux';
import { getCategoryIdBySlug } from 'pages/CategoryPage/helpers/getCategoryParams';
import { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';
import fetchProductsData from 'store/productsDataSlice/fetchProductsData';
import { IProductsQuery } from 'types';
import createProductsQuery from './helpers';

const ProductPagination = () => {
  const dispatch = useAppDispatch();
  const { pathname } = useLocation();
  const { counters } = useAppSelector((state) => state.productsDataSlice);
  const sort = useAppSelector((state) => state.sortSlice);
  const [page, setPage] = useState(1);
  const limit = counters?.limit || 3;

  const formattedPathname = pathname.replace(/\*$/, '');
  const slug = formattedPathname.slice(formattedPathname.lastIndexOf('/') + 1);
  const categoryId = getCategoryIdBySlug(slug);

  const handlePageChange = (e: React.ChangeEvent<unknown>, newPage: number) => {
    e.preventDefault();
    setPage(newPage);
    const offset: number = (newPage - 1) * limit;
    const query: IProductsQuery = createProductsQuery(offset, categoryId, sort);
    dispatch(fetchProductsData(query));
  };

  useEffect(() => {
    setPage(1);
  }, [pathname, sort]);

  return (
    <Box>
      <Pagination
        page={page}
        count={counters?.totalPages}
        onChange={handlePageChange}
        color="secondary"
        shape="rounded"
        defaultPage={1}
        siblingCount={0}
        sx={{
          '& ul': {
            justifyContent: 'center',
          },
        }}
      />
    </Box>
  );
};

export default ProductPagination;
