import React from 'react';
import { createUseStyles } from 'react-jss';
import {useState} from 'react';

export const Search = (props: any) => {
  let pokemons = props.Pokemons //passed pokemon list from list component I need to filter here
  const classes = useStyles();
  const [currentSearch, setCurrentSearch] = useState('');
  const handleChange = (event:any) => {
    setCurrentSearch(event.target.value);
    console.log(pokemons)
    console.log('value is:', event.target.value);
  };
  function inputEvent(){
    console.log(currentSearch)
}
  return (
    <div className={classes.root}>
        <input type="text" placeholder='Search..' className={classes.inputBox} onChange={handleChange} value={currentSearch}></input>
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
    inputBox:{
        color: 'black'
    }

  },
  { name: 'Search' }
);
