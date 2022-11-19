import React from 'react';
import { createUseStyles } from 'react-jss';
import { useGetPokemons } from '../../hooks/useGetPokemons';

export const PokemonList = () => {
  const classes = useStyles();
  const { pokemons, loading } = useGetPokemons();

  return (
    <div className={classes.root}>
      {loading && <div>Loading...</div>}

{/* pokemon list */}
      {pokemons.map((pkmn) => (
        <div className={classes.card}>
     <div ><img src={pkmn.image}></img>  </div>
        <div className={classes.cardContent}>
        <div key={pkmn.id}>
        <div >{pkmn.number}. {pkmn.name}</div>
   
        <div>
          Types: 
            {pkmn.types.map((pType) =>
            <div>{pType}</div>
          )}

        </div>
        </div>
        </div>
        </div>
      ))}

{/* pokemon list end*/}
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
    card:{
      display: 'flex',
      backgroundColor: '#8997ad',
      marginBottom:'5px',
      '& img':{
        height: '150px',
        width: '150px'
      },
      '&:hover':{
        boxShadow: '0 0 11px rgba(33,33,33,.2)',
        backgroundColor: 'blue'
      }
    },
 
    cardContent:{
      display:'inline'
    }
  },
  { name: 'PokemonList' }
);
