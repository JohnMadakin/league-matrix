const echoService = require('../../../services/matrices/echo');

describe('Echo Service - Unit Test', () => {
  it('Should return the inverted string of a multidimensional array', () => {
    const arr = [
      [1, 2, 3],
      [4, 5, 6],
      [7, 8, 9]
    ];
    const response = echoService(arr);
    const expectedResult = "1,2,3\n4,5,6\n7,8,9";

    expect(response).toEqual(expectedResult);
    expect(typeof response).toEqual('string');
  });
});
