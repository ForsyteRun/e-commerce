export const capitalize = (string: string): string =>
  string[0].toUpperCase() + string.slice(1);

export const capitalizeAll = (string: string): string => {
  const splittedString = string.split('_');
  const transformedString = splittedString
    .map((word) => capitalize(word))
    .join(' ');

  return transformedString;
};
