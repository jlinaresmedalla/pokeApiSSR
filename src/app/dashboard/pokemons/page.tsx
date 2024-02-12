import Image from "next/image";
import { PokemonsResponse } from "../../pokemons/interfaces/pokemonsResponse.interface";
import { simplePokemon } from "../../pokemons/interfaces/simplePokemon";
import { PokemonGrid } from "@/app/pokemons";

const getPokemons = async (
  limit = 20,
  offset = 0
): Promise<simplePokemon[]> => {
  const data: PokemonsResponse = await fetch(
    `https://pokeapi.co/api/v2/pokemon?limit=${limit}&offset=${offset}`
  ).then((res) => res.json());

  const pokemons = data.results.map((pokemon) => ({
    id: pokemon.url.split("/").at(-2)!,
    name: pokemon.name,
  }));

  return pokemons;
};

const PokemonsPage = async () => {
  const pokemons = await getPokemons(151);

  return (
    <div className="flex flex-col">
      <div className="flex flex-wrap gap-10 items-center justify-center">
        <PokemonGrid pokemons={pokemons} />
      </div>
    </div>
  );
};

export default PokemonsPage;
