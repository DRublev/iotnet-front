export const partitionByKeys = (keys, obj) => {
  let pass = {};
  let fail = {};

  for (const key of Object.keys(obj)) {
    if (keys.includes(key)) {
      pass[key] = obj[key];
    } else {
      fail[key] = obj[key];
    }
  }

  return [pass, fail];
};
