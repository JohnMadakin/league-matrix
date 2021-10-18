const errorResponse = require('../../helpers/apiError');
const stringify2DArray = require('../../utils/stringifyArray');
/**
 * @param {ServiceData} data
 * @summary inverts the array
 */
function service(data) {
  if(!Array.isArray(data)) {
    throw new Error('Invalid data structure');
  }
  const invertedArray = data[0].map((col, i) => data.map(rows => rows[i]));
  return stringify2DArray(invertedArray);

}
module.exports = service;
