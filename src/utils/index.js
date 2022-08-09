export const forIn = (obj, handler) => {
  for (const item in obj) {
    handler(item, obj[item]);
  }
};

export const forOf = (obj, handler) => {
  for (const item of obj) {
    handler(item);
  }
};

export const isFunction = (val) => {
  return typeof val === "function";
};

export const isArray = (val) => {
  return Array.isArray(val);
};

export const isString = (val) => {
  return typeof val === "string";
};
