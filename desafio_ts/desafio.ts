import {pokemons} from "./data";

//Objeto para auxiliar na tradução
const typesEnglishToPortuguese: { [key: string]: string } = {
  plant: "planta",
  grass: "planta",
  fire: "fogo",
  water: "agua",
  bug: "inseto",
  normal: "normal",
  poison: "venenoso",
  ground: "terra",
  electric: "eletrico",
  fighter: "lutador",
  psychic: "psiquico",
  rock: "pedra",
  flying: "voador",
  ghost: "fantasma",
  ice: "gelo",
  dragon: "dragao",
  steel: "metalico",
  dark: "noturno",
  fairy: "fada",
};


type Pokemon = {
  name: string;
  type: string[];
  // type: [string, string?],
  weight: number;
  height: number;
  id: number;
};


//Procura por tipo
let findByType = (...types: string[]) : Pokemon[]=>
  pokemons.filter((pokemon:Pokemon) =>
    types.every((x) => pokemon.type.includes(x))
  );
// console.log(findByType("psychic"));

//Procura por nome
let findByName = (name: string) => pokemons.filter((x) => x.name == name);
// console.log(findByName("charmander"));

//Traduz os tipos
let translateType = () =>
  pokemons.forEach((pokemon: Pokemon) => {
    pokemon.type = pokemon.type
      .map((tipo: string) => typesEnglishToPortuguese[tipo])
      .reduce((acc: string[], item: string) => {
        acc.push(item);
        return acc;
      }, []);
  });

// translateType();
// console.log(findByType("eletrico", "metalico"));

const types = Object.keys(typesEnglishToPortuguese)

export {findByType, types, Pokemon}