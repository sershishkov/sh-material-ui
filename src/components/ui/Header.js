import React, { useState, useEffect } from 'react';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import useScrollTrigger from '@material-ui/core/useScrollTrigger';
import { makeStyles } from '@material-ui/core/styles';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import Button from '@material-ui/core/Button';
import { Link } from 'react-router-dom';

import logo from '../../assets/logo.svg';

function ElevationScroll(props) {
  const { children } = props;
  const trigger = useScrollTrigger({
    disableHysteresis: true,
    threshold: 0,
  });

  return React.cloneElement(children, {
    elevation: trigger ? 4 : 0,
  });
}

const useStyles = makeStyles((theme) => ({
  toolbarMargin: {
    ...theme.mixins.toolbar,
    marginBottom: '3em',
  },
  logo: {
    height: '8em',
  },
  logoContainer: {
    padding: 0,
    '&:hover': {
      backgroundColor: 'transparent',
    },
  },
  tabContainer: {
    marginLeft: 'auto',
  },
  tab: {
    ...theme.typography.tab,
    minWidth: 10,
    marginLeft: '25px',
  },
  button: {
    ...theme.typography.estimate,
    borderRadius: '50px',
    marginRight: '50px',
    marginLeft: '25px',
    height: '45px',
  },
}));

// function a11yProps(index) {
//   return {
//     id: `simple-tab-${index}`,
//     'aria-controls': `simple-tabpanel-${index}`,
//   };
// }

function Header() {
  const classes = useStyles();
  const [value, setValue] = useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  useEffect(() => {
    if (window.location.pathname === '/' && value !== 0) {
      setValue(0);
    } else if (window.location.pathname === '/services' && value !== 1) {
      setValue(1);
    } else if (window.location.pathname === '/revolution' && value !== 2) {
      setValue(2);
    } else if (window.location.pathname === '/about' && value !== 3) {
      setValue(3);
    } else if (window.location.pathname === '/contact' && value !== 4) {
      setValue(4);
    }
    //  else if (window.location.pathname === '/estimate' && value !== 5) {
    //   setValue(5);
    // }
  }, [value]);

  return (
    <React.Fragment>
      <ElevationScroll>
        <AppBar>
          <Toolbar disableGutters>
            <Button
              className={classes.logoContainer}
              component={Link}
              to='/'
              onClick={() => setValue(0)}
              disableRipple
            >
              <img src={logo} alt='company logo' className={classes.logo} />
            </Button>

            <Tabs
              value={value}
              onChange={handleChange}
              className={classes.tabContainer}
              indicatorColor='primary'
            >
              <Tab
                label='Home'
                className={classes.tab}
                component={Link}
                to='/'
              />
              <Tab
                label='Services'
                className={classes.tab}
                component={Link}
                to='/services'
              />
              <Tab
                label='The revolution'
                className={classes.tab}
                component={Link}
                to='/revolution'
              />
              <Tab
                label='About us'
                className={classes.tab}
                component={Link}
                to='/about'
              />
              <Tab
                label='Contact us'
                className={classes.tab}
                component={Link}
                to='/contact'
              />
            </Tabs>
            <Button
              className={classes.button}
              variant='contained'
              color='secondary'
              component={Link}
              to='/estimate'
            >
              Free Estimate
            </Button>
          </Toolbar>
        </AppBar>
      </ElevationScroll>
      <div className={classes.toolbarMargin} />
    </React.Fragment>
  );
}

export default Header;
