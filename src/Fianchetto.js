import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import { Home, About, Game } from './components';
import { ChakraProvider } from "@chakra-ui/react";

function Fianchetto() {

  return (
    <ChakraProvider>
      <div className='Fianchetto'>
        <Router>
          <Switch>
            <Route path='/' exact component={() => <Home />} />
            <Route path='/About' exact component={() => <About />} />
            <Route path='/Game' exact component={() => <Game />} />
          </Switch>
        </Router>
      </div>
    </ChakraProvider >
  );
}

export default Fianchetto;
