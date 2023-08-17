import { CookieAttributes } from 'js-cookie';
import store from '../store';

export type AppDispatch = typeof store.dispatch;

export type RootState = ReturnType<typeof store.getState>;

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
}

export enum RequestStatusAnswer {
  exist = 'user exist',
  success = 'success',
}

export enum RequestStatusColor {
  exist = 'red',
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
