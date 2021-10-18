const sumService = require('../../../services/matrices/sum');


describe('Sum Service - Unit Test', () => {
  it('Should return the sum of a multidimensional array', () => {
    const arr = [
      [1, 2, 3],
      [4, 5, 6],
      [7, 8, 9]
    ];
    const response = sumService(arr);

    expect(response).toEqual(45);
    expect(typeof response).toEqual('number');
  });

  it('Should return the zero if an empty array is passed', () => {
    const arr = [];
    const response = sumService(arr);

    expect(response).toEqual(0);
    expect(typeof response).toEqual('number');
  });

  it('Should return the zero if an empty multidimensional array is passed', () => {
    const arr = [[]];
    const response = sumService(arr);

    expect(response).toEqual(0);
    expect(typeof response).toEqual('number');
  });
});
