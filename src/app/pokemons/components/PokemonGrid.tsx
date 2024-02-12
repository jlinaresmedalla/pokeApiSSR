import Image from "next/image";
import { simplePokemon } from "../interfaces/simplePokemon";
import PokemonCard from "./PokemonCard";

export const PokemonGrid = ({ pokemons }: { pokemons: simplePokemon[] }) => {
  return (
    <div className="flex flex-col">
      <div className="flex flex-wrap gap-10 items-center justify-center">
        {pokemons.map((pokemon) => (
          <PokemonCard key={pokemon.id} pokemon={pokemon} />
        ))}
      </div>
    </div>
  );
};
