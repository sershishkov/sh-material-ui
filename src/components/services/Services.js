import React from 'react';
import { Link } from 'react-router-dom';
import { makeStyles, useTheme } from '@material-ui/core/styles';

import Grid from '@material-ui/core/Grid';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import useMediaQuery from '@material-ui/core/useMediaQuery';

import ButtonArrow from '../helper/ButtonArrow';
import customSoftwareIcon from '../../assets/Custom Software Icon.svg';
import mobileAppsIcon from '../../assets/mobileIcon.svg';
import websiteIcon from '../../assets/websiteIcon.svg';

const useStyles = makeStyles((theme) => ({
  specialText: {
    fontFamily: 'Pacifico',
    color: theme.palette.common.orange,
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
  learnButton: {
    ...theme.typography.learnButton,
    fontSize: '0.7rem',
    height: 35,
    padding: 5,
    [theme.breakpoints.down('sm')]: {
      marginBottom: '2em',
    },
  },
}));

const Services = (props) => {
  const classes = useStyles();
  const theme = useTheme();
  const matchesSM = useMediaQuery(theme.breakpoints.down('sm'));
  // const matchesXS = useMediaQuery(theme.breakpoints.down('xs'));

  return (
    <Grid container direction='column'>
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

      {/*-----Websites Block-----*/}
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
            // marginLeft: matchesSM ? 0 : '5em',
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
        <Grid item style={{ marginRight: matchesSM ? 0 : '5em' }}>
          <img className={classes.icon} src={websiteIcon} alt='Website Icon' />
        </Grid>
      </Grid>
    </Grid>
  );
};

export default Services;
