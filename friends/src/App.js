import React from 'react';
import { Route, Switch } from 'react-router';
import { BrowserRouter } from 'react-router-dom';
import Login from './components/login.jsx';
import FriendList from './components/friendList.jsx';
import PrivateRoute from './components/privateRoute';

function App()
{
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/" component={Login} />

        <Route path="/login" component={Login} />
        
        <PrivateRoute path="/friends" component={FriendList} />
      </Switch>
    </BrowserRouter>
  );
}

export default App;
