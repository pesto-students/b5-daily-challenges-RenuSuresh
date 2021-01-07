// your implementation
function map(obj, callback) {
  const result = {};
  if (typeof obj == "object" && obj.constructor == Object) {
    for (const [key, value] of Object.entries(obj)) {
      let [modifiedKey, modifiedValue] = callback([key, value], obj);
      result[modifiedKey] = modifiedValue;
    }
    return result;
  } else {
    throw new Error(`expected: Object, passed: ${obj}`);
  }
}

function filter(obj, callback) {
  const result = {};
  if (typeof obj === "object" && obj.constructor === Object) {
    for (const [key, value] of Object.entries(obj)) {
      if (callback([key, value], obj)) {
        result[key] = value;
      }
    }
    return result;
  } else {
    throw `expected: Object, passed: ${typeof obj}`;
  }
}

function some(obj, callback) {
  if (typeof obj === "object" && obj.constructor === Object) {
    for (const [key, value] of Object.entries(obj)) {
      if (callback(key, value, obj)) {
        return true;
      }
    }
    return false;
  } else {
    throw `expected: Object, passed: ${typeof obj}`;
  }
}

function all(obj, callback) {
  let flag = false;
  for (const [key, value] of Object.entries(obj)) {
    if (callback(key, value, obj)) {
      flag = true;
    } else {
      return false;
    }
  }
  return flag;
}

function invert(obj) {
  const result = {};
  for (const [key, value] of Object.entries(obj)) {
    if (typeof value === "function") {
      result[key] = value;
    } else {
      result[value] = key;
    }
  }
  return result;
}

function merge(obj1, obj2) {
  const result = obj1;
  for (const [key, value] of Object.entries(obj2)) {
    result[key] = value;
  }
  return result;
}
let obj = {
  a: 1,
  b: 2,
};
// console.log(map(obj, ([key, value]) => [key.toUpperCase()]));
export { map, filter, invert, merge, all, some };
