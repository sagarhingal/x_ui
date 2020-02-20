import React, { Component, Fragment } from 'react';
import SignIn from './containers/login';
import Blank from './containers/blank';
import Home from './containers/home'
import Dashboard from './containers/dashboard';
import { Route, Switch, Redirect, withRouter } from 'react-router-dom';
import fakeAuth from './utils/fakeAuth';

const PrivateRoute = ({ component: Component, ...rest }) => (
  <Route {...rest} render={(props) => (
    fakeAuth.isAuthenticated === true
      ? <Component {...props} />
      : <Redirect to='/login' />
  )} />
)


class App extends Component {
  render() {

    return (
      <Switch>
        {/* <Route path="/dashboard" component={Dashboard} />
          <Route path="/login" component={SignIn} />
          <Route path="/blank" component={Blank} />
          <Route path="/" exact component={Home} /> */}

        <Fragment>
          <Route path="/login" component={SignIn} />
          <Route path="/blank" component={Blank} />
          <Route path="/" exact component={Home} />
          <PrivateRoute path='/dashboard' component={Dashboard} />
        </Fragment>       
        
         </Switch>

    );
  }

}

export default withRouter(App)
