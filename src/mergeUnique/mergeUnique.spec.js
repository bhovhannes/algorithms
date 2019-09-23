const { mergeUnique } = require('./mergeUnique');

describe('mergeUnique', () => {
  it(`mergeUnique( [1,1,1,78,79,79,100], [4,80,80,806] )  =>  [1,4,78,79,80,100,806]`, () => {
    expect(mergeUnique([1, 1, 1, 78, 79, 79, 100], [4, 80, 80, 806])).toEqual([
      1,
      4,
      78,
      79,
      80,
      100,
      806
    ]);
  });
});
