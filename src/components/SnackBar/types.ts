import { Dispatch, SetStateAction } from 'react';

export interface ISnackBar {
  title: string;
  color: string;
  isOk?: boolean;
  setStatus: Dispatch<SetStateAction<{ isError: boolean; isOk: boolean }>>;
}
