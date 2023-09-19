import { ProductProjectionPagedQueryResponse } from '@commercetools/platform-sdk';
import { IProductsCounters } from 'types';

const calculateProductsCounters = (
  counters: Omit<ProductProjectionPagedQueryResponse, 'results'>
): IProductsCounters => {
  const { total, limit, offset } = counters;
  let page = Math.ceil(offset / limit) + 1;
  const totalPages = total ? Math.ceil(total / limit) : 1;

  if (page < 1) {
    page = 1;
  }

  if (page > totalPages) {
    page = totalPages;
  }

  return {
    page,
    totalPages,
    ...counters,
  };
};

export default calculateProductsCounters;
