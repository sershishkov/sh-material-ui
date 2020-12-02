import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import FooterAdornment from '../../assets/Footer Adornment.svg';

const useStyles = makeStyles((theme) => ({
  footer: {
    backgroundColor: theme.palette.common.blue,
    width: '100%',
    zIndex: 1302,
    position: 'relative',
  },
  adornment: {
    width: '25em',
    verticalAlign: 'bottom',
    [theme.breakpoints.down('md')]: {
      width: '21em',
    },
    [theme.breakpoints.down('xm')]: {
      width: '15em',
    },
  },
}));

const Footer = () => {
  const classes = useStyles();
  return (
    <footer className={classes.footer}>
      <img
        src={FooterAdornment}
        alt='Footer Adornment'
        className={classes.adornment}
      />
    </footer>
  );
};

export default Footer;
