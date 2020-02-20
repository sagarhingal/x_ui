import React, { Component, Fragment } from 'react';
import Link from '@material-ui/core/Link';
import SignIn from './containers/login';
import Blank from './containers/blank';
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

  constructor(props) {
    super(props)

    this.state = {
    }
  }

 
  render() {

    return (
      <Fragment>
        <Switch>
          {/* <Route path="/dashboard" component={Dashboard} />
          <Route path="/login" component={SignIn} />
          <Route path="/blank" component={Blank} />
          <Route path="/" exact component={Home} /> */}

          <div>
            <ul>
              <li><Link to="/login">Public Page</Link></li>
              <li><Link to="/dashboard">Protected Page</Link></li>
            </ul>
            <Route path="/blank" component={Blank} />
            <Route path="/" component={SignIn} />
            <PrivateRoute path='/dashboard' component={Dashboard} />
          </div>
        </Switch>
      </Fragment>
    );
  }

}

export default withRouter(App)
