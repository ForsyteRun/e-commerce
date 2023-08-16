import { Dispatch, SetStateAction } from 'react';

export interface ISnackBar {
  title: string;
  color: string;
  setStatus: Dispatch<SetStateAction<{ isError: boolean; isOk: boolean }>>;
}
