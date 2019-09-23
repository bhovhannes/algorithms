/**
 * Merges 2 sorted arrays (in ASC order), removing duplicates
 * @param {number[]} vec1
 * @param {number[]} vec2
 */
function mergeUnique(vec1, vec2) {
  const mergeResult = [];

  let i = 0,
    j = 0,
    k = -1,
    a,
    b;

  while (i < vec1.length || j < vec2.length) {
    const a = i < vec1.length ? vec1[i] : undefined;
    const b = j < vec2.length ? vec2[j] : undefined;

    if (a <= b || b === undefined) {
      if (mergeResult.length === 0 || mergeResult[k] !== a) {
        mergeResult[++k] = a;
      }
      ++i;
    }
    if (a > b || a === undefined) {
      if (mergeResult.length === 0 || mergeResult[k] !== b) {
        mergeResult[++k] = b;
      }
      ++j;
    }
  }

  return mergeResult;
}

module.exports = {
  mergeUnique
};
