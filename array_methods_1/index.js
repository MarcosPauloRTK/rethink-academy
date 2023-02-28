// Questão 1
const cloneArray = (array) => array.reduce((acc, curr) => acc.push(curr), []);

// Questão 2
const sliceArray = (array, number = 1) => array.slice(0, number);

// Questão 3
const formatNumberArray = (array) =>
  array.reduce(
    (acc, curr, index) =>
      (index + 1) % 3 ? acc.concat(curr) : acc.concat(`${curr}.`),
    ""
  );

// Questão 4
const filterStringArray = (array) =>
  array
    .filter((el) => el.length <= 5)
    .reduce((acc, curr) => [...acc, curr], []);

// Questão 5
const maxMinDiffAgeCalculator = (array) =>
  array
    .map((el) => el.age)
    .reduce(
      (acc, curr) =>
        curr < acc[0]
          ? [curr, acc[1], acc[1] - curr]
          : curr > acc[1]
          ? [acc[0], curr, curr - acc[0]]
          : acc,
      [100, 0, 100]
    );
