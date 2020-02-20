import React , { Component, Fragment } from 'react';
import Container from '@material-ui/core/Container';
import Box from '@material-ui/core/Box';
import SignIn from './login';
import { withRouter } from 'react-router-dom';



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
        <Container maxWidth="sm">
        <Box my={4}>
          <SignIn/>
        </Box>
      </Container>
      
      </Fragment>
    );
  }
  
}

export default withRouter(App)


