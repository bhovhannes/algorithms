const { mergeSort } = require('./mergeSort');

describe('mergeSort', () => {
  it(`mergeSort( [1,806,56,1,78,4,4,80,79,79,100] )  =>  [1,4,56,78,79,80,100,806]`, () => {
    expect(mergeSort([1, 806, 56, 1, 78, 4, 4, 80, 79, 79, 100])).toEqual([
      1,
      1,
      4,
      4,
      56,
      78,
      79,
      79,
      80,
      100,
      806
    ]);
  });
});
