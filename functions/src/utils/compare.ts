const ignoreFields = ["createdAt", "updatedAt", "deletedAt"];

export const isEqual = (
  obj1: { [key: string]: any },
  obj2: { [key: string]: any }
): boolean => {
  return Object.keys(obj1).every((key) => {
    if (ignoreFields.includes(key)) {
      return true;
    }
    return obj1[key] === obj2[key];
  });
};
