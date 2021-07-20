// For Physics Lab 9/24/2020

function percentDiff(v1, v2) {
  const diff = v1 - v2;
  const avg = (v1 + v2) / 2;
  return (diff / avg) * 100;
}

function Gaccelerate(t, xf = 2.02, xi = 0.62) {
  const calc1 = 2 * (xf - xi);
  const calc2 = Math.pow(t, 2);
  return calc1 / calc2;
}

function Naccelerate(mc, mh, g = 9.8) {
  const calc1 = mh / (mc + mh);
  return calc1 * g;
}

// TODO Add values from raw data
const gA = [2.75, 2.77, 3.41, 3.47, 2.88].map(n => parseFloat(Gaccelerate(n).toFixed(3)));
const nA = [
  [600, 30],
  [700, 30],
  [800, 30],
  [900, 30],
  [900, 40],
].map(({ 0: mC, 1: mH }) => parseFloat(Naccelerate(mC, mH).toFixed(3)));

const pD = gA.map((num, i) => parseFloat(percentDiff(num, nA[i]).toFixed(5)));
console.log({ gA, nA, pD });
