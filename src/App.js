import React , { Component, Fragment } from 'react';
import Container from '@material-ui/core/Container';
import Typography from '@material-ui/core/Typography';
import Box from '@material-ui/core/Box';
import Link from '@material-ui/core/Link';
import SignIn from './containers/login';
import Home from './containers/home';
import Blank from './containers/blank';
import Dashboard from './containers/dashboard';
import { Route, Switch, Redirect, withRouter } from 'react-router-dom';


function Copyright() {
  return (
    <Typography variant="body2" color="textSecondary" align="center">
      {'Copyright © '}
      <Link color="inherit" href="https://material-ui.com/">
        Your Website
      </Link>{' '}
      {new Date().getFullYear()}
      {'.'}
    </Typography>
  );
}



class App extends Component {

  constructor(props){
    super(props)

    this.state = {
      auth: false
    }
  }

  handleClick = () => {
    this.setState({auth: true});
    console.log(this.state.auth)
  }
  render() {
    
    return (
      <Fragment>
        <Switch>
            <Route path="/dashboard" component={Dashboard} />
            <Route path="/login" component={SignIn} />
            <Route path="/blank" component={Blank} />
            <Route path="/" exact component={Home} />
          </Switch>
      
      </Fragment>
    );
  }
  
}

export default withRouter(App)
