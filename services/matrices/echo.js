const errorResponse = require('../../helpers/apiError');
const stringify2DArray = require('../../utils/stringifyArray');
/**
 * @param {ServiceData} data
 * @summary echo the array
 */
function service(data) {
  if(!Array.isArray(data)) {
    throw new Error('Invalid data structure');
  }
  return stringify2DArray(data);

}
module.exports = service;
