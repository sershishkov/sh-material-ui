import React from 'react';
import { ThemeProvider } from '@material-ui/styles';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

import theme from './ui/Theme';
import Header from './ui/Header';
import Footer from './ui/Footer';

function App() {
  return (
    <ThemeProvider theme={theme}>
      <BrowserRouter>
        <Header />
        <Switch>
          <Route exact path='/' component={() => <div>Home</div>} />
          <Route exact path='/services' component={() => <div>services</div>} />
          <Route
            exact
            path='/customsofware'
            component={() => <div>customsofware</div>}
          />
          <Route
            exact
            path='/mobileapps'
            component={() => <div>mobileapps</div>}
          />
          <Route exact path='/websites' component={() => <div>websites</div>} />
          <Route
            exact
            path='/revolution'
            component={() => <div>revolution</div>}
          />
          <Route exact path='/about' component={() => <div>about</div>} />
          <Route exact path='/contact' component={() => <div>contact</div>} />
          <Route exact path='/estimate' component={() => <div>estimate</div>} />
        </Switch>
        <Footer />
      </BrowserRouter>
    </ThemeProvider>
  );
}

export default App;
