import React from 'react';
import Paper from '@material-ui/core/Paper';
import TextField from '@material-ui/core/TextField';
import { Link, Redirect } from 'react-router-dom';
import Button from '@material-ui/core/Button';
import '../../containers/log_in/styles.css';

const LogIn = (props) => {
  if (props.logInStatus === 200) {
    return <Redirect to="/home" />;
  }
  return (
    <Paper style={{
 width: '40%', marginLeft: '30%', marginTop: 100, padding: 50, textAlign: 'center',
}}
    >
      <div className="log_in_title">
    Log in
      </div>
      <div className="input_box">
        <TextField
          id="email"
          label="E-mail"
          margin="normal"
          value={props.user.email}
          onChange={(e) => {
            e.preventDefault();
            props.inputEmail(e.target.value);
          }}
        />
        <TextField
          id="pass"
          label="Password"
          margin="normal"
          type="password"
          value={props.user.password}
          onChange={(e) => {
            e.preventDefault();
            props.inputPassword(e.target.value);
            }}
        />
      </div>
      { props.logInStatus === 401 && <p className="tryAgainMessage">Please try again! Wrong email or password.</p>
  }
      <Button
        style={{ marginTop: 40, alignSelf: 'center' }}
        color="secondary"
        variant="contained"
        fullWidth
        onClick={(e) => {
            e.preventDefault();
            props.logIn(props.user.email, props.user.password);
          }}
      >
        Log in
      </Button>
      <p className="register_here">Not register yet? <Link to="/register"><span>Register here</span></Link></p>
    </Paper>
  );
};
export default LogIn;
