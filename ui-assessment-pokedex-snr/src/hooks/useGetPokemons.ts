import { useMemo } from 'react';
import { useQuery } from '@apollo/react-hooks';
import gql from 'graphql-tag';

export type Pokemon = {
  id: string;
  name: string;
  image: string;
};

export type PokemonOption = {
  value: Pokemon['id'];
  label: Pokemon['name'];
  image: Pokemon['image'];
};

export const GET_POKEMONS = gql`
  query pokemons($first: Int!) {
    pokemons(first: $first) {
      id
      name
      image
    }
  }
`;

export const useGetPokemons = () => {
  const { data, ...queryRes } = useQuery(GET_POKEMONS, {
    variables: {
      first: 151, // Keep hard coded
    },
  });
  
  const pokemons: Pokemon[] = useMemo(() => data?.pokemons || [], [data]);

  const pokemonOptions: PokemonOption[] = useMemo(
    () => pokemons.map((p: Pokemon) => ({ value: p.id, label: p.name, image: p.image })),
    [pokemons]
  );
    console.log(pokemons)
    console.log(pokemonOptions)
    console.log(queryRes)
  return {
    pokemons,
    pokemonOptions,
    ...queryRes,
  };
};
