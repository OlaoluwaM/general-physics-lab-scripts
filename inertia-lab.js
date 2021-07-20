const g = 9.8;
const r = 0.13;
const h = 1.35;

function aTangential(t, h) {
  return (2 * h) / Math.pow(t, 2);
}

function tension(m, a) {
  return m * g - m * a;
}

function momentOfInertia(T1, T2, a1, a2) {
  const leftSide = Math.pow(r, 2) * (T1 - T2);
  const rightSide = a1 - a2;
  return leftSide / rightSide;
}

function torqueFriction(T, I, a) {
  const left = T * r;
  const right = I * (a / r);
  return left - right;
}

// 0: mass, 1: time
const rawData = [
  [0.2, 2.52],
  [0.25, 2.01],
  [0.3, 1.83],
  [0.35, 1.6],
];

const calcDataSet1 = rawData.map(([m, t], i) => {
  const a = aTangential(t, h);
  return { a: parseFloat(a.toPrecision(4)), T: parseFloat(tension(m, a).toPrecision(4)) };
});

const calcDataSet2 = [];

for (let i = 0, j = 1; i < calcDataSet1.length - 1; j++) {
  const { a, T } = calcDataSet1[i];
  const { a: a2, T: T2 } = calcDataSet1[j];

  const I = momentOfInertia(T, T2, a, a2);

  calcDataSet2.push({
    I: parseFloat(I.toPrecision(4)),
    torqueFriction: parseFloat(torqueFriction(T, I, a).toPrecision(4)),
  });

  if (j >= calcDataSet1.length - 1) {
    i++;
    j = i;
  }
}

const { VALUE_TO_SHOW: valueToShow } = process.env;
console.table(calcDataSet1.concat(calcDataSet2), valueToShow ? [valueToShow] : void 0);
