const { minReverseGroups } = require('./minReverseGroups');

describe('minReverseGroups', () => {
  it(`minReverseGroups( [1, 4, 3, 2, 9, 8, 7, 12, 13] ) => [ [1], [4,3,2], [9,8,7], [12], [13] ]`, () => {
    expect(minReverseGroups([1, 4, 3, 2, 9, 8, 7, 12, 13])).toEqual([
      [1],
      [4, 3, 2],
      [9, 8, 7],
      [12],
      [13]
    ]);
  });

  it(`minReverseGroups( [4, 3, 1] ) => [ [4, 3, 1] ]`, () => {
    expect(minReverseGroups([4, 3, 1])).toEqual([[4, 3, 1]]);
  });

  it(`minReverseGroups( [1, 9, 2, 10, 5] ) => []`, () => {
    expect(minReverseGroups([1, 9, 2, 10, 5])).toEqual([]);
  });

  it(`minReverseGroups( [9, 8, 5, 7, 13] ) => []`, () => {
    expect(minReverseGroups([9, 8, 5, 7, 13])).toEqual([]);
  });

  it(`minReverseGroups( [] ) => []`, () => {
    expect(minReverseGroups([])).toEqual([]);
  });

  it(`minReverseGroups( [7] ) => [[7]]`, () => {
    expect(minReverseGroups([7])).toEqual([[7]]);
  });

  it(`minReverseGroups( [1, 2, 3] ) => [[1],[2],[3]]`, () => {
    expect(minReverseGroups([1, 2, 3])).toEqual([[1], [2], [3]]);
  });

  it(`minReverseGroups( [3,2,1] ) => [[3,2,1]]`, () => {
    expect(minReverseGroups([3, 2, 1])).toEqual([[3, 2, 1]]);
  });
});
