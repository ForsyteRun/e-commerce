import { _ErrorResponse } from '@commercetools/platform-sdk';
import { createAsyncThunk } from '@reduxjs/toolkit';
import createRefreshTokenClientApi from 'services/sdkClient/createRefreshTokenClientApi';
import { IProductsQuery, IQueryArgs } from 'types';

const fetchAttributesData = createAsyncThunk(
  'attributesData/fetchAttributes',
  async (_query: IProductsQuery | undefined, { rejectWithValue }) => {
    const api = createRefreshTokenClientApi();

    const filter: string[] = [];

    if (_query && _query.categoryId) {
      filter.push(`categories.id: subtree("${_query.categoryId}")`);
    }

    const queryArgs: IQueryArgs = {
      limit: 20,
      offset: 0,
      filter,
    };

    const response = await api
      .productProjections()
      .search()
      .get({ queryArgs })
      .execute()
      .then((res) => res.body)
      .catch((err: _ErrorResponse) => {
        const { message, statusCode } = err;
        return rejectWithValue({ message, statusCode });
      });

    return response;
  }
);

export default fetchAttributesData;
