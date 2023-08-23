import { Customer } from '@commercetools/platform-sdk';
import { RegisteredUserData } from 'types';

const getRegisteredUserData = ({
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
}: Customer): RegisteredUserData => ({
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
});

export default getRegisteredUserData;
