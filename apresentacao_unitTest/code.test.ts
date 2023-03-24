import { pokemons } from "../desafio_ts/data";
import { findByType, types, Pokemon } from "../desafio_ts/desafio";

// Precisou ser criado para especificar os tipos do vetor de caso teste
type Tuple = [string, Pokemon[]];

describe("findByType", () => {
  const array: Tuple[] = Array.from({ length: 6 }, () => {
    const randomIndex = Math.round(Math.random() * types.length);
    const randomType = types[randomIndex];

    return [randomType, pokemons.filter((el) => el.type.includes(randomType))];
  });

  it.each(array)(
    "should return all the pokemons which types is equal the argument",
    (type, expectedResult) => {
      console.log(`For the type ${type} it's expected to receive a ${expectedResult.length}-size array.`)
      
      expect(findByType(type)).toEqual(expectedResult);
    }
  );
});