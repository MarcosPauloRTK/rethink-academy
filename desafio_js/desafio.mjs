import * as data from "./data.mjs";

//Objeto para auxiliar na tradução
const TYPES_EN2PT = {
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

//Procura por tipo
let findByType = (...types) => data.pokemons.filter(pokemon => types.every(x => pokemon.type.includes(x)));
// console.log(find_by_type("psychic"));

//Procura por nome
let findByName = (name) => data.pokemons.filter((x) => x.name == name);
// console.log(find_by_name("charmander"));

//Traduz os tipos
let translateType = () =>
  data.pokemons.forEach((pokemon) => {
    pokemon.type = pokemon.type
      .map((tipo) => TYPES_EN2PT[tipo])
      .reduce((acc, item) => {
        acc.push(item);
        return acc;
      }, []);
  });
// translate_type();
// console.log(find_by_type("eletrico", "metalico"));

data.pokemons.find_by_name = findByName;
data.pokemons.find_by_type = findByType;
data.pokemons.translate_type = translateType;

