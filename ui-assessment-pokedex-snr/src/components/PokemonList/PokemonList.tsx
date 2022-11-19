import React from 'react';
import { createUseStyles } from 'react-jss';
import { useGetPokemons } from '../../hooks/useGetPokemons';
import { Search } from '../Search/Search'
 export const PokemonList = () => {
  const classes = useStyles();
  const { pokemons, loading } = useGetPokemons();
  if(loading)
  {
    return <div className={classes.root}>Loading...</div>
  }
  else{

  
  return (
    <div className={classes.root}>
      <Search/>



{/* pokemon list */}
      {pokemons.map((pkmn) => (
        <div className={classes.card}>
          <div className={classes.line1}></div>
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
        <div className={classes.line2}></div>
        <div className={classes.line3}></div>
        </div>
      ))}

{/* pokemon list end*/}
    </div>
  );
};
 }
const useStyles = createUseStyles(
  {
    root: {
      width: '100%',
      textAlign: 'center',
      padding: '32px',
      boxSizing: 'border-box',
   
    },
    card:{
      overflow: 'hidden',
      position: 'relative',
      display: 'flex',
      backgroundColor: '#0d7bdb',
      marginBottom:'5px',
      '& img':{
        height: '150px',
        width: '150px',
        zIndex: '12 !important'
      },
      '&:hover':{
       borderColor: 'orange'
      },
      borderColor:'#525252',
      borderRadius: '17px',
      borderWidth:'5px',
      borderStyle:'solid'
    },
    
    line1: {
        width: '100%',
        height: '6%',
        position: 'absolute',
        top: '0',
        left: '0',
        zIndex: '10',
        backgroundColor: '#0cadf2'
    },
    line2: {
      width: '100%',
      height: '15%',
      position: 'absolute',
      bottom: '4px',
      left: '0',
      zIndex: '10',
      backgroundColor: '#0cadf2'
  },

  line3: {
    width: '100%',
    height: '6%',
    position: 'absolute',
    bottom: '35px',
    left: '0',
    zIndex: '10',
    backgroundColor: '#0cadf2'
},
    cardContent:{
      borderRadius: '17px',

      display:'inline'
    }
  },
  { name: 'PokemonList' }
);
