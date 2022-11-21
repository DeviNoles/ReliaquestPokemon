import React, {useState} from 'react';

import { createUseStyles } from 'react-jss';
import { Link } from 'react-router-dom';
import { useGetPokemonsModal } from '../hooks/useGetPokemonsModal';
import { useNavigate } from "react-router-dom";

export const Modal = () => {
  const navigate = useNavigate();
  const classes = useStyles()
  return (
    <div className={classes.modalDiv}>
      <div className={classes.modal}>
        <h3>Modal</h3>
        <button onClick={() => navigate(-1)}>Close</button>
      </div>
    </div>
  );
};


const useStyles = createUseStyles(
  {
    root: {
      width: '95%',
      marginLeft: '5%',
      textAlign: 'center',
      padding: '32px',
      boxSizing: 'border-box',
      color: 'black',
      backgroundColor: 'white',

    },
    modalDiv: {
      zIndex: '9',

      width: '100vw',
      height: '100vh',
      position: 'absolute',
      top: '0',
      backgroundColor: 'rgba(91, 112, 131, 0.4)',
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
    },
    modal: {
      
      width: '350px',
      height: '200px',
      backgroundColor: 'white',
      borderRadius: '5px',
    }
    
  },
  { name: 'Modal' }
);
