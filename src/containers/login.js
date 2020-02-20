import React, { Component } from 'react';
import Avatar from '@material-ui/core/Avatar';
import Button from '@material-ui/core/Button';
import CssBaseline from '@material-ui/core/CssBaseline';
import TextField from '@material-ui/core/TextField';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Checkbox from '@material-ui/core/Checkbox';
import Link from '@material-ui/core/Link';
import Grid from '@material-ui/core/Grid';
import Box from '@material-ui/core/Box';
import LockOutlinedIcon from '@material-ui/icons/LockOutlined';
import Typography from '@material-ui/core/Typography';
import Container from '@material-ui/core/Container';
import fakeAuth from '../utils/fakeAuth';
import { Redirect } from 'react-router-dom';
import { withStyles } from '@material-ui/core/styles';


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

const useStyles = theme => ({
  paper: {
    marginTop: theme.spacing(8),
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
  },
  avatar: {
    margin: theme.spacing(1),
    backgroundColor: theme.palette.secondary.main,
  },
  form: {
    width: '100%', // Fix IE 11 issue.
    marginTop: theme.spacing(1),
  },
  submit: {
    margin: theme.spacing(3, 0, 2),
  },
});

class SignIn extends Component {
  //const classes = useStyles();
  state = {
    auth: false,
    email: 'Your Email',
    password: 'Password',
  }
  
  login = (e) => {
    e.preventDefault();
    fakeAuth.authenticate(() => {
      this.setState(() => ({
        auth: true
      }))
    })
    console.log(this.state)
  }

  handleChange = (e) => {
    this.setState({[e.target.name]: e.target.value});
    console.log(this.state)
  }
render(){
  
  const { classes } = this.props;
  const { auth } = this.state
    if (auth === true) {
      return <Redirect to='/dashboard' />
    }

  return (
    <Container component="main" maxWidth="xs">
      <CssBaseline />
      <div className={classes.paper}>
        <Avatar className={classes.avatar}>
          <LockOutlinedIcon />
        </Avatar>
        <Typography component="h1" variant="h5">
          Sign in
        </Typography>
        <form onSubmit={this.login} className={classes.form}>
          <TextField
            variant="outlined"
            margin="normal"
            required
            fullWidth
            id="email"
            label="Email Address"
            name="email"
            onChange={this.handleChange}
            value={this.state.email}
            autoComplete="email"
            autoFocus
            error={this.state.email === ""}
            helperText={this.state.email === "" ? 'Empty field!' : ' '}
          />
          <TextField
            variant="outlined"
            margin="normal"
            required
            fullWidth
            name="password"
            label="Password"
            type="password"
            value={this.state.password}
            id="password"
            autoComplete="current-password"
            onChange={this.handleChange}
            error={this.state.password === ""}
            helperText={this.state.password === "" ? 'Empty field!' : ' '}

          />
          <FormControlLabel
            control={<Checkbox value="remember" color="primary" />}
            label="Remember me"
          />
          <Link href="material-ui.com/">
          <Button
            type="submit"
            fullWidth
            variant="contained"
            color="primary"
            className={classes.submit}
            //href='/dashboard'
          >Sign In
          </Button>
          </Link>
          
            
          <Grid container>
            <Grid item xs>
              <Link href="#" variant="body2">
                Forgot password?
              </Link>
            </Grid>
            <Grid item>
              <Link href="#" variant="body2">
                {"Don't have an account? Sign Up"}
              </Link>
            </Grid>
          </Grid>
        </form>
      </div>
      <Box mt={8}>
        <Copyright />
      </Box>
    </Container>
  );
}
  
}

export default withStyles(useStyles)(SignIn);