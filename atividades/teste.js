function deepClone(arg) {
  return typeof arg === "object" && arg
    ? Array.isArray(arg)
      ? deepCloneArray(arg)
      : deepCloneObject(arg)
    : arg;
}

function deepCloneObject(obj) {
  return Object.keys(obj).reduce((acc, key) => {
    acc[key] = deepClone(obj[key]);
    return acc;
  }, {});
}

function deepCloneArray(array) {
  return array.reduce((acc, value) => [...acc, deepClone(value)], []);
}


// const object = {
//   name: "Robson",
//   age: 70,
//   address: { street: "ABC", number: 123 },
//   sayHi: () => console.log("Hi"),
//   teste: null,
//   teste1: undefined,
//   teste2: NaN
// };



let clone = deepClone(object);

clone["friends"][0]["id"] = 20;

console.log(clone.friends);
console.log(object.friends);


