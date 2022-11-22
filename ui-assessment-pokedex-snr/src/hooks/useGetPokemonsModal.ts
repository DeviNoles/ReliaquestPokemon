import { useMemo } from 'react';
import { useQuery } from '@apollo/react-hooks';
import gql from 'graphql-tag';

export type Pokemon = {
  id: string;
  name: string;
  number: string; //<- number = string?? lol
  image: string;
  types:string[];
};

export type PokemonOption = {
  value: Pokemon['id'];
  label: Pokemon['name'];
  number: Pokemon['number'];
  image: Pokemon['image'];
  types: Pokemon['types'];
};

export const GET_POKEMONS_MODAL = gql`
query pokemon($id: String, $name: String){
  pokemon(id: $id, name: $name){
    id
    number
    name
    weight{
      minimum
      maximum
    }
    height{
      minimum
      maximum
    }
    classification
    types
    resistant
    weaknesses
    fleeRate
    maxCP
    maxHP
    image
  }
}
`;



export const useGetPokemonsModal = (pokemon: string) => {
  console.log("PASSED POKEMON NAME: ", pokemon)
  const { data, ...queryRes } = useQuery(GET_POKEMONS_MODAL, {
    variables:{
    name: pokemon
  }
  });

  // const pokemons: Pokemon[] = useMemo(() => data?.pokemons || [], [data]);

  // const pokemonOptions: PokemonOption[] = useMemo(
  //   () => pokemons.map((p: Pokemon) => ({ value: p.id, label: p.name, image: p.image, types: p.types, number: p.number })),
  //   [pokemons]
  // );
  //   console.log(pokemons)
  //   console.log(pokemonOptions)
  //   console.log(queryRes)
  return {
    data,
    // pokemonOptions,
    ...queryRes,
  };
};