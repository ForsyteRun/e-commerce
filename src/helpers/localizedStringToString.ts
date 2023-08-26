import { LocalizedString } from '@commercetools/platform-sdk';

const localizedStringToString =
  (language: string) =>
  (obj: LocalizedString): string =>
    obj[language];

export default localizedStringToString;
