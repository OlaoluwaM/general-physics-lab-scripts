const g = 9.8;
const mStopper = 0.0125;

function tMass(mMass) {
  return mMass * g;
}

function tStopper(v, r) {
  return mStopper * (Math.pow(v, 2) / r);
}

function speed(r, t) {
  const numerator = 5 * (2 * Math.PI * r);
  const denominator = t;
  return numerator / denominator;
}

// For each array mStopper is a constant, At index 1: mMass, 2: radius, 3: time
const rawData = [
  [0.0754, 0.575, 2.95],
  [0.0854, 0.59, 2.63],
  [0.1054, 0.54, 2.43],
  [0.1054, 0.42, 2.16],
];

console.log(
  rawData.map(({ 0: mMass, 1: r, 2: t }) => {
    const v = speed(r, t);

    return [{ tMass: tMass(mMass), v, tStopper: tStopper(v, r) }];
  })
);
