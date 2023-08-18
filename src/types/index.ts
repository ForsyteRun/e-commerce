import { CookieAttributes } from 'js-cookie';

export enum PathNames {
  index = '/',
  register = '/register',
  login = '/login',
}

export enum RequestStatusCode {
  OK = 200,
  Created = 201,
  BadRequest = 400,
  Unauthorized = 401,
  InternalServerError = 500,
}

export enum RequestStatusAnswer {
  exist = 'User exist. Login or enter another email',
  success = 'success',
  serverError = 'Internal server error. Try later',
  badRequest = 'Wrong data',
}

export enum RequestStatusColor {
  error = 'red',
  success = 'green',
}

export interface NavLinkButtonProps {
  children: string;
  path: PathNames;
}

interface GetNavLinkButtonStylesProps {
  isActive: boolean;
}

export type GetNavLinkButtonStyles = ({
  isActive,
}: GetNavLinkButtonStylesProps) => 'button_active' | 'button';

export interface LoginFormValues {
  email: string;
  password: string;
}

export interface LoginEmailFieldProps {
  values: {
    email: string;
  };
  errors: {
    email?: string;
  };
  touched: {
    email?: boolean;
  };
  handleChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
  handleBlur: (event: React.FocusEvent<HTMLInputElement>) => void;
}

export interface LoginPasswordFieldProps {
  type: string;
  values: {
    password: string;
  };
  errors: {
    password?: string;
  };
  touched: {
    password?: boolean;
  };
  handleChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
  handleBlur: (event: React.FocusEvent<HTMLInputElement>) => void;
  togglePasswordVisibility: VoidFunction;
  icon: JSX.Element;
}

export enum InputType {
  Password = 'password',
  Text = 'text',
}

export type VoidFunction = () => void;

export type UpdateRefreshToken = (value: string) => void;

export type UpdateCookie = (
  newValue: string,
  options: CookieAttributes
) => void;

export interface LoginErrorProps {
  message: string;
}

export interface IUserDataState {
  type: 'anonymous' | 'registered' | null;
  id: string | null | undefined;
  cartId: string | null | undefined;
}

export interface IUserState {
  data: IUserDataState;
  loading: 'idle' | 'pending' | 'succeeded' | 'failed';
  error: string | null;
}
