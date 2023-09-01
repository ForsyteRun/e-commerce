import { capitalize } from 'helpers/capitalize';
import { IAttributes } from 'types';

const formatPrintAttributes = (attr: IAttributes) => {
  return `
  ${capitalize(attr['Print Type'].toString())}
  ${attr['Print Technology']}
  ${attr.Type},
  ${attr['Print Speed']} ppm,
  ${attr['Print Resolution']}.
`;
};

export default formatPrintAttributes;
