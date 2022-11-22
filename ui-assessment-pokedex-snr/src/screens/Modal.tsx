import React, { useState } from 'react';

import { createUseStyles } from 'react-jss';
import { Link } from 'react-router-dom';
import { useGetPokemonsModal } from '../hooks/useGetPokemonsModal';
import { useNavigate } from "react-router-dom";

export const Modal = () => {
  let currentpokemon = window.location.href.split("pokemon/")[1] //this is terrible
  console.log(currentpokemon)
  const navigate = useNavigate();
  const classes = useStyles()
  console.log(window.location.href)
  const { data, loading } = useGetPokemonsModal(currentpokemon);
  let pokemonData: any
  if (!loading) {
    console.log(data)

    return (
      <div className={classes.modalDiv}>
        <div className={classes.modal}>
          <div className={classes.leftSide}>
            <div>
              <h3>Pokemon Info</h3>
            </div>
            <div className={classes.imageBox}> <img src={data.pokemon.image}></img>
            </div>


          </div>
          <button onClick={() => navigate(-1)}>Close</button>
          <div className={classes.rightSide}>


            <div>
              No
              <div>{data.pokemon.number}</div>


            </div>



            <div>{data.pokemon.classification}</div>


            <div>
              Name
              <div>{data.pokemon.name}</div>


            </div>

            {/*  <div>{data.pokemon.id}</div> */}
            <div>
              Height
              <div>{data.pokemon.height.minimum} - {data.pokemon.height.maximum}</div>

            </div>
            <div>
              Weight
              <div>{data.pokemon.weight.minimum} - {data.pokemon.weight.maximum}</div>

            </div>

            <div>
              Resistant
              <div>{data.pokemon.resistant.map((pType: string) => {
                if (pType == "Normal") {

                  return <div className={classes.typeLabel_Normal}>{pType}</div>

                }
                else if (pType == "Fire") {
                  return <div className={classes.typeLabel_Fire}>{pType}</div>

                }
                else if (pType == "Water") {
                  return <div className={classes.typeLabel_Water}>{pType}</div>

                }
                else if (pType == "Electric") {
                  return <div className={classes.typeLabel_Electric}>{pType}</div>

                }
                else if (pType == "Grass") {
                  return <div className={classes.typeLabel_Grass}>{pType}</div>

                }
                else if (pType == "Ice") {
                  return <div className={classes.typeLabel_Ice}>{pType}</div>

                }
                else if (pType == "Fighting") {
                  return <div className={classes.typeLabel_Fighting}>{pType}</div>

                }
                else if (pType == "Poison") {
                  return <div className={classes.typeLabel_Poison}>{pType}</div>

                }
                else if (pType == "Ground") {
                  return <div className={classes.typeLabel_Ground}>{pType}</div>

                }
                else if (pType == "Flying") {
                  return <div className={classes.typeLabel_Flying}>{pType}</div>

                }
                else if (pType == "Psychic ") {
                  return <div className={classes.typeLabel_Psychic}>{pType}</div>

                }
                else if (pType == "Bug") {
                  return <div className={classes.typeLabel_Bug}>{pType}</div>

                }
                else if (pType == "Rock") {
                  return <div className={classes.typeLabel_Rock}>{pType}</div>

                }
                else if (pType == "Ghost") {
                  return <div className={classes.typeLabel_Ghost}>{pType}</div>

                }
                else if (pType == "Dragon") {
                  return <div className={classes.typeLabel_Dragon}>{pType}</div>

                }
                else if (pType == "Dark") {
                  return <div className={classes.typeLabel_Dark}>{pType}</div>

                }
                else if (pType == "Steel") {
                  return <div className={classes.typeLabel_Steel}>{pType}</div>

                }
                else if (pType == "Fairy") {
                  return <div className={classes.typeLabel_Fairy}>{pType}</div>

                }
              })}</div>

            </div>
            <div>
              Weaknesses
              <div>{data.pokemon.weaknesses.map((pType: string) => {
                if (pType == "Normal") {

                  return <div className={classes.typeLabel_Normal}>{pType}</div>

                }
                else if (pType == "Fire") {
                  return <div className={classes.typeLabel_Fire}>{pType}</div>

                }
                else if (pType == "Water") {
                  return <div className={classes.typeLabel_Water}>{pType}</div>

                }
                else if (pType == "Electric") {
                  return <div className={classes.typeLabel_Electric}>{pType}</div>

                }
                else if (pType == "Grass") {
                  return <div className={classes.typeLabel_Grass}>{pType}</div>

                }
                else if (pType == "Ice") {
                  return <div className={classes.typeLabel_Ice}>{pType}</div>

                }
                else if (pType == "Fighting") {
                  return <div className={classes.typeLabel_Fighting}>{pType}</div>

                }
                else if (pType == "Poison") {
                  return <div className={classes.typeLabel_Poison}>{pType}</div>

                }
                else if (pType == "Ground") {
                  return <div className={classes.typeLabel_Ground}>{pType}</div>

                }
                else if (pType == "Flying") {
                  return <div className={classes.typeLabel_Flying}>{pType}</div>

                }
                else if (pType == "Psychic ") {
                  return <div className={classes.typeLabel_Psychic}>{pType}</div>

                }
                else if (pType == "Bug") {
                  return <div className={classes.typeLabel_Bug}>{pType}</div>

                }
                else if (pType == "Rock") {
                  return <div className={classes.typeLabel_Rock}>{pType}</div>

                }
                else if (pType == "Ghost") {
                  return <div className={classes.typeLabel_Ghost}>{pType}</div>

                }
                else if (pType == "Dragon") {
                  return <div className={classes.typeLabel_Dragon}>{pType}</div>

                }
                else if (pType == "Dark") {
                  return <div className={classes.typeLabel_Dark}>{pType}</div>

                }
                else if (pType == "Steel") {
                  return <div className={classes.typeLabel_Steel}>{pType}</div>

                }
                else if (pType == "Fairy") {
                  return <div className={classes.typeLabel_Fairy}>{pType}</div>

                }
              })}</div>

            </div>

          </div>

        </div>
      </div>

    );
  }
  else {
    return (

      <div>Loading...</div>

    )
  }

}
const useStyles = createUseStyles(
  {
    // root: {
    //   width: '95%',
    //   marginLeft: '5%',
    //   textAlign: 'center',
    //   padding: '32px',
    //   boxSizing: 'border-box',
    //   color: 'black',
    //   backgroundColor: 'white',

    // },
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

      width: '50%',
      height: '50%',
      backgroundColor: '#fadd8c',
      borderRadius: '5px',
      flexDirection: 'column'
    },
    // body {
    //   height: 100vh;
    //   margin: 0;
    //   display: grid;
    //   place-items: center;
    //   background: #222;
    // }

    moduleBorderWrap: {
      maxWidth: '250px',
      padding: '1rem',
      position: 'relative',
      background: 'linear-gradient(to right, red, purple)',
      paddingBlock: '3px',
    },

    mdle: { // module is protected
      background: '#222',
      color: 'white',
      // padding: '2rem'
    },
    leftSide: {
      float: 'left',

    },
    rightSide: {
      position:'absolute',
      right: '25%',
      width: '28%',
      textAlign: 'center'
    },
    imageBox: {
  
      width: '100%',
      '& img':{
        width: '70%',
        height: '70%',
        border: '5px solid #555'
      }
    },
    typeLabel_Poison: {
      width: '4%',
      textAlign: 'center',

      paddingLeft: '6%',
      paddingRight: '6%',
      borderRadius: '17px',
      backgroundColor: '#A33EA1'
    },
    typeLabel_Normal: {
      width: '4%',
      textAlign: 'center',

      marginRight: '6%',
      paddingLeft: '6%',
      paddingRight: '6%',
      borderRadius: '17px',
      backgroundColor: '#A8A77A'
    },
    typeLabel_Fighting: {
      width: '4%',
      textAlign: 'center',

      marginRight: '6%',
      paddingLeft: '6%',
      paddingRight: '6%',
      borderRadius: '17px',
      backgroundColor: '#C22E28'
    },
    typeLabel_Ice: {
      width: '4%',
      textAlign: 'center',

      marginRight: '6%',
      paddingLeft: '6%',
      paddingRight: '6%',
      borderRadius: '17px',
      backgroundColor: '#96D9D6'
    },
    typeLabel_Water: {
      width: '4%',
      textAlign: 'center',

      marginRight: '6%',
      paddingLeft: '6%',
      paddingRight: '6%',
      borderRadius: '17px',
      backgroundColor: '#6390F0'
    },
    typeLabel_Fire: {
      width: '4%',
      textAlign: 'center',
      paddingLeft: '6%',
      paddingRight: '6%',
      borderRadius: '17px',
      backgroundColor: '#EE8130'
    },
    typeLabel_Electric: {
      width: '4%',

      marginRight: '6%',
      paddingLeft: '6%',
      paddingRight: '6%',
      borderRadius: '17px',
      backgroundColor: '#F7D02C'
    },
    typeLabel_Grass: {

      marginRight: '6%',
      paddingLeft: '6%',
      paddingRight: '6%',
      borderRadius: '17px',
      backgroundColor: '#7AC74C'
    },
    typeLabel_Ground: {

      marginRight: '6%',
      paddingLeft: '6%',
      paddingRight: '6%',
      borderRadius: '17px',
      backgroundColor: '#E2BF65'
    },
    typeLabel_Flying: {

      marginRight: '6%',
      paddingLeft: '6%',
      paddingRight: '6%',
      borderRadius: '17px',
      backgroundColor: '#A98FF3'
    },
    typeLabel_Psychic: {

      marginRight: '6%',
      paddingLeft: '6%',
      paddingRight: '6%',
      borderRadius: '17px',
      backgroundColor: '#F95587'
    },
    typeLabel_Bug: {

      marginRight: '6%',
      paddingLeft: '6%',
      paddingRight: '6%',
      borderRadius: '17px',
      backgroundColor: '#A6B91A'
    },
    typeLabel_Rock: {

      marginRight: '6%',
      paddingLeft: '6%',
      paddingRight: '6%',
      borderRadius: '17px',
      backgroundColor: '#B6A136'
    },
    typeLabel_Ghost: {

      marginRight: '6%',
      paddingLeft: '6%',
      paddingRight: '6%',
      borderRadius: '17px',
      backgroundColor: '#735797'
    },
    typeLabel_Dragon: {

      marginRight: '6%',
      paddingLeft: '6%',
      paddingRight: '6%',
      borderRadius: '17px',
      backgroundColor: '#6F35FC'
    },
    typeLabel_Dark: {

      marginRight: '6%',
      paddingLeft: '6%',
      paddingRight: '6%',
      borderRadius: '17px',
      backgroundColor: '#705746'
    },
    typeLabel_Steel: {
      marginRight: '6%',
      paddingLeft: '6%',
      paddingRight: '6%',
      borderRadius: '17px',
      backgroundColor: '#B7B7CE'
    },
    typeLabel_Fairy: {
      marginRight: '6%',
      paddingLeft: '6%',
      paddingRight: '6%',
      borderRadius: '17px',
      backgroundColor: '#D685AD'
    },
  },
  { name: 'Modal' }
);
