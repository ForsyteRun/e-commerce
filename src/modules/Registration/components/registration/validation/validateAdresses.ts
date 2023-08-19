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

  const shippingAdressIndex = 0;
  const billingAdressIndex = isSameBillingFieldAsShipping ? 0 : 1;
  const defaultShippingAddressIndex = defaultShippingAdress
    ? shippingAdressIndex
    : undefined;
  const defaultBillingAddressIndex = defaultBillingAdress
    ? billingAdressIndex
    : undefined;

  const formData: CustomerDraft = {
    ...data,
    addresses: validatedAdresses,
    shippingAddresses: [shippingAdressIndex],
    billingAddresses: [billingAdressIndex],
    defaultBillingAddress: defaultBillingAddressIndex,
    defaultShippingAddress: defaultShippingAddressIndex,
  };

  return formData;
}

export default validateAdresses;
