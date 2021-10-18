const invertService = require('../../../services/matrices/invert');

describe('Invert Service - Unit Test', () => {
  it('Should return the inverted string of a multidimensional array', () => {
    const arr = [
      [1, 2, 3],
      [4, 5, 6],
      [7, 8, 9]
    ];
    const response = invertService(arr);
    const expectedResult = "1,4,7\n2,5,8\n3,6,9";

    expect(response).toEqual(expectedResult);
    expect(typeof response).toEqual('string');
  });
});
