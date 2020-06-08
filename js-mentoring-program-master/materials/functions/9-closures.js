/**
 * A closure is the combination of a function bundled together (enclosed) 
 * with references to its surrounding state (the lexical environment).
 */

/**
 * Counter example
 */
function makeCounter() {
  let count = 0;
  return function() {
    return ++count;
  };
}

const counter = makeCounter();
console.log(counter());


/**
 * Pulse calculation example
 */

function calculatePulse(pulse) {
  return function(age) {
    return (pulse - age) * 0.7;
  };
}

const calcPulse220 = calculatePulse(220);
console.log(calcPulse220(25));

const calcPulse200 = calculatePulse(200);
console.log(calcPulse200(25));