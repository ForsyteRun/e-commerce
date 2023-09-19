import { ObjectSchema } from 'yup';

export interface IFieldInfo {
  value: string | undefined;
  title: string;
  validation:
    | ObjectSchema<Record<string, string>>
    | ObjectSchema<Record<string, Date>>;
}

export type IFieldData = IFieldInfo;
