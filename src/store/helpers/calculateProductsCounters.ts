import { ProductProjectionPagedQueryResponse } from '@commercetools/platform-sdk';
import { IProductsCounters } from 'types';

const calculateProductsCounters = (
  counters: Omit<ProductProjectionPagedQueryResponse, 'results'>
): IProductsCounters => {
  const { total, limit, offset } = counters;
  const page = Math.ceil((offset + limit) / limit);
  const totalPages = total ? Math.ceil(total / limit) : 1;

  return { page, totalPages, ...counters };
};

export default calculateProductsCounters;
