import { MyCustomerUpdateAction } from '@commercetools/platform-sdk';

const createAction = (data: string, value: string): MyCustomerUpdateAction => {
  switch (data) {
    case 'firstName':
      return { action: 'setFirstName', firstName: value };
    case 'lastName':
      return { action: 'setLastName', lastName: value };
    case 'dateOfBirth':
      return { action: 'setDateOfBirth', dateOfBirth: value };
    case 'email':
      return { action: 'changeEmail', email: value };
    default: {
      throw new Error(`Unknown data type: ${data}`);
    }
  }
};

export default createAction;
