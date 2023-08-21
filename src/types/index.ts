import { CookieAttributes } from 'js-cookie';

export enum PathNames {
  index = '/',
  register = '/register',
  login = '/login',
}

export enum RequestStatusCode {
  Unnown = 0,
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
  isPending: boolean;
}

export type GetNavLinkButtonStyles = (
  props: GetNavLinkButtonStylesProps
) => 'button_active' | 'button';

export interface LoginFormValues {
  email: string;
  password: string;
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

export type UserType = 'anonymous' | 'registered' | null;

export interface IUserDataState {
  type: UserType;
  id: string | null | undefined;
  cartId?: string;
}

export interface IUserState {
  data: IUserDataState;
  loading: 'idle' | 'pending' | 'succeeded' | 'failed';
  error: string | null;
}
