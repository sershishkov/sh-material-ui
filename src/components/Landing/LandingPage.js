import React from 'react';
import Lottie from 'react-lottie';
import animationData from '../../animations/landinganimation/data.js';
import { Link } from 'react-router-dom';

import { makeStyles, useTheme } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import useMediaQuery from '@material-ui/core/useMediaQuery';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';

import CallToAction from '../callToAction/CallToAction';

import ButtonArrow from '../helper/ButtonArrow';
import customSoftwareIcon from '../../assets/Custom Software Icon.svg';
import mobileAppsIcon from '../../assets/mobileIcon.svg';
import websiteIcon from '../../assets/websiteIcon.svg';
import revolutionBackground from '../../assets/repeatingBackground.svg';
import infoBackground from '../../assets/infoBackground.svg';

const useStyles = makeStyles((theme) => ({
  mainContainer: {
    marginTop: '5em',
    [theme.breakpoints.down('md')]: {
      marginTop: '3em',
    },
    [theme.breakpoints.down('xm')]: {
      marginTop: '1.5em',
    },
  },
  animation: {
    maxWidth: '50em',
    minWidth: '21em',
    marginTop: '2em',
    marginLeft: '10%',
    [theme.breakpoints.down('sm')]: {
      maxWidth: '30em',
    },
  },
  estimateButton: {
    ...theme.typography.estimate,
    backgroundColor: theme.palette.common.orange,
    borderRadius: 50,
    height: 45,
    width: 145,
    marginRight: 40,
    '&:hover': {
      backgroundColor: theme.palette.secondary.light,
    },
  },
  buttonContainer: {
    marginTop: '1em',
  },
  learnButtonHero: {
    ...theme.typography.learnButton,
    fontSize: '0.9rem',
    height: 45,
    width: 145,
  },
  heroTextContainer: {
    minWidth: '21.5em',
    marginLeft: '1em',
    [theme.breakpoints.down('xm')]: {
      marginLeft: 0,
    },
  },
  specialText: {
    fontFamily: 'Pacifico',
    color: theme.palette.common.orange,
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
  subtitle: {
    marginBottom: '1em',
  },
  icon: {
    marginLeft: '2em',
    [theme.breakpoints.down('xm')]: {
      marginLeft: 0,
    },
  },
  servicesContainer: {
    marginTop: '12em',
    [theme.breakpoints.down('sm')]: {
      padding: 25,
    },
  },
  revolutionBackground: {
    backgroundImage: `url(${revolutionBackground})`,
    backgroundPosition: 'center',
    backgroundSize: 'cover',
    backgroundRepeat: 'no-repeat',
    height: '100%',
    width: '100%',
  },
  revolutionCard: {
    position: 'absolute',
    boxShadow: theme.shadows[10],
    borderRadius: 15,
    padding: '10em',
    [theme.breakpoints.down('sm')]: {
      paddingTop: '8em',
      paddingBottom: '8em',
      paddingLeft: 0,
      paddingRight: 0,
      borderRadius: 0,
      width: '100%',
    },
  },
  infoBackground: {
    backgroundImage: `url(${infoBackground})`,
    backgroundPosition: 'center',
    backgroundSize: 'cover',
    backgroundRepeat: 'no-repeat',
    height: '100%',
    width: '100%',
  },
}));

const LandingPage = (props) => {
  const classes = useStyles();
  const theme = useTheme();
  const matchesSM = useMediaQuery(theme.breakpoints.down('sm'));
  const matchesXS = useMediaQuery(theme.breakpoints.down('xs'));

  const defaultOptions = {
    loop: true,
    autoplay: false,
    animationData: animationData,
    rendererSettings: {
      preserveAspectRatio: 'xMidYMid slice',
    },
  };

  return (
    <Grid container direction='column' className={classes.mainContainer}>
      <Grid
        item
        container
        justify='flex-end'
        alignItems='center'
        direction='row'
      >
        {/*-----Hero Block-----*/}
        <Grid sm item className={classes.heroTextContainer}>
          <Typography variant='h2' align='center'>
            Bringing West Coast Technology <br /> to the Midwest{' '}
          </Typography>
          <Grid container justify='center' className={classes.buttonContainer}>
            <Grid item>
              <Button
                variant='contained'
                component={Link}
                to='/estimate'
                className={classes.estimateButton}
                onClick={() => props.setValue(5)}
              >
                Free estimate
              </Button>
            </Grid>
            <Grid item>
              <Button
                variant='outlined'
                component={Link}
                to='/revolution'
                className={classes.learnButtonHero}
                onClick={() => props.setValue(2)}
              >
                <span style={{ marginRight: 10 }}> Learn more</span>
                <ButtonArrow
                  width={15}
                  height={15}
                  fill={theme.palette.common.blue}
                />{' '}
              </Button>
            </Grid>
          </Grid>
        </Grid>

        <Grid sm item className={classes.animation}>
          <Lottie options={defaultOptions} height={'100%'} width={'100%'} />;
        </Grid>
      </Grid>

      {/*-----Custom Sofware Block-----*/}
      <Grid
        item
        container
        direction='row'
        justify={matchesSM ? 'center' : undefined}
        className={classes.servicesContainer}
      >
        <Grid
          item
          style={{
            marginLeft: matchesSM ? 0 : '5em',
            textAlign: matchesSM ? 'center' : undefined,
          }}
        >
          <Typography variant='h4'>Custom Software Development</Typography>
          <Typography variant='subtitle1' className={classes.subtitle}>
            Save Energy. Save time.Save money.
          </Typography>
          <Typography variant='subtitle1'>
            Complete digital solution, from inestigation to{' '}
            <span className={classes.specialText}>celebration.</span>
          </Typography>
          <Button
            variant='outlined'
            component={Link}
            to='/customsofware'
            className={classes.learnButton}
            onClick={() => {
              props.setValue(1);
              props.setSelectedIndex(1);
            }}
          >
            <span style={{ marginRight: 10 }}> Learn more</span>
            <ButtonArrow
              width={10}
              height={10}
              fill={theme.palette.common.blue}
            />
          </Button>
        </Grid>
        <Grid item>
          <img
            className={classes.icon}
            src={customSoftwareIcon}
            alt='Software Icon'
          />
        </Grid>
      </Grid>

      {/*-----iOS/Android Block-----*/}
      <Grid
        item
        container
        direction='row'
        justify={matchesSM ? 'center' : 'flex-end'}
        className={classes.servicesContainer}
      >
        <Grid
          item
          style={{
            marginLeft: matchesSM ? 0 : '5em',
            textAlign: matchesSM ? 'center' : undefined,
          }}
        >
          <Typography variant='h4'>iOS/Android App Development</Typography>
          <Typography variant='subtitle1' className={classes.subtitle}>
            Extend functionality.Extend Acces. Increase Engagement
          </Typography>
          <Typography variant='subtitle1'>
            Integrate your web experience or create a standalone app
            {matchesSM ? null : <br />} with either mobile platform
          </Typography>
          <Button
            variant='outlined'
            component={Link}
            to='/mobileapps'
            className={classes.learnButton}
            onClick={() => {
              props.setValue(1);
              props.setSelectedIndex(2);
            }}
          >
            <span style={{ marginRight: 10 }}> Learn more</span>
            <ButtonArrow
              width={10}
              height={10}
              fill={theme.palette.common.blue}
            />
          </Button>
        </Grid>
        <Grid
          item
          style={{
            marginRight: matchesSM ? 0 : '5em',
          }}
        >
          <img
            className={classes.icon}
            src={mobileAppsIcon}
            alt='Mobile phone Icon'
          />
        </Grid>
      </Grid>

      {/*-----Websites Block-----*/}
      <Grid
        item
        container
        direction='row'
        justify={matchesSM ? 'center' : undefined}
        className={classes.servicesContainer}
      >
        <Grid
          item
          style={{
            marginLeft: matchesSM ? 0 : '5em',
            textAlign: matchesSM ? 'center' : undefined,
          }}
        >
          <Typography variant='h4'>Website Development</Typography>
          <Typography variant='subtitle1' className={classes.subtitle}>
            Reach more. Discover more. Sell more
          </Typography>
          <Typography variant='subtitle1'>
            Optimazed for Search Engines? built for speed.
          </Typography>
          <Button
            variant='outlined'
            component={Link}
            to='/websites'
            className={classes.learnButton}
            onClick={() => {
              props.setValue(1);
              props.setSelectedIndex(3);
            }}
          >
            <span style={{ marginRight: 10 }}> Learn more</span>
            <ButtonArrow
              width={10}
              height={10}
              fill={theme.palette.common.blue}
            />
          </Button>
        </Grid>
        <Grid item>
          <img className={classes.icon} src={websiteIcon} alt='Website Icon' />
        </Grid>
      </Grid>

      {/*-----Revolution Block-----*/}
      <Grid item>
        <Grid
          container
          justify='center'
          alignItems='center'
          style={{ height: '100em', marginTop: '12em' }}
        >
          <Card className={classes.revolutionCard}>
            <CardContent>
              <Grid
                container
                direction='column'
                style={{ textAlign: 'center' }}
              >
                <Grid item>
                  <Typography variant='h3' gutterBottom>
                    The Revolution
                  </Typography>
                </Grid>
                <Grid item>
                  <Typography variant='subtitle1'>
                    Visionary insights coupled with cutting-edge technology is a
                    recipe for revolution
                  </Typography>
                  <Button
                    variant='outlined'
                    className={classes.learnButtonHero}
                    component={Link}
                    to='/revolution'
                    onClick={() => {
                      props.setValue(2);
                    }}
                  >
                    <span style={{ marginRight: 10 }}> Learn more</span>
                    <ButtonArrow
                      width={15}
                      height={15}
                      fill={theme.palette.common.blue}
                    />{' '}
                  </Button>
                </Grid>
              </Grid>
            </CardContent>
          </Card>
          <div className={classes.revolutionBackground} />
        </Grid>
      </Grid>

      {/*-----Information Block-----*/}
      <Grid item>
        <Grid
          container
          direction='row'
          style={{ height: '80em' }}
          alignItems='center'
          // spacing={matchesXS ? 10 : 0}
          className={classes.infoBackground}
        >
          <Grid
            item
            container
            style={{
              textAlign: matchesXS ? 'center' : 'inherit',
            }}
            direction={matchesXS ? 'column' : 'row'}
          >
            <Grid
              item
              sm
              style={{ marginLeft: matchesXS ? 0 : matchesSM ? '2em' : '5em' }}
            >
              <Grid
                container
                style={{ marginBottom: matchesXS ? '10em' : 0 }}
                direction='column'
              >
                <Typography variant='h2' style={{ color: 'white' }}>
                  About Us
                </Typography>
                <Typography variant='subtitle2'>Let's get personal.</Typography>
                <Grid item>
                  <Button
                    variant='outlined'
                    className={classes.learnButton}
                    style={{ color: 'white', borderColor: 'white' }}
                    component={Link}
                    to='/about'
                    onClick={() => {
                      props.setValue(3);
                    }}
                  >
                    <span style={{ marginRight: 10 }}> Learn more</span>
                    <ButtonArrow width={10} height={10} fill='white' />
                  </Button>
                </Grid>
              </Grid>
            </Grid>
            <Grid
              item
              sm
              style={{
                marginRight: matchesXS ? 0 : matchesSM ? '2em' : '5em',
                textAlign: matchesXS ? 'center' : 'right',
              }}
            >
              <Grid container direction='column'>
                <Typography variant='h2' style={{ color: 'white' }}>
                  Contact Us
                </Typography>
                <Typography variant='subtitle2'>Say hello.</Typography>
                <Grid item>
                  <Button
                    variant='outlined'
                    className={classes.learnButton}
                    style={{ color: 'white', borderColor: 'white' }}
                    component={Link}
                    to='/contact'
                    onClick={() => {
                      props.setValue(4);
                    }}
                  >
                    <span style={{ marginRight: 10 }}> Learn more</span>
                    <ButtonArrow width={10} height={10} fill='white' />
                  </Button>
                </Grid>
              </Grid>
            </Grid>
          </Grid>
        </Grid>
      </Grid>

      {/*----Call to Action Block-----*/}
      <Grid item>
        <CallToAction setValue={props.setValue} />
      </Grid>
    </Grid>
  );
};

export default LandingPage;
