const activeMassOfSpring = 0.0092;
const springConstant = 10;

function calculatedPeriod(m) {
  const firstBit = 2 * Math.PI;
  return firstBit * Math.pow(m / springConstant, 0.5);
}

function derivedPeriod(t) {
  return t / 5;
}

function effectiveMass(m) {
  return m + activeMassOfSpring;
}

// 0: mass attached at the end of spring, 1: t for 5 oscillations
const rawData = [
  [0.1, 3.39],
  [0.15, 4.0],
  [0.2, 4.58],
  [0.25, 5.32],
  [0.3, 5.51],
];

const calculatedData = rawData.map(([m, t]) => {
  return {
    calculatedPeriod: calculatedPeriod(m).toPrecision(4),
    derivedPeriod: derivedPeriod(t).toPrecision(4),
    effectiveMass: effectiveMass(m).toPrecision(4),
  };
});

const { VALUE_TO_SHOW: valueToShow } = process.env;
console.table(calculatedData, valueToShow ? [valueToShow] : void 0);
