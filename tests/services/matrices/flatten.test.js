const flattenService = require('../../../services/matrices/flatten');


describe('Flatten Service - Unit Test', () => {
  it('Should return the sum of a multidimensional array', () => {
    const arr = [
      [1, 2, 3],
      [4, 5, 6],
      [7, 8, 9]
    ];
    const response = flattenService(arr);

    expect(response).toEqual('1,2,3,4,5,6,7,8,9');
    expect(typeof response).toEqual('string');
  });

  it('Should return empty string if an empty array is passed', () => {
    const arr = [];
    const response = flattenService(arr);

    expect(response).toEqual('');
    expect(typeof response).toEqual('string');
  });

  it('Should return empty string if an empty multidimensional array is passed', () => {
    const arr = [[]];
    const response = flattenService(arr);

    expect(response).toEqual('');
    expect(typeof response).toEqual('string');
  });
});
