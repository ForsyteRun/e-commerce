const getYears = <T extends number>(startYear: T, endYear: T): T[] => {
  return Array.from({ length: endYear - startYear + 1 }).map(
    (_, index) => startYear + index
  ) as T[];
};

export default getYears;
