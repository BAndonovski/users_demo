import React from 'react';
import Button from '@material-ui/core/Button';
import { Redirect } from 'react-router-dom';
import Paper from '@material-ui/core/Paper';
import TextFieldComponent from '../users/text_field_componenet';
import '../../containers/register/styles.css';

const Register = (props) => {
  if (props.changeRoute || props.registerStatus) {
    return <Redirect to="/login" />;
  }
  const passIsEmpty = (props.user.password !== '') && (props.user.password !== undefined);
  const retypedPassIsEmpty = (props.retypedPassword !== '') && (props.retypedPassword !== undefined);
  const passMatch = passIsEmpty && retypedPassIsEmpty &&
  (props.user.password === props.retypedPassword);

  const checking = (props.user.name !== undefined) &&
  (props.user.surname !== undefined) &&
  (props.user.email !== undefined) &&
  (props.user.name !== '') &&
  (props.user.surname !== 'undefined') &&
  (props.user.email !== 'undefined') &&
   passMatch;
  return (
    <Paper style={{
 width: '40%', marginLeft: '30%', padding: 50, marginTop: 100,
}}
    >
      <div className="register_title" >
        Register
      </div>
      <TextFieldComponent
        label="Name"
        placeholder="Name"
        type="text"
        text
        value={props.user.name}
        onChange={(e) => {
          e.preventDefault();
          props.inputNameReg(e.target.value);
        }}
        textFieldBoxStyle={{ display: 'flex', flexDirection: 'row' }}
        labelStyle={{ marginTop: '10px', paddingRight: '20px', width: '175px' }}
        textFieldStyle={{ width: '100%' }}

      />
      {
          props.user.name === '' && <p className="warningMessage">Name is required</p>
            }
      <TextFieldComponent
        label="Surname"
        placeholder="Surname"
        type="text"
        text
        value={props.user.surname}
        onChange={(e) => {
          e.preventDefault();
          props.inputSurnameReg(e.target.value);
        }}
        textFieldBoxStyle={{ display: 'flex', flexDirection: 'row' }}
        labelStyle={{ marginTop: '10px', paddingRight: '20px', width: '175px' }}
        textFieldStyle={{ width: '100%' }}

      />
      {
              props.user.surname === '' && <p className="warningMessage">Surname is required</p>
            }
      <TextFieldComponent
        label="Email"
        placeholder="Email"
        type="text"
        text
        value={props.user.email}
        onChange={(e) => {
          e.preventDefault();
          props.inputEmailReg(e.target.value);
        }}
        textFieldBoxStyle={{ display: 'flex', flexDirection: 'row' }}
        labelStyle={{ marginTop: '10px', paddingRight: '20px', width: '175px' }}
        textFieldStyle={{ width: '100%' }}

      />
      {
              props.user.email === '' && <p className="warningMessage">Email is required</p>
            }
      <TextFieldComponent
        label="Password"
        placeholder="Password"
        type="password"
        text
        value={props.user.password}
        onChange={(e) => {
          e.preventDefault();
          props.inputPasswordReg(e.target.value);
        }}
        textFieldBoxStyle={{ display: 'flex', flexDirection: 'row' }}
        labelStyle={{ marginTop: '10px', paddingRight: '20px', width: '175px' }}
        textFieldStyle={{ width: '100%' }}

      />
      {
              props.user.password === '' && <p className="warningMessage">Passsword is required</p>
            }
      <TextFieldComponent
        label="Retype password"
        placeholder="Password"
        type="password"
        text
        value={props.retypedPassword}
        onChange={(e) => {
          e.preventDefault();
          props.retypePassword(e.target.value);
        }}
        textFieldBoxStyle={{ display: 'flex', flexDirection: 'row' }}
        labelStyle={{ marginTop: '10px', paddingRight: '20px', width: '175px' }}
        textFieldStyle={{ width: '100%' }}
      />
      <div className="register_buttons">
        <Button
          variant="contained"
          type="submit"
          onClick={(e) => {
              e.preventDefault();
              props.handleCancel(props.history.location.pathname);
             }}
          color="secondary"
          style={{ width: '47%' }}
        >
                Cancel
        </Button>
        <Button
          variant="contained"
          disabled={!checking}
          onClick={(e) => {
              e.preventDefault();
              props.register(props.user);
            }}
          color="secondary"
          style={{ width: '47%' }}
        >
                Save
        </Button>
      </div>
    </Paper>
  );
};

export default Register;
