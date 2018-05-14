class Point {
  constructor(x, y) {
    this.x = x;
    this.y = y;
  }
}

points = [
  {
    name: "Arctic fox",
    x: 3.385,
    y: 44.5
  },
  {
    name: "Owl monkey",
    x: 0.48,
    y: 15.5
  },
  {
    name: "Mountain beaver",
    x: 1.35,
    y: 8.1
  },
  {
    name: "Cow",
    x: 465,
    y: 423
  },
  {
    name: "Grey wolf",
    x: 36.33,
    y: 119.5
  },
  {
    name: "Goat",
    x: 27.66,
    y: 115
  },
  {
    name: "Roe deer",
    x: 14.83,
    y: 98.2
  },
  {
    name: "Guinea pig",
    x: 1.04,
    y: 5.5
  },
  {
    name: "Verbet",
    x: 4.19,
    y: 58
  },
  {
    name: "Chinchilla",
    x: 0.425,
    y: 6.4
  },
  {
    name: "Ground squirrel",
    x: 0.101,
    y: 4
  },
  {
    name: "Arctic ground squirrel",
    x: 0.92,
    y: 5.7
  },
  {
    name: "African giant pouched rat",
    x: 1,
    y: 6.6
  },
  {
    name: "Lesser short-tailed shrew",
    x: 0.005,
    y: 0.14
  },
  {
    name: "Star-nosed mole",
    x: 0.06,
    y: 1
  },
  {
    name: "Nine-banded armadillo",
    x: 3.5,
    y: 10.8
  },
  {
    name: "Tree hyrax",
    x: 2,
    y: 12.3
  },
  {
    name: "N.A. opossum",
    x: 1.7,
    y: 6.3
  },
  {
    name: "Big brown bat",
    x: 0.023,
    y: 0.3
  },
  {
    name: "Donkey",
    x: 187.1,
    y: 419
  },
  {
    name: "Horse",
    x: 521,
    y: 655
  },
  {
    name: "European hedgehog",
    x: 0.785,
    y: 3.5
  },
  {
    name: "Patas monkey",
    x: 10,
    y: 115
  },
  {
    name: "Cat",
    x: 3.3,
    y: 25.6
  },
  {
    name: "Galago",
    x: 0.2,
    y: 5
  },
  {
    name: "Genet",
    x: 1.41,
    y: 17.5
  },
  {
    name: "Giraffe",
    x: 529,
    y: 680
  },
  {
    name: "Gorilla",
    x: 207,
    y: 406
  },
  {
    name: "Grey seal",
    x: 85,
    y: 325
  },
  {
    name: "Rock hyrax-a",
    x: 0.75,
    y: 12.3
  },
  {
    name: "Human",
    x: 62,
    y: 1320
  },
  {
    name: "Water opossum",
    x: 3.5,
    y: 3.9
  },
  {
    name: "Rhesus monkey",
    x: 6.8,
    y: 179
  },
  {
    name: "Kangaroo",
    x: 35,
    y: 56
  },
  {
    name: "Yellow-bellied marmot",
    x: 4.05,
    y: 17
  },
  {
    name: "Golden hamster",
    x: 0.12,
    y: 1
  },
  {
    name: "Mouse",
    x: 0.023,
    y: 0.4
  },
  {
    name: "Little brown bat",
    x: 0.01,
    y: 0.25
  },
  {
    name: "Slow loris",
    x: 1.4,
    y: 12.5
  },
  {
    name: "Okapi",
    x: 250,
    y: 490
  },
  {
    name: "Rabbit",
    x: 2.5,
    y: 12.1
  },
  {
    name: "Sheep",
    x: 55.5,
    y: 175
  },
  {
    name: "Jaguar",
    x: 100,
    y: 157
  },
  {
    name: "Chimpanzee",
    x: 52.16,
    y: 440
  },
  {
    name: "Baboon",
    x: 10.55,
    y: 179.5
  },
  {
    name: "Desert hedgehog",
    x: 0.55,
    y: 2.4
  },
  {
    name: "Giant armadillo",
    x: 60,
    y: 81
  },
  {
    name: "Rock hyrax-b",
    x: 3.6,
    y: 21
  },
  {
    name: "Raccoon",
    x: 4.288,
    y: 39.2
  },
  {
    name: "Rat",
    x: 0.28,
    y: 1.9
  },
  {
    name: "E. American mole",
    x: 0.075,
    y: 1.2
  },
  {
    name: "Mole rat",
    x: 0.122,
    y: 3
  },
  {
    name: "Musk shrew",
    x: 0.048,
    y: 0.33
  },
  {
    name: "Pig",
    x: 192,
    y: 180
  },
  {
    name: "Echidna",
    x: 3,
    y: 25
  },
  {
    name: "Brazilian tapir",
    x: 160,
    y: 169
  },
  {
    name: "Tenrec",
    x: 0.9,
    y: 2.6
  },
  {
    name: "Phalanger",
    x: 1.62,
    y: 11.4
  },
  {
    name: "Tree shrew",
    x: 0.104,
    y: 2.5
  },
  {
    name: "Red fox",
    x: 4.235,
    y: 50.4
  }
];

let m = 0;
let b = 0;

function linReg() {
  let x_sum = 0;
  let y_sum = 0;

  for (let i = 0; i < points.length; i++) {
    x_sum += points[i].x;
    y_sum += points[i].y;
  }

  let x_avg = x_sum / points.length;
  let y_avg = y_sum / points.length;

  let top = 0; //top half of the equation
  let bottom = 0; //bottom half of the equation

  for (let i = 0; i < points.length; i++) {
    top += (points[i].x - x_avg) * (points[i].y - y_avg);
    bottom += Math.pow(points[i].x - x_avg, 2);
  }

  m = top / bottom;
  b = y_avg - m * x_avg;
}

function getPred(x) {
  return m * x + b;
}

function setup() {
  noCanvas();
  linReg();
  print(getPred(207));
}
