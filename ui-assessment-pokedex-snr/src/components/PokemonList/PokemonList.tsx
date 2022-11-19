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
     <div className={classes.pImage} ><img src={pkmn.image}></img>  </div>
        <div className={classes.cardContent}>
        <div key={pkmn.id}>
        <div >{pkmn.number}. {pkmn.name}</div>
   
        <div className={classes.typeLayout}>
            {pkmn.types.map((pType) =>
            {
            if(pType=="Normal")
            {
              
              return <div className={classes.typeLabel_Normal}>{pType}</div>

            }
            else if(pType=="Fire"){
              return <div className={classes.typeLabel_Fire}>{pType}</div>

            }
            else if(pType=="Water"){
              return <div className={classes.typeLabel_Water}>{pType}</div>

            }
            else if(pType=="Electric"){
              return <div className={classes.typeLabel_Electric}>{pType}</div>

            }
            else if(pType=="Grass"){
              return <div className={classes.typeLabel_Grass}>{pType}</div>

            }
            else if(pType=="Ice"){
              return <div className={classes.typeLabel_Ice}>{pType}</div>

            }
            else if(pType=="Fighting"){
              return <div className={classes.typeLabel_Fighting}>{pType}</div>

            }
            else if(pType=="Poison"){
              return <div className={classes.typeLabel_Poison}>{pType}</div>

            }
            else if(pType=="Ground"){
              return <div>{pType}</div>

            }
            else if(pType=="Flying"){
              return <div>{pType}</div>

            }
            else if(pType=="Psychic "){
              return <div>{pType}</div>

            }
            else if(pType=="Bug"){
              return <div>{pType}</div>

            }
            else if(pType=="Rock"){
              return <div>{pType}</div>

            }
            else if(pType=="Ghost"){
              return <div>{pType}</div>

            }
            else if(pType=="Dragon"){
              return <div>{pType}</div>

            }
            else if(pType=="Dark"){
              return <div>{pType}</div>

            }
            else if(pType=="Steel"){
              return <div>{pType}</div>

            }
            else if(pType=="Fairy"){
              return <div>{pType}</div>

            }
  })}

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
      alignItems: 'center',
      overflow: 'hidden',
      position: 'relative',
      display: 'flex',
      backgroundColor: '#0d7bdb',
      marginBottom:'5px',
      '& img':{
        height: '100%',
        width: '150px',
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
        zIndex: '5',
        backgroundColor: '#0cadf2'
    },
    line2: {
      width: '100%',
      height: '15%',
      position: 'absolute',
      bottom: '4px',
      left: '0',
      zIndex: '5',
      backgroundColor: '#0cadf2'
  },

  pImage:{
    zIndex: '9'
  },
  typeLayout:{

    display: 'flex'
  },
  typeLabel_Poison:{
    paddingLeft: '6%',
    paddingRight: '6%',
    borderRadius:'17px',
    backgroundColor: '#A33EA1'
  },
  typeLabel_Normal:{
    paddingLeft: '6%',
    paddingRight: '6%',
    borderRadius:'17px',
    backgroundColor: '#A8A77A'
  },

  typeLabel_Fighting:{
    paddingLeft: '6%',
    paddingRight: '6%',
    borderRadius:'17px',
    backgroundColor: '#C22E28'
  },
  typeLabel_Ice:{
    paddingLeft: '6%',
    paddingRight: '6%',
    borderRadius:'17px',
    backgroundColor: '#96D9D6'
  },
  typeLabel_Water:{
    paddingLeft: '6%',
    paddingRight: '6%',
    borderRadius:'17px',
    backgroundColor: '#6390F0'
  },
  typeLabel_Fire:{
    paddingLeft: '6%',
    paddingRight: '6%',
    borderRadius:'17px',
    backgroundColor: '#EE8130'
  },
  typeLabel_Electric:{
    paddingLeft: '6%',
    paddingRight: '6%',
    borderRadius:'17px',
    backgroundColor: '#F7D02C'
  },
  typeLabel_Grass:{
    paddingLeft: '6%',
    paddingRight: '6%',
    borderRadius:'17px',
    backgroundColor: '#7AC74C'
  },

  line3: {
    width: '100%',
    height: '6%',
    position: 'absolute',
    bottom: '20%',
    left: '0',
    zIndex: '5',
    backgroundColor: '#0cadf2'
},
    cardContent:{
      marginLeft: '2%',
      borderRadius: '17px',

      display:'inline'
    }
  },
  { name: 'PokemonList' }
);
