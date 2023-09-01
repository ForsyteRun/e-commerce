const formatSecondaryValue = (
  key: string,
  value: string | number | boolean
): string => {
  if (key.endsWith('Speed')) {
    return `${value} ppm`;
  }
  if (key === 'Fax') {
    return value ? 'yes' : 'no';
  }
  return String(value);
};

export default formatSecondaryValue;
