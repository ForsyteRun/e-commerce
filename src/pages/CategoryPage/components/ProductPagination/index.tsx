import { Box, Pagination } from '@mui/material';
import createQuery from 'helpers/createQuery';
import { useAppDispatch, useAppSelector } from 'hooks/useRedux';
import { getCategoryIdBySlug } from 'pages/CategoryPage/helpers/getCategoryParams';
import { useLocation } from 'react-router-dom';
import fetchProductsData from 'store/productsDataSlice/fetchProductsData';
import { IProductsQuery } from 'types';

const ProductPagination = () => {
  const dispatch = useAppDispatch();
  const { pathname } = useLocation();
  const { counters } = useAppSelector((state) => state.productsDataSlice);
  const { searchValue } = useAppSelector((state) => state.searchSlice);
  const sort = useAppSelector((state) => state.sortSlice);
  const limit = counters?.limit;

  const formattedPathname = pathname.replace(/\*$/, '');
  const slug = formattedPathname.slice(formattedPathname.lastIndexOf('/') + 1);
  const categoryId = getCategoryIdBySlug(slug);

  const handlePageChange = (e: React.ChangeEvent<unknown>, newPage: number) => {
    e.preventDefault();
    if (limit) {
      const offset: number = (newPage - 1) * limit;
      const query: IProductsQuery = createQuery(
        offset,
        searchValue,
        categoryId,
        sort
      );
      dispatch(fetchProductsData(query));
    }
  };

  return (
    <Box>
      <Pagination
        page={counters?.page || 1}
        count={counters?.totalPages}
        onChange={handlePageChange}
        color="secondary"
        shape="rounded"
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
