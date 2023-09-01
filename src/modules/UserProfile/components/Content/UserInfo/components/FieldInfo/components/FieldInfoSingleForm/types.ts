import { ObjectSchema } from 'yup';
import { InitialValues } from '../../type';

export interface IFieldInfoSingleForm {
  title: string;
  validation:
    | ObjectSchema<Record<string, string>>
    | ObjectSchema<Record<string, Date>>;
  submit: (value: InitialValues) => void;
}
