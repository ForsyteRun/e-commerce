import { CustomerDraft } from '@commercetools/platform-sdk';

export interface RegisterUserProps {
  registrationData: CustomerDraft;
  setOpen: React.Dispatch<React.SetStateAction<boolean>>;
  setAccess: React.Dispatch<React.SetStateAction<boolean>>;
}
