import { Dispatch, SetStateAction } from 'react';

export interface IFieldInfoShown {
  title: string;
  value: string | undefined;
  setOpenSingleForm: Dispatch<SetStateAction<boolean>>;
}
