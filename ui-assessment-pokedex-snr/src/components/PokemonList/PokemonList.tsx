import React, {useEffect, useState} from 'react';
import { createUseStyles } from 'react-jss';
import { Link,  Outlet,  useLocation, } from 'react-router-dom';
import { useGetPokemons } from '../../hooks/useGetPokemons';
import { Search } from '../Search/Search'
 export const PokemonList = (props: any) => {

  
  console.log(props)

  const classes = useStyles();
  const { pokemons, loading } = useGetPokemons();
  const [currentSearch, setCurrentSearch] = useState('');
  
  let location = useLocation()
  // useEffect(()=>{
  //   props.blog('test123444')

  // })
  if(loading)
  {
    return <div className={classes.root}>Loading...</div>
  }
  else{


     console.log(location)
  return (
    <div className={classes.root}>
      {/* <Search Pokemons={pokemons}/> */}
      <input type="text" placeholder='Search..' className={classes.searchBar} onChange={(e)=>{setCurrentSearch(e.target.value)} }/>
{pokemons.filter((val)=>{
  if(currentSearch=="") return val
  else if(val.name.toLowerCase().includes(currentSearch.toLowerCase())) return val
 let blog = props.blog
}).map((pkmn) => (

  <div>
  {/* // <a href='https://www.google.com'> */}
  <Link
  key={pkmn.id}
  to={{
    pathname: `/pokemon/${pkmn.name}`,
  }}
  state= {{ background: location }}

>
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
        return <div className={classes.typeLabel_Ground}>{pType}</div>

      }
      else if(pType=="Flying"){
        return <div className={classes.typeLabel_Flying}>{pType}</div>

      }
      else if(pType=="Psychic "){
        return <div className={classes.typeLabel_Psychic}>{pType}</div>

      }
      else if(pType=="Bug"){
        return <div className={classes.typeLabel_Bug}>{pType}</div>

      }
      else if(pType=="Rock"){
        return <div className={classes.typeLabel_Rock}>{pType}</div>

      }
      else if(pType=="Ghost"){
        return <div className={classes.typeLabel_Ghost}>{pType}</div>

      }
      else if(pType=="Dragon"){
        return <div className={classes.typeLabel_Dragon}>{pType}</div>

      }
      else if(pType=="Dark"){
        return <div className={classes.typeLabel_Dark}>{pType}</div>

      }
      else if(pType=="Steel"){
        return <div className={classes.typeLabel_Steel}>{pType}</div>

      }
      else if(pType=="Fairy"){
        return <div className={classes.typeLabel_Fairy}>{pType}</div>

      }
})}

  </div>
  </div>
  </div>
  <div className={classes.line2}></div>
  <div className={classes.line3}></div>

  </div>
</Link>
<Outlet/>
 </div>
  // </a>
))}



{/* pokemon list end*/}
    </div>
  );
};
 }
const useStyles = createUseStyles(
  {
    root: {
      width: '95%',
      marginLeft: '5%',
      textAlign: 'center',
      padding: '32px',
      boxSizing: 'border-box',
      color: 'rgba(255,255,255,.92)',

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
       borderColor: 'orange',
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
    display: 'flex',
    marginTop: '5%'
  },
  typeLabel_Poison:{

    marginRight: '6%',
    paddingLeft: '6%',
    paddingRight: '6%',
    borderRadius:'17px',
    backgroundColor: '#A33EA1'
  },
  typeLabel_Normal:{
  
    marginRight: '6%',
    paddingLeft: '6%',
    paddingRight: '6%',
    borderRadius:'17px',
    backgroundColor: '#A8A77A'
  },
  typeLabel_Fighting:{
  
    marginRight: '6%',
    paddingLeft: '6%',
    paddingRight: '6%',
    borderRadius:'17px',
    backgroundColor: '#C22E28'
  },
  typeLabel_Ice:{
  
    marginRight: '6%',
    paddingLeft: '6%',
    paddingRight: '6%',
    borderRadius:'17px',
    backgroundColor: '#96D9D6'
  },
  typeLabel_Water:{
 
    marginRight: '6%',
    paddingLeft: '6%',
    paddingRight: '6%',
    borderRadius:'17px',
    backgroundColor: '#6390F0'
  },
  typeLabel_Fire:{
   
    marginRight: '6%',
    paddingLeft: '6%',
    paddingRight: '6%',
    borderRadius:'17px',
    backgroundColor: '#EE8130'
  },
  typeLabel_Electric:{

    marginRight: '6%',
    paddingLeft: '6%',
    paddingRight: '6%',
    borderRadius:'17px',
    backgroundColor: '#F7D02C'
  },
  typeLabel_Grass:{
   
    marginRight: '6%',
    paddingLeft: '6%',
    paddingRight: '6%',
    borderRadius:'17px',
    backgroundColor: '#7AC74C'
  },
  typeLabel_Ground:{

    marginRight: '6%',
    paddingLeft: '6%',
    paddingRight: '6%',
    borderRadius:'17px',
    backgroundColor: '#E2BF65'
  },
  typeLabel_Flying:{
 
    marginRight: '6%',
    paddingLeft: '6%',
    paddingRight: '6%',
    borderRadius:'17px',
    backgroundColor: '#A98FF3'
  },
  typeLabel_Psychic:{
   
    marginRight: '6%',
    paddingLeft: '6%',
    paddingRight: '6%',
    borderRadius:'17px',
    backgroundColor: '#F95587'
  },
  typeLabel_Bug:{
  
    marginRight: '6%',
    paddingLeft: '6%',
    paddingRight: '6%',
    borderRadius:'17px',
    backgroundColor: '#A6B91A'
  },
  typeLabel_Rock:{
  
    marginRight: '6%',
    paddingLeft: '6%',
    paddingRight: '6%',
    borderRadius:'17px',
    backgroundColor: '#B6A136'
  },
  typeLabel_Ghost:{
  
    marginRight: '6%',
    paddingLeft: '6%',
    paddingRight: '6%',
    borderRadius:'17px',
    backgroundColor: '#735797'
  },
  typeLabel_Dragon:{
  
    marginRight: '6%',
    paddingLeft: '6%',
    paddingRight: '6%',
    borderRadius:'17px',
    backgroundColor: '#6F35FC'
  },
  typeLabel_Dark:{
    
    marginRight: '6%',
    paddingLeft: '6%',
    paddingRight: '6%',
    borderRadius:'17px',
    backgroundColor: '#705746'
  },
  typeLabel_Steel:{
    marginRight: '6%',
    paddingLeft: '6%',
    paddingRight: '6%',
    borderRadius:'17px',
    backgroundColor: '#B7B7CE'
  },
  typeLabel_Fairy:{
    marginRight: '6%',
    paddingLeft: '6%',
    paddingRight: '6%',
    borderRadius:'17px',
    backgroundColor: '#D685AD'
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
      textDecoration: 'none',
      display:'inline',
      color: 'rgba(255,255,255,.92)',
    },
    searchBar:{
      borderRadius:'40px',
      // border:'2px solid #609',
      padding: '20px',
      width: '15%',
      height: '15px',    
      color: 'black',
      marginBottom:'2%'

    }
  },
  { name: 'PokemonList' }
);
