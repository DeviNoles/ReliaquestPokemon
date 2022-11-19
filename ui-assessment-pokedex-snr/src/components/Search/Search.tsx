import React from 'react';
import { createUseStyles } from 'react-jss';

export const Search = () => {
  const classes = useStyles();


  return (
    <div className={classes.root}>
        <input placeholder='Search..' className={classes.inputBox}></input>
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
