import { ObjectSchema } from 'yup';

export interface IFieldInfo {
  title: string;
  value: string | undefined;
  validation:
    | ObjectSchema<Record<string, string>>
    | ObjectSchema<Record<string, Date>>;
}
