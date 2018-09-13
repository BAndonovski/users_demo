import React from 'react';
import Dialog from '@material-ui/core/Dialog';
import DialogTitle from '@material-ui/core/DialogTitle';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import Button from '@material-ui/core/Button';
import TextFieldComponent from './text_field_componenet';
import '../../containers/users/style.css';

const User = (props) => {
  return (
    <Dialog open={props.openDialog} >
      <DialogTitle className="title" style={{ backgroundColor: "#FF0053" }}>{props.dialogLabel}</DialogTitle>
      <DialogContent style={{ display: 'flex', flexDirection: 'column', marginTop: 15 }}>
        <TextFieldComponent
          label="Name"
          placeholder="Name"
          type="text"
          text
          value={props.valueName}
          onChange={props.onChangeNameInput}
          textFieldBoxStyle={{ display: 'flex', flexDirection: 'row' }}
          labelStyle={{ marginTop: '10px', paddingRight: '20px', width: '100px' }}
          textFieldStyle={{ width: '500px' }}
        />
        {
            props.userInput.name === '' && <p className="warningMessage">Name is required</p>
          }
        <TextFieldComponent
          label="Surname"
          placeholder="Surname"
          type="text"
          text
          value={props.valueSurname}
          onChange={props.onChangeSurnameInput}
          textFieldBoxStyle={{ display: 'flex', flexDirection: 'row' }}
          labelStyle={{ marginTop: '10px', paddingRight: '20px', width: '100px' }}
          textFieldStyle={{ width: '500px' }}
        />
        {
            props.userInput.surname === '' && <p className="warningMessage">Surname is required</p>
          }
        <TextFieldComponent
          label="Email"
          placeholder="Email"
          type="text"
          text
          value={props.valueEmail}
          onChange={props.onChangeEmailInput}
          textFieldBoxStyle={{ display: 'flex', flexDirection: 'row' }}
          labelStyle={{ marginTop: '10px', paddingRight: '20px', width: '100px' }}
          textFieldStyle={{ width: '500px' }}

        />
        {
            props.userInput.email === '' && <p className="warningMessage">Email is required</p>
          }
        {
            props.ifEmailsExist && <p className="warningMessage">Email already exist</p>
          }
        <TextFieldComponent
          label="Password"
          placeholder="Password"
          type="password"
          text
          value={props.valuePassword}
          onChange={props.onChangePasswordInput}
          textFieldBoxStyle={{ display: 'flex', flexDirection: 'row' }}
          labelStyle={{ marginTop: '10px', paddingRight: '20px', width: '100px' }}
          textFieldStyle={{ width: '500px' }}

        />
        {
            props.userInput.password === '' && <p className="warningMessage">Passsword is required</p>
          }
        <TextFieldComponent
          label="Admin"
          checked={props.isAdmin}
          onChange={props.onChangeAdmin}
          value={props.valueIsAdmin}
          textFieldBoxStyle={{ display: 'flex', flexDirection: 'row' }}
          labelStyle={{ marginTop: '10px', paddingRight: '20px', width: '100px' }}
          textFieldStyle={{ width: '500px' }}

        />
      </DialogContent>
      <DialogActions>
        <Button
          onClick={props.onClickCancelButton}
          color="secondary"
        >
              Cancel
        </Button>
        <Button
          disabled={!props.checking}
          onClick={props.onClickSaveButton}
          color="secondary"
        >
              Save
        </Button>
      </DialogActions>
    </Dialog>
  );
};


export default User;
