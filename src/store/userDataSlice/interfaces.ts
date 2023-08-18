export interface IUserDataState {
  type: 'anonymous' | 'registered' | null;
  id: string | null | undefined;
  cartId: string | null;
}

export interface IUserState {
  data: IUserDataState;
  loading: 'idle' | 'pending' | 'succeeded' | 'failed';
  error: unknown;
}
