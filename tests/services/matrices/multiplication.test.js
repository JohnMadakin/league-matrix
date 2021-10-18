const multiplyService = require('../../../services/matrices/multiply');


describe('Multiplication Service - Unit Test', () => {
  it('Should return the Multiplication of a multidimensional array', () => {
    const arr = [
      [1, 2, 3],
      [4, 5, 6],
      [7, 8, 9]
    ];
    const response = multiplyService(arr);

    expect(response).toEqual(362880);
    expect(typeof response).toEqual('number');
  });
  it('Should return the Multiplication of a 2x2 multidimensional array', () => {
    const arr = [
      [1, 2],
      [4, 5],
    ];
    const response = multiplyService(arr);

    expect(response).toEqual(40);
    expect(typeof response).toEqual('number');
  });

  it('Should return the zero if an empty array is passed', () => {
    const arr = [];
    const response = multiplyService(arr);

    expect(response).toEqual(0);
    expect(typeof response).toEqual('number');
  });

  it('Should return the zero if an empty multidimensional array is passed', () => {
    const arr = [[]];
    const response = multiplyService(arr);

    expect(response).toEqual(0);
    expect(typeof response).toEqual('number');
  });
});
