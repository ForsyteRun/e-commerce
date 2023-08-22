import { Customer } from '@commercetools/platform-sdk';
import { IRegisteredUserData } from 'types';

const getRegisteredUserData = (data: Customer): IRegisteredUserData => {
  const {
    id,
    email,
    firstName,
    lastName,
    dateOfBirth,
    addresses,
    defaultBillingAddressId,
    defaultShippingAddressId,
    shippingAddressIds,
    billingAddressIds,
    authenticationMode,
  } = data;

  return {
    id,
    email,
    firstName,
    lastName,
    dateOfBirth,
    addresses,
    defaultBillingAddressId,
    defaultShippingAddressId,
    shippingAddressIds,
    billingAddressIds,
    authenticationMode,
  };
};

export default getRegisteredUserData;
