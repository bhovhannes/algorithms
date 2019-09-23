function countBits(n) {
  let bits = 0;
  while (n > 0) {
    n = n >> 1;
    ++bits;
  }
  return bits;
}

function divide(a, b) {
  let q = 0;
  let shift;
  let amountToSubtract;

  function setShift(n) {
    shift = n;
    amountToSubtract = b << shift;
  }

  // Initially, calculate and set maximum possible value for shift.
  // That way we are sure that there will be no overflows.
  setShift(countBits(a) - countBits(b));

  while (true) {
    a -= amountToSubtract;
    if (a >= 0) {
      q += 1 << shift;
    } else {
      if (shift > 0) {
        a += amountToSubtract;
        setShift(shift - 1);
      } else break;
    }
  }

  return q;
}

// >  node division.js 11 5
// >  2
const a = parseInt(process.argv[process.argv.length - 2]);
const b = parseInt(process.argv[process.argv.length - 1]);

console.time('start');
console.log(divide(a, b));
console.log(console.timeEnd('start'));

process.exit(0);

// test for correctness
outer: for (let i = 1; i <= 100; ++i) {
  for (let j = 1; j <= i; ++j) {
    console.log(`Dividing ${i} on ${j} ...`);
    let q1 = Math.floor(i / j);
    let q2 = divide(i, j);
    if (q1 !== q2) {
      console.error(`(${q1}) i/j !== divide(i,j) (${q2})`);
      break outer;
    }
  }
}
