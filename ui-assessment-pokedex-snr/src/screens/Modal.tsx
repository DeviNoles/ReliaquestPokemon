import React from 'react';
import { createUseStyles } from 'react-jss';

export const Modal = () => {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      hihi
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
  { name: 'Modal' }
);
