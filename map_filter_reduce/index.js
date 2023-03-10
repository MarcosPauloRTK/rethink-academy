// Questão 1

// Questão 2
const stringConcat = (array) =>
  array.reduce((acc, item) => acc + `${item}`, "");
// console.log(stringConcat([1,2,3]));

// Questão 3

let voters = [
  { name: "Bob", age: 30, voted: true },
  { name: "Jake", age: 32, voted: true },
  { name: "Kate", age: 25, voted: false },
  { name: "Sam", age: 20, voted: false },
  { name: "Phil", age: 21, voted: true },
  { name: "Ed", age: 55, voted: true },
  { name: "Tami", age: 54, voted: true },
  { name: "Mary", age: 31, voted: false },
  { name: "Becky", age: 43, voted: false },
  { name: "Joey", age: 41, voted: true },
  { name: "Jeff", age: 30, voted: true },
  { name: "Zack", age: 19, voted: false },
];

const totalVeryYoungVotes = voters
  .filter((element) => element.age < 30 && element.voted)
  .reduce((acc) => ++acc, 0);

console.log(totalVeryYoungVotes);

// Questão 4
const wishlist = [
  { title: "Tesla Model S", price: 90000 },
  { title: "4 carat diamond ring", price: 45000 },
  { title: "Fancy hacky Sack", price: 5 },
  { title: "Gold fidgit spinner", price: 2000 },
  { title: "A second Tesla Model S", price: 90000 },
];

const shoppingSpree = wishlist
  .map((el) => el.price)
  .reduce((acc, el) => acc + el, 0); // seu código aqui

console.log(shoppingSpree); // 227005

// Questão 5
{
  const voters = [
    { name: "Bob", age: 30, voted: true },
    { name: "Jake", age: 32, voted: true },
    { name: "Kate", age: 25, voted: false },
    { name: "Sam", age: 20, voted: false },
    { name: "Phil", age: 21, voted: true },
    { name: "Ed", age: 55, voted: true },
    { name: "Tami", age: 54, voted: true },
    { name: "Mary", age: 31, voted: false },
    { name: "Becky", age: 43, voted: false },
    { name: "Joey", age: 41, voted: true },
    { name: "Jeff", age: 30, voted: true },
    { name: "Zack", age: 19, voted: false },
  ];

  const ageGroup = [
    ["Old", 40],
    ["Mid", 30],
    ["Young", 0],
  ];

  

  const countDict = voters.reduce((acc, curr) => {
    // ageGroup.find(*) procura o grupo etário da pessoa
    // comparando com sua idade e depois é jogado dentrode uma
    //  format string para gerar a chave do dicionário.
    const key = `num${ageGroup.find((el) => curr.age > el[1])[0]}People`;
    acc[key] = acc[key] + 1 || 1;
    return acc;
  }, {});

  const countVotersDict = voters
    .filter((el) => el.voted)
    .reduce((acc, curr) => {
      const key = `num${ageGroup.find((el) => curr.age > el[1])[0]}VotedPeople`;
      acc[key] = acc[key] + 1 || 1;
      return acc;
    }, {});

  const votersResult = { ...countDict, ...countVotersDict }; // seu código aqui

  console.log(votersResult);
}
