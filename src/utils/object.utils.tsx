export const isEmptyObj = (obj) => {
  if (Array.isArray(obj)) return obj.length === 0;

  return (
    obj &&
    Object.keys(obj).length === 0 &&
    Object.getPrototypeOf(obj) === Object.prototype
  );
};
