import findDataItemBySlug from './findDataItemBySlug';
import { capitalize, capitalizeAll } from './capitalize';
import isResponseOk from './isResponseOk';
import localizedStringToString from './localizedStringToString';
import {
  getRefreshTokenCookie,
  updateRefreshTokenCookie,
  removeRefreshTokenCookie,
} from './processRefreshTokenCookie';
import addToCartHandler from './addToCartHandler';
import identifyUser from './identifyUser';

export {
  findDataItemBySlug,
  capitalize,
  capitalizeAll,
  isResponseOk,
  localizedStringToString,
  getRefreshTokenCookie,
  updateRefreshTokenCookie,
  removeRefreshTokenCookie,
  addToCartHandler,
  identifyUser,
};
