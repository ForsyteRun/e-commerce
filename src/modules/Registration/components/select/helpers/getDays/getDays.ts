const getDays = <T extends number>(startDays: T, endDays: T): T[] => {
  return Array.from({ length: endDays - startDays + 1 }).map(
    (_, index) => startDays + index
  ) as T[];
};

export default getDays;
