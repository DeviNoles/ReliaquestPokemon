import React from 'react';
import { createUseStyles } from 'react-jss';
import { useLayout, useToggleNav } from '../../contexts';
import clsx from 'clsx';
import { NavOption } from './NavOption';

export const Nav = () => {
  const { navCollapsed } = useLayout();
  const classes = useStyles({ navCollapsed });
  const toggleNav = useToggleNav();

  return (
    <>
      <div className={classes.root}>
        <div className={classes.main}>
          <div className={classes.title}>
            <img src="/pokeball-white.png" className={classes.img} />
            <h3>Pokémon</h3>
          </div>
          <NavOption to="/" icon="home" name="Home">
            Home
          </NavOption>
          <NavOption to="/pokemon" icon="list" name="List">
            List
          </NavOption>
        </div>
        <div className={classes.bottom}>
          <button className={classes.expandBtn} onClick={() => toggleNav()}>
            <span
              title={navCollapsed ? 'Expand' : 'Collapse'}
              className={clsx(classes.btnIcon, 'material-icons')}
            >
              {navCollapsed ? 'unfold_more' : 'unfold_less'}
            </span>
            <span className={classes.btnTxt}>Collapse</span>
          </button>
        </div>
      </div>
      <div className={classes.spacer} />
    </>
  );
};

interface StyleProps {
  navCollapsed: boolean;
}

const useStyles = createUseStyles(
  {
    root: {
      zIndex: 100,
      background: '#131924',
      position: 'fixed',
      left: 0,
      top: 0,
      bottom: 0,
      width: (props: StyleProps) => (props.navCollapsed ? '81px' : '320px'),
      display: 'flex',
      flexDirection: 'column',
      transition: 'width .2s ease-in-out',
      overflow: 'hidden',
    },
    spacer: {
      height: '100%',
      width: (props: StyleProps) => (props.navCollapsed ? '81px' : '320px'),
      transition: 'width .2s ease-in-out',
    },
    main: {
      flex: '1',
      '& > *': {
        paddingLeft: '18px',
        paddingRight: '18px',
      },
    },
    title: {
      display: 'flex',
      alignItems: 'center',
      '& h3': {
        marginLeft: '18px',
      },
    },
    img: {
      width: '48px',
      paddingTop: '12px',
      paddingBottom: '12px',
      filter: 'brightness(75%)',
    },
    bottom: {
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'flex-start',
      padding: '12px 18px',
      borderTop: '2px solid rgba(255, 255, 255, .1)',
    },
    expandBtn: {
      background: 'transparent',
      position: 'relative',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'flex-start',
      width: '100%',
      cursor: 'pointer',
      '&:hover': {
        background: 'rgba(255,255,255,.04)',
      },
      '&:active': {
        background: 'rgba(255,255,255,.06)',
      },
      overflow: 'hidden',
    },
    btnIcon: {
      transform: 'rotate(90deg)',
    },
    btnTxt: {
      marginLeft: '18px',
      transition: 'all 0s ease-in-out .2s',
    },
  },
  { name: 'Nav' }
);
