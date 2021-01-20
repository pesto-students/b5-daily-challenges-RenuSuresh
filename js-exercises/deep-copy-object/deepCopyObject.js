const deepCopyObject = (
  objToCopy,
  defaultDescriptors = { writable: true, enumerable: true, configurable: true }
) => {
  const result = {};
  if (
    typeof objToCopy != "object" ||
    objToCopy === null ||
    objToCopy === undefined
  ) {
    return objToCopy;
  }

  Object.entries(objToCopy).forEach(([key, value]) => {
    Object.defineProperty(result, key, {
      value: { key: null },
      writable: defaultDescriptors.writable,
      enumerable: defaultDescriptors.enumerable,
      configurable: defaultDescriptors.configurable,
    });
  });
  return result;
};

export { deepCopyObject };
