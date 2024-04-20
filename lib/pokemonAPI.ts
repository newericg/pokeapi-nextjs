const POKEMON_API = "https://pokeapi.co/api/v2/";

// getPokemonList -> Get the first 151 pokemon
export async function getPokemonList({
  limit,
  page,
}: {
  limit: number;
  page: number;
}) {
  const response = await fetch(
    POKEMON_API + `pokemon?limit=${limit}&offset=${limit * (page - 1)}`
  );
  const data = await response.json();
  return data.results;
}

// getPokemon -> given a string "pikachu", get the information of pikachu
export async function getPokemon(name: string) {
  const response = await fetch(POKEMON_API + "pokemon/" + name);
  const data = await response.json();
  return data;
}

// getPokemonText -> given a id, get pokemon flavor text
export async function getPokemonText(name: string) {
  const response = await fetch(POKEMON_API + "pokemon-species/" + name);
  const data = await response.json();
  for (let entry of data.flavor_text_entries) {
    if (entry.language.name === "en") {
      let flavor = entry.flavor_text.replace(/\f/g, " ");
      return flavor;
    }
  }
  return "";
}
