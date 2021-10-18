function flattenDeep(arr, d = 1) {
  let result;
  if(d > 0) {
    result =  arr.reduce((acc, value) => acc.concat(Array.isArray(value) ? flattenDeep(value, d - 1) : value), []);
  } else {
    result = arr.slice()
  }

  return result;
}

module.exports = flattenDeep;
