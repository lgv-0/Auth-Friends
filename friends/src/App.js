import React from 'react';
import { Router, Route, Switch } from 'react-router';
import { BrowserRouter } from 'react-router-dom';
import Login from './components/login';

function App()
{
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/">

        </Route>

        <Route path="/login">
          <Login />
        </Route>
        
      </Switch>
    </BrowserRouter>
  );
}

export default App;
