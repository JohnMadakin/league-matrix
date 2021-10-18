function stringify2DArray(arr = []) {
  if(!Array.isArray(arr)) {
    throw new Error('Item should be an array')
  }
  return arr.map(element => {
    return element.join(",");
  }).join("\n");
}

module.exports = stringify2DArray;
