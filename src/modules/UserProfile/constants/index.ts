import { PathNames } from 'types';

export const linkAsideData = [
  { title: 'My account', path: PathNames.profile, end: true },
  { title: 'Personal information', path: PathNames.profileInfo },
  { title: 'Address', path: PathNames.profileAddress },
  { title: 'Change password', path: PathNames.profilePassword },
];

export const titleFields: string[] = [
  'firstName',
  'lastName',
  'dateOfBirth',
  'email',
];
