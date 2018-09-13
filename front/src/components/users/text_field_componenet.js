import React from 'react';
import TextField from '@material-ui/core/TextField';
import Checkbox from '@material-ui/core/Checkbox';

const TextFieldComponent = props => (
  <div style={props.textFieldBoxStyle}>
    <p style={props.labelStyle}>{props.label}</p>
    { props.text ?
      <TextField
        style={props.textFieldStyle}
        value={props.value}
        placeholder={props.placeholder}
        type={props.type}
        onChange={props.onChange}
      /> :
      <Checkbox
        checked={props.checked}
        onChange={props.onChange}
        value={props.value}
        color="secondary"
        style={props.checkBoxStyle}
      />}
  </div>

);
export default TextFieldComponent;