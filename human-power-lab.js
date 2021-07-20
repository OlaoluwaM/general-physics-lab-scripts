const g = 9.8;

function work(m, g, h) {
  return m * g * h;
}

function power(w, t) {
  return w / t;
}

function horsePower(p) {
  return p * (1 / 746);
}

function getCalculatedData({ 0: m, 1: h, 2: t }) {
  const w = work(m, g, h);
  const p = power(w, t);
  return { w, p, hp: horsePower(p) };
}

const data1 = [
  [2, 1, 18.45],
  [2, 1, 5.3],
  [5, 1, 6.1],
  [5, 0.8, 4.59],
];

const resultsOfExperiment1 = data1.map(getCalculatedData);

console.log();

const data2 = [
  [9.07, 0.16, 6.63],
  [9.07, 0.16, 5.98],
  [9.07, 0.06, 6.01],
  [9.07, 0.06, 6.23],
  [9.07, 0.06, 6.32],
];

const resultsOfExperiment2 = data2.map(getCalculatedData);

console.log({ resultsOfExperiment1, resultsOfExperiment2 });
