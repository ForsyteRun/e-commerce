import {
  Address,
  BaseAddress,
  CustomerDraft,
} from '@commercetools/platform-sdk';
import getAddressesFlags from './helpers/getAddressesFlags';
import { IDefaultAddress } from '../types';

function validateAddresses(
  data: CustomerDraft,
  addressesFlags: IDefaultAddress
) {
  let validatedAddresses: BaseAddress[];
  const { isSameBillingFieldAsShipping } = addressesFlags;

  if (data.addresses) {
    if (isSameBillingFieldAsShipping) {
      validatedAddresses = data.addresses.filter(
        (el: Address) => el.city !== ''
      );
    } else {
      validatedAddresses = data.addresses;
    }
  } else {
    validatedAddresses = [];
  }

  const flags = getAddressesFlags(addressesFlags);

  const formData: CustomerDraft = {
    ...data,
    ...flags,
    addresses: validatedAddresses,
  };

  return formData;
}

export default validateAddresses;
