/**
 * Input: a string S and an array of string terms T
 *
 * Output: a string S where all occurences of terms T are surrounded by <b> tags,
 *         so they form a valid HTML, without nested <b> tags
 *
 * Examples:
 *  highlight( "abcdef", ["bc", "d"] )  =>  "a<b>bcd</b>ed"
 *  highlight( "abbabbabba", ["abba"] )  =>  "<b>abbabbabba</b>"
 */

function highlight(s, terms) {
  const matches = findMatches(s, terms);

  const indices = computeUnions(matches);
  let result = '';
  let index = 0;
  for (let i = 0; i < indices.length; ++i) {
    const [start, end] = indices[i];
    result += s.substr(index, start - index);
    result += '<b>';
    result += s.substr(start, end - start + 1);
    result += '</b>';
    index = end + 1;
  }
  result += s.substr(index);
  return result;
}

function computeUnions(intervals) {
  const startPoints = intervals.map(interval => interval[0]);
  const endPoints = intervals.map(interval => interval[1]);

  startPoints.sort();
  endPoints.sort();

  const result = [];

  const len = startPoints.length;

  for (let i = 0; i < len; ) {
    let currentStart = startPoints[i];

    let k = i + 1;
    while (k < len) {
      const start = startPoints[k];
      const end = endPoints[k - 1];
      if (start - end > 1) {
        result.push([currentStart, end]);
        break;
      }
      ++k;
    }
    if (k >= len) {
      result.push([currentStart, endPoints[len - 1]]);
    }
    i = k;
  }

  return result;
}

function findMatches(s, terms) {
  const matches = [];
  terms.forEach(term => {
    findMatchesForTerm(s, term).forEach(match => matches.push(match));
  });
  return matches;
}

function findMatchesForTerm(s, term) {
  const matches = [];
  const len = term.length;
  if (len === 0) {
    return matches;
  }
  let start;
  while (true) {
    start = s.indexOf(term, start);
    if (start === -1) {
      break;
    }
    const end = start + len - 1;
    matches.push([start, end]);
    ++start;
  }
  return matches;
}

module.exports = {
  findMatches,
  findMatchesForTerm,
  computeUnions,
  highlight
};
