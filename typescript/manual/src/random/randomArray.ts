export const randomArray = <T>(n: number): Array<T> => {
  const arr: Array<T> = Array.from({ length: n }, (_, i) =>
    Math.floor(Math.random() * (i + 1))
  ) as Array<T>;
  return arr;
};
