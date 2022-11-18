import React from 'react';
import { createUseStyles } from 'react-jss';
import { useGetPokemons } from '../../hooks/useGetPokemons';

export const PokemonList = () => {
  const classes = useStyles();
  const { pokemons, loading } = useGetPokemons();

  return (
    <div className={classes.root}>
      {loading && <div>Loading...</div>}
      {pokemons.map((pkmn) => (
        <div key={pkmn.id}>
        <div >{pkmn.number}. {pkmn.name}</div>
        <div ><img src={pkmn.image}></img>  </div>
        <div>
          Types: 
            {pkmn.types.map((pType) =>
            <div>{pType}</div>
          )}

        </div>
        </div>
      ))}
    </div>
  );
};

const useStyles = createUseStyles(
  {
    root: {
      width: '100%',
      textAlign: 'center',
      padding: '32px',
      boxSizing: 'border-box',
    },
  },
  { name: 'PokemonList' }
);
