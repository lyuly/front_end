export default function count(...args) {
  return args.reduce((x, y) => x + y, 0);
};