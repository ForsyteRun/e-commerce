import { ObjectSchema } from 'yup';

export interface IFieldInfo {
  value: string | undefined;
  title: string;
  validation:
    | ObjectSchema<Record<string, string>>
    | ObjectSchema<Record<string, Date>>;
  // setUserData: Dispatch<SetStateAction<Record<string, string | undefined>>>;
}

export type IFieldData = Omit<IFieldInfo, 'setUserData'>;
