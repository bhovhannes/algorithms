const { highlight } = require('./highlight');

describe('highlight', () => {
  it(`highlight( "abcdef", ["bc", "d"] )  =>  "a<b>bcd</b>ed"`, () => {
    expect(highlight('abcdef', ['bc', 'd'])).toBe('a<b>bcd</b>ef');
  });

  it(`highlight( "abbabbabba", ["abba"] )  =>  "<b>abbabbabba</b>"`, () => {
    expect(highlight('abbabbabba', ['abba'])).toBe('<b>abbabbabba</b>');
  });

  it(`highlight("abcdefbc", ["bc","d"])  =>  "a<b>bcd</b>ef<b>bc</b>"`, () => {
    expect(highlight('abcdefbc', ['bc', 'd'])).toBe('a<b>bcd</b>ef<b>bc</b>');
  });

  it(`highlight("abcdef", ["abcd","cdef"])  =>  "<b>abcdef</b>"`, () => {
    expect(highlight('abcdef', ['abcd', 'cdef'])).toBe('<b>abcdef</b>');
  });

  it(`highlight("abcdef", ["z"])  =>  "abcdef"`, () => {
    expect(highlight('abcdef', ['z'])).toBe('abcdef');
  });

  it(`highlight("abcdef", ["bc"])  =>  "a<b>bc</b>def"`, () => {
    expect(highlight('abcdef', ['bc'])).toBe('a<b>bc</b>def');
  });

  it(`highlight("abcdef", ["bc","e"])  =>  "a<b>bc</b>d<b>e</b>f"`, () => {
    expect(highlight('abcdef', ['bc', 'e'])).toBe('a<b>bc</b>d<b>e</b>f');
  });

  it(`highlight("abcdef", [""])  =>  "abcdef"`, () => {
    expect(highlight('abcdef', [''])).toBe('abcdef');
  });

  it(`highlight("abcdefgh", ["d","c","cd","bcde"])  =>  "a<b>bcde</b>fgh"`, () => {
    expect(highlight('abcdefgh', ['d', 'c', 'cd', 'bcde'])).toBe('a<b>bcde</b>fgh');
  });
});
