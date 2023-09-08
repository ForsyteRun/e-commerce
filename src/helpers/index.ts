import findDataItemBySlug from './findDataItemBySlug';
import { capitalize, capitalizeAll } from './capitalize';
import identificateUserOnAppStart from './identificateUserOnAppStart';
import isResponseOk from './isResponseOk';
import localizedStringToString from './localizedStringToString';
import {
  getRefreshTokenCookie,
  updateRefreshTokenCookie,
  removeRefreshTokenCookie,
} from './processRefreshTokenCookie';
import addToCartHandler from './addToCartHandler';

export {
  findDataItemBySlug,
  capitalize,
  capitalizeAll,
  identificateUserOnAppStart,
  isResponseOk,
  localizedStringToString,
  getRefreshTokenCookie,
  updateRefreshTokenCookie,
  removeRefreshTokenCookie,
  addToCartHandler,
};
