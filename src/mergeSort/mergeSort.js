/**
 * Merges 2 sorted (in ASC order) arrays
 * @param {number[]} vec1
 * @param {number[]} vec2
 */
function merge(vec1, vec2) {
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
      mergeResult[++k] = a;
      ++i;
    }
    if (a > b || a === undefined) {
      mergeResult[++k] = b;
      ++j;
    }
  }

  return mergeResult;
}

/**
 * Sorts an array in ascending order
 * @param {number[]} vec
 */
function mergeSort(vec) {
  if (vec.length === 1) {
    return [vec[0]];
  } else if (vec.length === 2) {
    return vec[0] < vec[1] ? vec : [vec[1], vec[0]];
  }
  const midpoint = vec.length >> 1;
  const lft = vec.slice(0, midpoint);
  const rgt = vec.slice(midpoint, vec.length);
  return merge(mergeSort(lft), mergeSort(rgt));
}

module.exports = {
  mergeSort
};
