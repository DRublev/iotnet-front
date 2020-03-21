export const partionByKeys = (keys: Array<string>, obj: Object): [Object, Object] => {
  let passed = {};
  let failed = {};

  Object.keys(keys).forEach((key) =>
      keys.includes(key)
          ? (passed[ key ] = obj[ key ])
          : (failed[ key ] = obj[ key ])
  );

  return [passed, failed];
};
