import {
  Address,
  BaseAddress,
  CustomerDraft,
} from '@commercetools/platform-sdk';
import getAdressesFlags from './helpers/getAdressesFlags';
import { IDefaultAdress } from '../types';

function validateAdresses(data: CustomerDraft, adressesFlags: IDefaultAdress) {
  let validatedAdresses: BaseAddress[];
  const { isSameBillingFieldAsShipping } = adressesFlags;

  if (data.addresses) {
    if (isSameBillingFieldAsShipping) {
      validatedAdresses = data.addresses.filter(
        (el: Address) => el.city !== ''
      );
    } else {
      validatedAdresses = data.addresses;
    }
  } else {
    validatedAdresses = [];
  }

  const flags = getAdressesFlags(adressesFlags);

  const formData: CustomerDraft = {
    ...data,
    ...flags,
    addresses: validatedAdresses,
  };

  return formData;
}

export default validateAdresses;
