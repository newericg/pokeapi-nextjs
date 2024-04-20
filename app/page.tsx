import { PokemonGrid } from "@components";

console.log(PokemonGrid);
import { getPokemonList } from "@/lib/pokemonAPI";

export default async function Home({ searchParams }: { searchParams: any }) {
  const pokemonList = await getPokemonList({
    page: searchParams?.page ?? 1,
    limit: 20,
  });

  return <PokemonGrid pokemonList={pokemonList} />;
}
