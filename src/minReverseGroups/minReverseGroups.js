/**
 * Input: An array of positive integers
 *
 * Output: Minimal set of groups such that reversing all groups will sort an input array
 *
 * Examples:
 *  minReverseGroups( [1, 4, 3, 2, 9, 8, 7, 12, 13] )  =>  [ [1], [4,3,2], [9,8,7], [12], [13] ]
 *  minReverseGroups( [1, 9, 2, 10, 5] )  =>  []
 */

function minReverseGroups(numbers) {
  if (numbers.length < 1) {
    return [];
  }

  let prevGroupMax = -1;
  let currGroupMax = -1;
  let currGroupMin = undefined;
  let i = 0;

  const groups = [[]];

  while (i < numbers.length) {
    const value = numbers[i];

    // console.log(groups, `value=${value}, i=${i}, currGroupMin=${currGroupMin}, max=${max}`)
    if (value < prevGroupMax) {
      return [];
    }

    if (currGroupMin === undefined || value < currGroupMin) {
      currGroupMin = value;
      groups[groups.length - 1].push(value);
      if (value > currGroupMax) {
        currGroupMax = value;
      }
      ++i;
    } else {
      groups.push([]);
      prevGroupMax = currGroupMax;
      currGroupMax = -1;
      currGroupMin = undefined;
    }
  }
  return groups;
}

module.exports = {
  minReverseGroups
};
