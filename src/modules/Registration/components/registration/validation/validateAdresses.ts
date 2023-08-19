import {
  Address,
  BaseAddress,
  CustomerDraft,
} from '@commercetools/platform-sdk';
import { IDefaultAdress } from '../types';

function validateAdresses(data: CustomerDraft, adressesFlags: IDefaultAdress) {
  let validatedAdresses: BaseAddress[];
  const {
    isSameBillingFieldAsShipping,
    defaultShippingAdress,
    defaultBillingAdress,
  } = adressesFlags;

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

  let defaultShippingAddressIndex: number | undefined;
  let defaultBillingAddressIndex: number | undefined;

  if (defaultShippingAdress) {
    defaultShippingAddressIndex = 0;
  }

  if (defaultBillingAdress) {
    defaultBillingAddressIndex = isSameBillingFieldAsShipping ? 0 : 1;
  }

  const shippingAddresses = [0];
  const billingAddresses = validatedAdresses.length === 2 ? [1] : [];

  const formData: CustomerDraft = {
    ...data,
    addresses: validatedAdresses,
    shippingAddresses,
    billingAddresses,
    defaultBillingAddress: defaultBillingAddressIndex,
    defaultShippingAddress: defaultShippingAddressIndex,
  };

  return formData;
}

export default validateAdresses;
