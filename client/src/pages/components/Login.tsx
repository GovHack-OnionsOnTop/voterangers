import * as React from 'react'
import store, { RootState } from '../../store'
import { connect } from 'react-redux'
import { login } from '../../store/session/actions'
import { AccessToken } from '../../store/session/reducer'
import { ThunkDispatch } from 'redux-thunk'
import Button from '@material-ui/core/Button';
import { TextField, Container, Typography, Link, CssBaseline,
  FormControlLabel, Grid, Box, Checkbox, CardContent, Card } from '@material-ui/core';
import Skeleton from '@material-ui/lab/Skeleton'
import { Md5 } from 'ts-md5'

interface State {
  email:string
  password:string
}

interface OwnProps {
}

interface DispatchProps {
  login: (email: string, password: string) => void
}

interface StateProps {
  sessionObject: AccessToken
}

type Props = StateProps & DispatchProps & OwnProps

class Copyright extends React.Component {
  render() {
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
}

class Login extends React.Component<Props, State> {

  constructor(prop:Props) {
    super(prop)
    this.state = {
      email: '',
      password: ''
    }

    this.onEmailChange = this.onEmailChange.bind(this)
    this.onPasswordChange = this.onPasswordChange.bind(this)
    this.onSubmit = this.onSubmit.bind(this)
  }
  onSubmit(e:any) {
    e.preventDefault();
    this.props.login(this.state.email, this.state.password)
  }
  onEmailChange(evt: any) {
    this.setState({email: evt.target.value})
  }
  onPasswordChange(evt: any) {
    this.setState({password: Md5.hashStr(evt.target.value).toString()})
  }

  render() {
    return (
      <Container style={{background: "logo192.png"}}>
      <CssBaseline />
      <Card style={{width:"350px", height:"600px", marginLeft: "35%", marginTop: "5%", boxShadow: 'rgba(0, 0, 0, 0.3) 0px 5px 8px 5px'}}>
        <img src="1.png" alt="" style={{marginLeft: "42.5%", marginTop: "10px", borderRadius: 50}} />
        <CardContent>
          <form noValidate>
            <TextField
              variant="outlined"
              margin="normal"
              required
              fullWidth
              id="email"
              label="Email Address"
              name="email"
              autoComplete="email"
              autoFocus
              onChange={this.onEmailChange}
            />
            <TextField
              variant="outlined"
              margin="normal"
              required
              fullWidth
              name="password"
              label="Password"
              type="password"
              id="password"
              autoComplete="current-password"
              onChange={this.onPasswordChange}
            />
            <FormControlLabel
              control={<Checkbox value="remember" color="primary" />}
              label="Remember me"
            />
            <Button
              type="submit"
              fullWidth
              variant="contained"
              color="primary"
              onClick={this.onSubmit}
            >
              {
                this.props.sessionObject.isFetching?
                <Skeleton variant="rect" />
                  :'Sign In'
              }
            </Button>
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
        </CardContent>
      </Card>
      <Box mt={8}>
        <Copyright />
      </Box>
    </Container>
    )
  }
}

const mapStateToProps = (states: RootState, ownProps: OwnProps): StateProps => {
  return {
    sessionObject: states.session.sessionObject
  }
}

const mapDispatchToProps = (dispatch: ThunkDispatch<{}, {}, any>, ownProps: OwnProps): DispatchProps => {
  return {
    login: async (email, password) => {
      await dispatch(login(email, password))
      if(store.getState().session.sessionObject.isError) {
        
      } else {
        localStorage.setItem('user', JSON.stringify(store.getState().session.sessionObject.user))
        localStorage.setItem('accessToken', JSON.stringify(store.getState().session.sessionObject.accessToken))
        window.location.assign("/")
      }
    }
  }
}

export default connect<StateProps, DispatchProps, OwnProps, RootState>(mapStateToProps, mapDispatchToProps)(Login)