import {
  AuthenticationMode,
  CentPrecisionMoney,
  Customer,
  LineItem,
  ProductProjectionPagedQueryResponse,
  QueryParam,
  _ErrorResponse,
} from '@commercetools/platform-sdk';
import { CookieAttributes } from 'js-cookie';

export type Mutable<Type> = {
  -readonly [Key in keyof Type]: Type[Key];
};

export enum PathNames {
  index = '/',
  register = '/register',
  login = '/login',
  catalog = '/catalog',
  profile = '/profile',
  category = '/catalog/:category',
  product = '/catalog/:category/:product',
  cart = '/cart',
  profileInfo = 'info',
  profileAddress = 'address',
  profilePassword = 'password',
  about = '/about',
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
  anonymousId?: string;
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

export interface IUserData {
  authenticationMode: AuthenticationMode;
  id: string | null | undefined;
  version?: number;
}

type RegisteredUserDataFields =
  | 'id'
  | 'version'
  | 'email'
  | 'firstName'
  | 'lastName'
  | 'dateOfBirth'
  | 'addresses'
  | 'defaultBillingAddressId'
  | 'defaultShippingAddressId'
  | 'shippingAddressIds'
  | 'billingAddressIds'
  | 'authenticationMode';

export type RegisteredUserData = Pick<Customer, RegisteredUserDataFields>;

type LoadingState = 'idle' | 'pending' | 'succeeded' | 'failed';

interface IStoreBasicData {
  loading: LoadingState;
  error: _ErrorResponse | null;
}

export interface IUserState extends IStoreBasicData {
  data: IUserData | RegisteredUserData;
}

export interface ICartData {
  id: string;
  version: number;
  lineItems: LineItem[];
  totalPrice: CentPrecisionMoney;
}

export interface ICartState extends IStoreBasicData {
  data: ICartData | null;
}

export interface ICategoryData {
  id: string;
  name: string;
  slug: string;
  orderHint: number;
  description?: string;
  key?: string;
  metaTitle?: string;
  metaDescription?: string;
  parent?: string;
}

export interface ICategoriesState extends IStoreBasicData {
  data: null | ICategoryData[];
}

export interface IPriceData {
  currencyCode: string;
  net: number;
  discounted?: number;
}

export type AttributeValue = string | number | boolean;

export interface IAttributes {
  [key: string]: AttributeValue;
}

export interface IAttributesData extends IStoreBasicData {
  data: Array<IAttributes | undefined> | null;
}

export interface IProductData {
  id: string;
  name: string;
  categories: string[];
  slug: string;
  description?: string;
  metaTitle?: string;
  metaDescription?: string;
  sku?: string;
  price?: IPriceData;
  attributes?: IAttributes;
  images?: string[];
}

export interface IProductsCounters
  extends Omit<ProductProjectionPagedQueryResponse, 'results'> {
  totalPages: number;
  page: number;
}

export interface ISortState {
  price: SortDirections;
  name: SortDirections;
}

export type SortDirections = 'asc' | 'desc' | false;

export type SortBy = 'price' | 'name';

export interface ISearchState {
  searchValue: string;
}

export interface IFiltersState {
  attributes: {
    [key: string]: string;
  };
  isFiltersActive: boolean;
}

export interface IProductsData extends IStoreBasicData {
  data: IProductData[] | null;
  counters: IProductsCounters | null;
}

export interface ISingleProductData extends IStoreBasicData {
  data: IProductData | null;
}

export type AppState =
  | IUserState
  | IProductsData
  | ISingleProductData
  | ICategoriesState
  | ICartState
  | IAttributesData;

export interface IProductsQuery {
  limit?: number;
  offset?: number;
  categoryId?: string;
  sort?: string;
  searchValue?: string;
  attributes?: { [key: string]: string };
}

export interface IQueryArgs {
  [key: string]: QueryParam;
}

export type OnClickHandler = (
  e: React.MouseEvent<HTMLElement, MouseEvent>
) => void;

export interface INavigationListItemProps {
  slug: string;
  id: string;
  name: string;
}
