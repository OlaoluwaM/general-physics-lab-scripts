const g = 9.8;
const L = 0.3;

function toRadians(angle) {
  return angle * (Math.PI / 180);
}

function height(angle) {
  return L - L * Math.cos(toRadians(angle));
}

function finalVelocity(h) {
  return Math.sqrt(19.6 * h);
}

function initialVelocity(mb, mp, vf) {
  const part1 = (mb + mp) * vf;
  return part1 / mb;
}

// 0: mb, 1: mp, 2: angle

const rawData = [
  [9.6, 141.6, 22],
  [66, 141.6, 62.5],

  [9.6, 192.3, 10.5],
  [66, 192.3, 47.5],

  [9.6, 242.9, 8],
  [66, 242.9, 37],
];

const calculatedData = rawData.map(([mb, mp, angle]) => {
  const h = height(angle).toPrecision(3);
  const vf = finalVelocity(h).toPrecision(3);
  return { h, vf, vi: initialVelocity(mb, mp, vf).toPrecision(3) };
});

console.log(calculatedData);
