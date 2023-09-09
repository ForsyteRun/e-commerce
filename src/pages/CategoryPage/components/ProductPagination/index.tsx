import { Box, Pagination } from '@mui/material';
import { useAppDispatch, useAppSelector } from 'hooks/useRedux';
import fetchProductsData from 'store/productsDataSlice/fetchProductsData';

const ProductPagination = () => {
  const dispatch = useAppDispatch();
  const { counters } = useAppSelector((state) => state.productsDataSlice);
  const limit = counters?.limit || 3;

  const handlePageChange = (e: React.ChangeEvent<unknown>, page: number) => {
    e.preventDefault();
    const offset: number = (page - 1) * limit;
    dispatch(fetchProductsData({ offset }));
  };

  return (
    <Box>
      <Pagination
        page={counters?.page}
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
