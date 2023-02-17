import * as data from "./data.mjs"

//Objeto para auxiliar na tradução
const types_en2pt = {
  plant: "planta",
  fire: "fogo",
  water: "agua",
  bug: "inseto",
  normal: "normal",
  poison:"venenoso",
  ground:"terra",
  electric:"eletrico",
  fighter: "lutador",
  psychic:"psiquico",
  rock:"pedra",
  flying:"voador",
  ghost:"fantasma",
  ice:"gelo",
  dragon:"dragao",
  steel:"metalico",
  dark:"noturno",
  fairy:"fada",
};

//Procura por tipo
const find_by_type = (type) => data.pokemons.filter((x) => x.type == type);
// console.log(find_by_type("psychic"));
//Procura por nome
const find_by_name = (name) => data.pokemons.filter((x) => x.name == name);
// console.log(find_by_name("charmander"));

//Traduz os tipos
const translate_type = () => data.pokemons.forEach((x) => x.type = types_en2pt[x.type]);
// console.log(translate_type());


