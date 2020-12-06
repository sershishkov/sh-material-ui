import { createMuiTheme } from '@material-ui/core/styles';

const arcBlue = '#0b72b9';
const arcOrange = '#ffba60';

export default createMuiTheme({
  palette: {
    common: {
      blue: arcBlue,
      orange: arcOrange,
    },
    primary: {
      main: arcBlue,
    },
    secondary: {
      main: arcOrange,
    },
  },
  typography: {
    tab: {
      fontFamily: 'Raleway',
      textTransform: 'none',
      fontWeight: 700,
      fontSize: '1rem',
    },
    estimate: {
      fontFamily: 'Pacifico',
      fontSize: '1rem',
      textTransform: 'none',
      color: 'white',
    },
    h2: {
      fontFamily: 'Raleway',
      fontWeight: 700,
      fontSize: '2.5rem',
      color: arcBlue,
      lineHeight: 1.5,
    },
    h3: {
      fontFamily: 'Pacifico',
      fontWeight: 700,
      fontSize: '2.3rem',
      color: arcBlue,
    },
    h4: {
      fontFamily: 'Raleway',
      fontWeight: 700,
      fontSize: '1.75rem',
      color: arcBlue,
    },
    subtitle1: {
      fontFamily: 'Raleway',
      fontWeight: 300,
      fontSize: '1.25rem',
      color: arcBlue,
    },
    subtitle2: {},
  },
});
