const errorResponse = require('../../helpers/apiError');
const flattenDeep = require('../../utils/flattenArray');
/**
 * @param {ServiceData} data
 * @summary flatten the array
 */
function service(data) {
  if(!Array.isArray(data)) {
    throw new Error('Invalid data structure');
  }
  const flattenedArray = flattenDeep(data, Infinity);
  return flattenedArray.join(',');
}

module.exports = service;
