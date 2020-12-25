import React, { useState } from 'react';
import { Link } from 'react-router-dom';

import { makeStyles, useTheme } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import useMediaQuery from '@material-ui/core/useMediaQuery';

import background from '../../assets/background.jpg';
import phoneIcon from '../../assets/phone.svg';
import emailIcon from '../../assets/email.svg';
import airplane from '../../assets/send.svg';
import ButtonArrow from '../helper/ButtonArrow';

const useStyles = makeStyles((theme) => ({
  rowContainer: {
    paddingLeft: '5em',
    paddingRight: '5em',
    [theme.breakpoints.down('sm')]: {
      paddingLeft: '1.5em',
      paddingRight: '1.5em',
    },
  },
  background: {
    backgroundImage: `url(${background})`,
    backgroundPosition: 'center',
    backgroundSize: 'cover',
    backgroundRepeat: 'no-repeat',
    height: '60em',
    // width: '100%',
    paddingBottom: '10em',
  },
  estimateButton: {
    ...theme.typography.estimate,
    borderRadius: 50,
    height: 80,
    width: 205,
    backgroundColor: theme.palette.common.orange,
    fontSize: '1.5rem',
    marginRight: '5em',
    marginLeft: '2em',
    '&:hover': {
      backgroundColor: theme.palette.secondary.light,
    },
    [theme.breakpoints.down('sm')]: {
      marginRight: 0,
      marginLeft: 0,
    },
  },
  learnButton: {
    ...theme.typography.learnButton,
    fontSize: '0.7rem',
    height: 35,
    padding: 5,
    [theme.breakpoints.down('sm')]: {
      marginBottom: '2em',
    },
  },
  message: {
    border: `2px solid ${theme.palette.common.blue}`,
    marginTop: '5em',
    borderRadius: 5,
  },
  sendButton: {
    ...theme.typography.estimate,
    borderRadius: 50,
    height: 45,
    width: 245,
    fontSize: '1rem',
    backgroundColor: theme.palette.common.orange,
    '&:hover': {
      backgroundColor: theme.palette.secondary.light,
    },
  },
}));

const Contact = (props) => {
  const classes = useStyles();
  const theme = useTheme();
  // const matchesMD = useMediaQuery(theme.breakpoints.down('md'));
  const matchesSM = useMediaQuery(theme.breakpoints.down('sm'));
  // const matchesXS = useMediaQuery(theme.breakpoints.down('xs'));

  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [message, setMessage] = useState('');

  return (
    <Grid container direction='row'>
      <Grid
        item
        container
        direction='column'
        justify='center'
        alignItems='center'
        lg={4}
        xl={3}
      >
        <Grid item>
          <Grid container direction='column'>
            <Grid item>
              <Typography variant='h2' style={{ lineHeight: 1 }}>
                Contuct Us
              </Typography>
              <Typography
                variant='body1'
                style={{ color: theme.palette.common.blue }}
              >
                We're waiting.
              </Typography>
            </Grid>
            <Grid item container style={{ marginTop: '2em' }}>
              <Grid item>
                <img
                  src={phoneIcon}
                  alt='phone'
                  style={{ marginRight: '0.5em' }}
                />
              </Grid>
              <Grid item>
                <Typography
                  variant='body1'
                  style={{ color: theme.palette.common.blue, fontSize: '1rem' }}
                >
                  (555) 555-5555
                </Typography>
              </Grid>
            </Grid>
            <Grid item container style={{ marginBottom: '2em' }}>
              <Grid item>
                <img
                  src={emailIcon}
                  alt='envelope'
                  style={{ marginRight: '0.5em', verticalAlign: 'bottom' }}
                />
              </Grid>
              <Grid item>
                <Typography
                  variant='body1'
                  style={{ color: theme.palette.common.blue, fontSize: '1rem' }}
                >
                  zachary@gmail.com
                </Typography>
              </Grid>
            </Grid>
            <Grid item container style={{ maxWidth: '20em' }}>
              <Grid item>
                <TextField
                  label='Name'
                  id='name'
                  value={name}
                  onChange={(event) => {
                    setName(event.target.value);
                  }}
                />
              </Grid>
              <Grid item>
                <TextField
                  label='Email'
                  id='email'
                  value={email}
                  onChange={(event) => {
                    setEmail(event.target.value);
                  }}
                />
              </Grid>
              <Grid item>
                <TextField
                  label='Phone'
                  id='phone'
                  value={phone}
                  onChange={(event) => {
                    setPhone(event.target.value);
                  }}
                />
              </Grid>
            </Grid>
            <Grid item style={{ maxWidth: '20em' }}>
              <TextField
                InputProps={{ disableUnderline: true }}
                className={classes.message}
                id='message'
                multiline
                rows={10}
                value={message}
                onChange={(event) => {
                  setMessage(event.target.value);
                }}
              />
            </Grid>
            <Grid item container justify='center' style={{ marginTop: '2em' }}>
              <Button variant='contained' className={classes.sendButton}>
                Send Message{' '}
                <img
                  src={airplane}
                  alt='paper airplane'
                  style={{ marginLeft: '1em' }}
                />{' '}
              </Button>
            </Grid>
          </Grid>
        </Grid>
      </Grid>
      <Grid
        item
        container
        className={classes.background}
        alignItems='center'
        lg={8}
        xl={9}
      >
        <Grid
          item
          style={{
            marginLeft: matchesSM ? 0 : '3em',
            textAlign: matchesSM ? 'center' : 'inherit',
          }}
        >
          <Grid container direction='column'>
            <Grid item>
              <Typography variant='h2'>
                Simple software. <br /> Revolutionary Results.
              </Typography>
              <Typography variant='subtitle2' style={{ fontSize: '1.5rem' }}>
                Take advantage of the 21st Century
              </Typography>
              <Grid container item justify={matchesSM ? 'center' : undefined}>
                <Button
                  variant='outlined'
                  component={Link}
                  to='/revolution'
                  className={classes.learnButton}
                  onClick={() => {
                    props.setValue(2);
                  }}
                >
                  <span style={{ marginRight: 5 }}> Learn more</span>
                  <ButtonArrow
                    width={10}
                    height={10}
                    fill={theme.palette.common.blue}
                  />
                </Button>
              </Grid>
            </Grid>
          </Grid>
        </Grid>
        <Grid item>
          <Button
            variant='contained'
            component={Link}
            to='/estimate'
            className={classes.estimateButton}
            onClick={() => {
              props.setValue(5);
            }}
          >
            Free Estimate
          </Button>
        </Grid>
      </Grid>
    </Grid>
  );
};

export default Contact;
