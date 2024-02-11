const getPokemons = async (limit = 20, offset = 0) => {
  const response = await fetch(
    `https://pokeapi.co/api/v2/pokemon?limit=${limit}&offset=${offset}`
  );
  const data = await response.json();
  return data;
};

const PokemonsPage = async () => {
  const pokemons = await getPokemons();

  return <div>{JSON.stringify(pokemons)}</div>;
};

export default PokemonsPage;
