import clsx from 'clsx';
import React from 'react';
import { createUseStyles } from 'react-jss';
import { NavLink } from 'react-router-dom';

interface NavOptionProps {
  to: string;
  icon: string;
  name: string;
}

export const NavOption: React.FC<NavOptionProps> = ({
  to,
  icon,
  name,
  children,
}) => {
  const classes = useStyles();

  const getRootClassName = ({ isActive }: { isActive: boolean }) => {
    return clsx(classes.root, {
      [classes.active]: isActive,
    });
  };

  return (
    <NavLink to={to} className={getRootClassName} title={name}>
      <span className={clsx(classes.icon, 'material-icons')}>{icon}</span>
      <span className={classes.text}>{children}</span>
    </NavLink>
  );
};

const useStyles = createUseStyles(
  {
    root: {
      width: '100%',
      display: 'flex',
      alignItems: 'center',
      boxSizing: 'border-box',
      height: '56px',
      textDecoration: 'none',
      overflow: 'hidden',
      background: '#131924',
      '&:hover': {
        filter: 'brightness(120%)',
      },
      '&:active': {
        filter: 'brightness(130%)',
      },
    },
    text: {
      marginLeft: '18px',
    },
    active: {
      background: '#171E2b',
      '&:hover': {
        filter: 'brightness(110%)',
      },
      '&:active': {
        filter: 'brightness(120%)',
      },
    },
    icon: {
      boxSizing: 'border-box',
      width: '45px',
      minWidth: '45px',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
    },
  },
  { name: 'NavOption' }
);
