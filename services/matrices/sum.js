const errorResponse = require('../../helpers/apiError');
const flattenDeep = require('../../utils/flattenArray');
/**
 * @param {ServiceData} data
 * @summary sums the array
 */
function service(data) {
  if(!Array.isArray(data)) {
    throw new Error('Invalid data structure');
  }
  const flattenArray = flattenDeep(data);
  return flattenArray.reduce((acc, value) => acc + value*1, 0);
}
module.exports = service;
