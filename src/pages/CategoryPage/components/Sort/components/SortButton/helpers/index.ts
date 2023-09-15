import store from 'store';
import fetchProductsData from 'store/productsDataSlice/fetchProductsData';
import { setSort } from 'store/sortSlice';
import { SortBy, SortDirections } from 'types';

export const getSortDirection = (direction: SortDirections): SortDirections =>
  direction === 'asc' ? 'desc' : 'asc';

export const getSortQuery = (by: SortBy, direction: SortDirections): string => {
  const name = by === 'name' ? 'name.en-US' : by;
  const dir = getSortDirection(direction);
  return `${name} ${dir}`;
};

export const sortHandler = (
  categoryId: string | undefined,
  by: SortBy
): void => {
  const { dispatch, getState } = store;
  const sortState = getState().sortSlice;
  const { searchValue } = getState().searchSlice;
  const { attributes } = getState().filtersSlice;
  const sortData = {
    by,
    direction: getSortDirection(sortState[by]),
  };

  dispatch(setSort(sortData));

  const query = {
    sort: `${getSortQuery(by, sortState[by])}`,
    categoryId: categoryId || '',
    searchValue,
    attributes,
  };

  dispatch(fetchProductsData(query));
};
