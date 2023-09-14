const formatAttributeName = (attribute: string) => {
  return attribute
    .split('_')
    .map((word: string) => word.charAt(0).toUpperCase() + word.slice(1))
    .join(' ');
};

export default formatAttributeName;
