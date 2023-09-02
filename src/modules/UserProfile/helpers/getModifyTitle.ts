const getModifyTitle = (data: string[]): string => {
  const words = data.join('');

  const transformedWords = words
    .split(' ')
    .map((word, index) =>
      index === 0 ? word : word.charAt(0).toUpperCase() + word.slice(1)
    );

  return transformedWords.join('');
};

export default getModifyTitle;
