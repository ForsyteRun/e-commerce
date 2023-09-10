import { IProductsQuery, ISortState, SortBy, SortDirections } from 'types';
import {
  getSortDirection,
  getSortQuery,
} from '../../Sort/components/SortButton/helpers';

const createProductsQuery = (
  offset: number,
  categoryId: string | undefined,
  sort: ISortState
): IProductsQuery => {
  const query: IProductsQuery = { offset };
  const isSortActive = sort.name !== false || sort.price !== false;

  if (categoryId) {
    query.categoryId = categoryId;
  }

  if (isSortActive) {
    const currentSortBy: SortBy = sort.name !== false ? 'name' : 'price';
    const currentDirection: SortDirections = getSortDirection(
      sort[currentSortBy]
    );
    query.sort = getSortQuery(currentSortBy, currentDirection);
  }

  return query;
};

export default createProductsQuery;
