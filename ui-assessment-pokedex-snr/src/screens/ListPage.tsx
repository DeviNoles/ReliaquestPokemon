import React from 'react';
import { createUseStyles } from 'react-jss';
import { PokemonList } from '../components';

export const ListPage = (props: any) => {
  const classes = useStyles();
console.log(props.blog)
  return (
    <div className={classes.root}>
      <PokemonList blog={props.blog} />
    </div>
  );
};

const useStyles = createUseStyles(
  {
    root: {
      width: '100%',
      height: '100%',
    },
  },
  { name: 'ListPage' }
);
