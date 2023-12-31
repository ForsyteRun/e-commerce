import {
  getSortDirection,
  getSortQuery,
} from 'pages/CategoryPage/components/Sort/components/SortButton/helpers';
import { IProductsQuery, ISortState, SortBy, SortDirections } from 'types';

const createQuery = (
  offset: number | undefined,
  searchValue: string | undefined,
  categoryId: string | undefined,
  sort: ISortState,
  attributes: { [key: string]: string } | undefined
): IProductsQuery => {
  const isSortActive = sort.name !== false || sort.price !== false;
  const query: IProductsQuery = {};

  if (offset) {
    query.offset = offset;
  }

  if (categoryId) {
    query.categoryId = categoryId;
  }

  if (searchValue) {
    query.searchValue = searchValue;
  }

  if (isSortActive) {
    const currentSortBy: SortBy = sort.name !== false ? 'name' : 'price';
    const currentDirection: SortDirections = getSortDirection(
      sort[currentSortBy]
    );
    query.sort = getSortQuery(currentSortBy, currentDirection);
  }

  if (attributes) {
    query.attributes = attributes;
  }

  return query;
};

export default createQuery;
