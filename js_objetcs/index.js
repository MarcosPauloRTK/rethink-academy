let programming = {
  languages: ["JavaScript", "Python", "Ruby"],
  isChallenging: true,
  isRewarding: true,
  difficulty: 8,
  jokes:
    "http://stackoverflow.com/questions/234075/what-is-your-best-programmer-joke",
};

// Questão 1
const addLanguage = (string) =>
  programming.languages.includes(string)
    ? undefined
    : programming.languages.push(string);

// Questão 2
const setDifficulty = (number) => (programming.difficulty = parseInt(number));

// Questão 3
const deleteKey = (key) => delete programming[key];

// Questão 4
const createKey = (key, value) => (programming[key] = value);
createKey("isFun", true);

// Questão 5
const printLanguages = () => console.log(programming.languages);

// Questão 6
const printKeys = () => console.log(Object.keys(programming));

// Questão 7
const printValues = () => console.log(Object.values(programming));
// console.log(programming);
