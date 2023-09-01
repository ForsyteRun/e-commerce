import { ObjectSchema } from 'yup';

export interface ISingleFormField {
  title: string;
  validation:
    | ObjectSchema<Record<string, string>>
    | ObjectSchema<Record<string, Date>>;
  setOpenSingleForm: (value: boolean) => void;
  // setOpenModal: (value: boolean) => void;
}
