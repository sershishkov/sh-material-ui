import React, { useState } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';

import { makeStyles, useTheme } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import useMediaQuery from '@material-ui/core/useMediaQuery';
import Dialog from '@material-ui/core/Dialog';
import DialogContent from '@material-ui/core/DialogContent';
import Snackbar from '@material-ui/core/Snackbar';
import CircularProgress from '@material-ui/core/CircularProgress';

import background from '../../assets/background.jpg';
import mobileBackground from '../../assets/mobileBackground.jpg';
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
    [theme.breakpoints.down('md')]: {
      backgroundImage: `url(${mobileBackground})`,
    },
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
    [theme.breakpoints.down('md')]: {
      marginRight: 0,
      marginLeft: 0,
    },
  },
  learnButton: {
    ...theme.typography.learnButton,
    fontSize: '0.7rem',
    height: 35,
    padding: 5,
    [theme.breakpoints.down('md')]: {
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
    [theme.breakpoints.down('sm')]: {
      height: 40,
      width: 225,
    },
  },
}));

const Contact = (props) => {
  const classes = useStyles();
  const theme = useTheme();
  const matchesMD = useMediaQuery(theme.breakpoints.down('md'));
  const matchesSM = useMediaQuery(theme.breakpoints.down('sm'));
  const matchesXS = useMediaQuery(theme.breakpoints.down('xs'));

  const [name, setName] = useState('');
  // const [nameHelper, setNameHelper] = useState('');

  const [email, setEmail] = useState('');
  const [emailHelper, setEmailHelper] = useState('');

  const [phone, setPhone] = useState('');
  const [phoneHelper, setPhoneHelper] = useState('');

  const [message, setMessage] = useState('');
  // const [messageHelper, setMessageHelper] = useState('');

  const [open, setOpen] = useState(false);
  const [loading, setLoading] = useState(false);

  const [alert, setAlert] = useState({
    open: false,
    message: '',
    backgroundColor: '',
  });

  const onChange = (event) => {
    let valid;

    switch (event.target.id) {
      case 'email':
        setEmail(event.target.value);
        valid = /^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/.test(
          event.target.value
        );
        if (!valid) {
          setEmailHelper('Invalid email');
        } else {
          setEmailHelper('');
        }
        break;
      case 'phone':
        setPhone(event.target.value);
        valid = /^\(?([0-9]{3})\)?[-. ]?([0-9]{3})[-. ]?([0-9]{4})$/.test(
          event.target.value
        );
        if (!valid) {
          setPhoneHelper('Invalid phone');
        } else {
          setPhoneHelper('');
        }
        break;

      default:
        break;
    }
  };

  const onConfirm = async () => {
    setLoading(true);

    try {
      const resUlt = await axios.get(
        'https://media.giphy.com/media/mBecQhXXSsyYYLABlH/giphy.gif',
        {
          params: {
            name: name,
            email: email,
            phone: phone,
            message: message,
          },
        }
      );
      console.log(resUlt);
      setLoading(false);
      setOpen(false);
      setName('');
      setEmail('');
      setPhone('');
      setMessage('');
      setAlert({
        open: true,
        message: 'Message sent successfully',
        backgroundColor: '#4bb543',
      });
    } catch (error) {
      setLoading(false);
      console.error(error);
      setAlert({
        open: true,
        message: 'Something went wrong, please try again',
        backgroundColor: '#ff3232',
      });
    }
  };

  const buttonContents = (
    <React.Fragment>
      Send Message{' '}
      <img src={airplane} alt='paper airplane' style={{ marginLeft: '1em' }} />{' '}
    </React.Fragment>
  );

  return (
    <Grid container direction='row'>
      <Grid
        item
        container
        direction='column'
        justify='center'
        alignItems='center'
        style={{
          marginBottom: matchesMD ? '5em' : 0,
          marginTop: matchesSM ? '1em' : matchesMD ? '5em' : 0,
        }}
        lg={4}
        xl={3}
      >
        <Grid item>
          <Grid container direction='column'>
            <Grid item>
              <Typography
                align={matchesMD ? 'center' : undefined}
                variant='h2'
                style={{ lineHeight: 1 }}
              >
                Contuct Us
              </Typography>
              <Typography
                align={matchesMD ? 'center' : undefined}
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
                  <a
                    href='tel:5555555555'
                    style={{ textDecoration: 'none', color: 'inherit' }}
                  >
                    (555) 555-5555
                  </a>
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
                  <a
                    href='mailto:zachary@gmail.com'
                    style={{ textDecoration: 'none', color: 'inherit' }}
                  >
                    zachary@gmail.com
                  </a>
                </Typography>
              </Grid>
            </Grid>

            <Grid
              item
              container
              direction='column'
              style={{ maxWidth: '20em' }}
            >
              <Grid item style={{ marginBottom: '0.5em' }}>
                <TextField
                  label='Name'
                  // error
                  // helperText='Please enter a name'
                  id='name'
                  fullWidth
                  value={name}
                  onChange={(event) => {
                    setName(event.target.value);
                  }}
                />
              </Grid>
              <Grid item style={{ marginBottom: '0.5em' }}>
                <TextField
                  label='Email'
                  error={emailHelper.length !== 0}
                  helperText={emailHelper}
                  id='email'
                  fullWidth
                  value={email}
                  onChange={onChange}
                />
              </Grid>
              <Grid item style={{ marginBottom: '0.5em' }}>
                <TextField
                  label='Phone'
                  error={phoneHelper.length !== 0}
                  helperText={phoneHelper}
                  id='phone'
                  fullWidth
                  value={phone}
                  onChange={onChange}
                />
              </Grid>
            </Grid>
            <Grid item style={{ maxWidth: '20em' }}>
              <TextField
                InputProps={{ disableUnderline: true }}
                className={classes.message}
                id='message'
                multiline
                placeholder='Tell us more about your project'
                fullWidth
                rows={10}
                value={message}
                onChange={(event) => {
                  setMessage(event.target.value);
                }}
              />
            </Grid>

            <Grid item container justify='center' style={{ marginTop: '2em' }}>
              <Button
                disabled={
                  name.length === 0 ||
                  message.length === 0 ||
                  email.length === 0 ||
                  phone.length === 0 ||
                  phoneHelper.length !== 0 ||
                  emailHelper.length !== 0
                }
                variant='contained'
                className={classes.sendButton}
                onClick={() => setOpen(true)}
              >
                {buttonContents}
              </Button>
            </Grid>
          </Grid>
        </Grid>
      </Grid>

      <Dialog
        style={{ zIndex: 1302 }}
        open={open}
        fullScreen={matchesSM}
        onClose={() => setOpen(false)}
        PaperProps={{
          style: {
            paddingTop: matchesXS ? '1em' : '5em',
            paddingLeft: matchesXS
              ? 0
              : matchesSM
              ? '5em'
              : matchesMD
              ? '15em'
              : '25em',
            paddingRight: matchesXS
              ? 0
              : matchesSM
              ? '5em'
              : matchesMD
              ? '15em'
              : '25em',
            paddingBottom: matchesXS ? '1em' : '5em',
          },
        }}
      >
        <DialogContent>
          <Grid container direction='column'>
            <Grid item>
              <Typography align='center' variant='h4' gutterBottom>
                Confirm message
              </Typography>
            </Grid>

            <Grid item style={{ marginBottom: '0.5em' }}>
              <TextField
                label='Name'
                // error
                // helperText='Please enter a name'
                id='name'
                fullWidth
                value={name}
                onChange={(event) => {
                  setName(event.target.value);
                }}
              />
            </Grid>
            <Grid item style={{ marginBottom: '0.5em' }}>
              <TextField
                label='Email'
                error={emailHelper.length !== 0}
                helperText={emailHelper}
                id='email'
                fullWidth
                value={email}
                onChange={onChange}
              />
            </Grid>
            <Grid item style={{ marginBottom: '0.5em' }}>
              <TextField
                label='Phone'
                error={phoneHelper.length !== 0}
                helperText={phoneHelper}
                id='phone'
                fullWidth
                value={phone}
                onChange={onChange}
              />
            </Grid>

            <Grid item style={{ width: matchesSM ? '100%' : '20em' }}>
              <TextField
                InputProps={{ disableUnderline: true }}
                className={classes.message}
                id='message'
                multiline
                fullWidth
                rows={10}
                value={message}
                onChange={(event) => {
                  setMessage(event.target.value);
                }}
              />
            </Grid>
            <Grid
              item
              container
              direction={matchesSM ? 'column' : 'row'}
              style={{ marginTop: '2em' }}
              alignItems='center'
            >
              <Grid item>
                <Button
                  color='primary'
                  onClick={() => setOpen(false)}
                  style={{ fontWeight: 300 }}
                >
                  Cancel
                </Button>
              </Grid>
              <Grid item>
                <Button
                  disabled={
                    name.length === 0 ||
                    message.length === 0 ||
                    email.length === 0 ||
                    phone.length === 0 ||
                    phoneHelper.length !== 0 ||
                    emailHelper.length !== 0
                  }
                  variant='contained'
                  className={classes.sendButton}
                  onClick={onConfirm}
                >
                  {loading ? <CircularProgress size={30} /> : buttonContents}
                </Button>
              </Grid>
            </Grid>
          </Grid>
        </DialogContent>
      </Dialog>

      <Snackbar
        open={alert.open}
        message={alert.message}
        ContentProps={{ style: { backgroundColor: alert.backgroundColor } }}
        anchorOrigin={{ vertical: 'top', horizontal: 'center' }}
        onClose={() => setAlert({ ...alert, open: false })}
        autoHideDuration={5000}
      ></Snackbar>

      <Grid
        item
        container
        direction={matchesMD ? 'column' : 'row'}
        className={classes.background}
        alignItems='center'
        justify={matchesMD ? 'center' : undefined}
        lg={8}
        xl={9}
      >
        <Grid
          item
          style={{
            marginLeft: matchesMD ? 0 : '3em',
            textAlign: matchesMD ? 'center' : 'inherit',
          }}
        >
          <Grid container direction='column'>
            <Grid item>
              <Typography align={matchesMD ? 'center' : undefined} variant='h2'>
                Simple software. <br /> Revolutionary Results.
              </Typography>
              <Typography
                variant='subtitle2'
                align={matchesMD ? 'center' : undefined}
                style={{ fontSize: '1.5rem' }}
              >
                Take advantage of the 21st Century
              </Typography>
              <Grid container item justify={matchesMD ? 'center' : undefined}>
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
