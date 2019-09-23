/**
 * A binary gap within a positive integer N is any maximal sequence of consecutive zeros
 * that is surrounded by ones at both ends in the binary representation of N.
 *
 * For example, number 9 has binary representation 1001 and contains a binary gap of length 2.
 * The number 529 has binary representation 1000010001 and contains two binary gaps: one of
 * length 4 and one of length 3. The number 20 has binary representation 10100 and contains one
 * binary gap of length 1. The number 15 has binary representation 1111 and has no binary gaps.
 * The number 32 has binary representation 100000 and has no binary gaps.
 *
 * For example, given N = 1041 the function should return 5,
 * because N has binary representation 10000010001 and so its longest binary gap is of length 5.
 * Given N = 32 the function should return 0, because N has binary representation '100000' and thus no binary gaps.
 *
 * Write an efficient algorithm assuming N is an integer within the range [1..2,147,483,647].
 * @param {number} N
 */
function longestBinaryGap(N) {
  const COUNTING = 1;
  const SHOULD_START_COUNTING = 2;
  let maxGapLength = 0;
  let state;
  let currentGapLength = 0;
  while (N !== 0) {
    const rightmostBit = N & 0x01;
    if (rightmostBit === 1) {
      if (state === COUNTING) {
        if (currentGapLength > maxGapLength) {
          maxGapLength = currentGapLength;
        }
        currentGapLength = 0;
      }
      state = SHOULD_START_COUNTING;
    } else {
      if (state === COUNTING) {
        ++currentGapLength;
      } else {
        if (state === SHOULD_START_COUNTING) {
          state = COUNTING;
          ++currentGapLength;
        }
      }
    }
    N = N >> 1;
  }
  return maxGapLength;
}

module.exports = {
  longestBinaryGap
};
// console.log( longestBinaryGap(1041) === 5 )
