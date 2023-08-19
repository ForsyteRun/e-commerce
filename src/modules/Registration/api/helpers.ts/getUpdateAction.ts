import {
  Address,
  CustomerSignInResult,
  CustomerUpdateAction,
} from '@commercetools/platform-sdk';
import { IDefaultAdress } from '../../components/registration/types';
import UpdateCustomerActions from '../types';

const getUpdateAction = (
  customer: CustomerSignInResult,
  setAdress: IDefaultAdress
): CustomerUpdateAction[] => {
  const customerAnswer: Address[] | undefined = customer.customer.addresses;

  if (setAdress.isSameBillingFieldAsShipping) {
    let setAction: CustomerUpdateAction[];
    if (setAdress.defaulShippingAdress) {
      setAction = [
        {
          action: UpdateCustomerActions.addShippingAddress,
          addressId: customerAnswer && customerAnswer[0].id,
        },
        {
          action: UpdateCustomerActions.addBillingAddress,
          addressId: customerAnswer && customerAnswer[0].id,
        },
        {
          action: UpdateCustomerActions.setDefaultShipping,
          addressId: customerAnswer && customerAnswer[0].id,
        },
      ];
    } else {
      setAction = [
        {
          action: UpdateCustomerActions.addShippingAddress,
          addressId: customerAnswer && customerAnswer[0].id,
        },
        {
          action: UpdateCustomerActions.addBillingAddress,
          addressId: customerAnswer && customerAnswer[0].id,
        },
      ];
    }
    return setAction;
  }
  if (setAdress.defaultBillingAdress && setAdress.defaulShippingAdress) {
    const setAction: CustomerUpdateAction[] = [
      {
        action: UpdateCustomerActions.addShippingAddress,
        addressId: customerAnswer && customerAnswer[0].id,
      },
      {
        action: UpdateCustomerActions.addBillingAddress,
        addressId: customerAnswer && customerAnswer[1].id,
      },
      {
        action: UpdateCustomerActions.setDefaultShipping,
        addressId: customerAnswer && customerAnswer[0].id,
      },
      {
        action: UpdateCustomerActions.setDefaultBilling,
        addressId: customerAnswer && customerAnswer[1].id,
      },
    ];
    return setAction;
  }
  if (setAdress.defaultBillingAdress) {
    const setAction: CustomerUpdateAction[] = [
      {
        action: UpdateCustomerActions.addShippingAddress,
        addressId: customerAnswer && customerAnswer[0].id,
      },
      {
        action: UpdateCustomerActions.addBillingAddress,
        addressId: customerAnswer && customerAnswer[1].id,
      },
      {
        action: UpdateCustomerActions.setDefaultBilling,
        addressId: customerAnswer && customerAnswer[1].id,
      },
    ];
    return setAction;
  }
  if (setAdress.defaulShippingAdress) {
    const setAction: CustomerUpdateAction[] = [
      {
        action: UpdateCustomerActions.addShippingAddress,
        addressId: customerAnswer && customerAnswer[0].id,
      },
      {
        action: UpdateCustomerActions.addBillingAddress,
        addressId: customerAnswer && customerAnswer[1].id,
      },
      {
        action: UpdateCustomerActions.setDefaultShipping,
        addressId: customerAnswer && customerAnswer[0].id,
      },
    ];
    return setAction;
  }
  const setAction: CustomerUpdateAction[] = [
    {
      action: UpdateCustomerActions.addShippingAddress,
      addressId: customerAnswer && customerAnswer[0].id,
    },
    {
      action: UpdateCustomerActions.addBillingAddress,
      addressId: customerAnswer && customerAnswer[1].id,
    },
  ];
  return setAction;
};

export default getUpdateAction;
