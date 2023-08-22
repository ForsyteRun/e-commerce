import { Customer } from '@commercetools/platform-sdk';
import { RegisteredUserData } from 'types';

const getRegisteredUserData = (data: Customer): RegisteredUserData => {
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
