const { longestBinaryGap } = require('./longestBinaryGap');

describe('longestBinaryGap', () => {
  it('should return 2 for N=9', () => {
    expect(longestBinaryGap(9)).toBe(2);
  });

  it('should return 4 for N=529', () => {
    expect(longestBinaryGap(529)).toBe(4);
  });

  it('should return 5 for N=1041', () => {
    expect(longestBinaryGap(1041)).toBe(5);
  });

  it('should return 0 for N=32', () => {
    expect(longestBinaryGap(32)).toBe(0);
  });

  it('should return 1 for N=20', () => {
    expect(longestBinaryGap(20)).toBe(1);
  });
});
