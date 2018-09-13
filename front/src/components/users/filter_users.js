import React from 'react';
import Button from '@material-ui/core/Button';
import TextFieldComponent from './text_field_componenet';
import '../../containers/users/style.css';


const FilterUsers = props => (
  <div className="filterContent">
    <TextFieldComponent
      value={props.filters.name}
      onChange={e => props.inputName(e.target.value)}
      text
      placeholder="Name"
      label="Name"
      textFieldStyle={{ width: '100%' }}
      textFieldBoxStyle={{ display: 'flex', flexDirection: 'row', width: '30%' }}
      labelStyle={{ width: '50px', marginTop: '10px', paddingRight: '20px' }}
    />
    <TextFieldComponent
      value={props.filters.surname}
      onChange={e => props.inputSurname(e.target.value)}
      text
      placeholder="Surname"
      label="Surname"
      textFieldStyle={{ width: '100%' }}
      textFieldBoxStyle={{ display: 'flex', flexDirection: 'row', width: '30%' }}
      labelStyle={{ width: '70px', marginTop: '10px', paddingRight: '20px' }}
    />
    <TextFieldComponent
      value={props.filters.isAdmin}
      checked={props.filters.isAdmin === 1}
      onChange={(e) => { props.isAdmin(e.target.checked); }}
      label="isAdmin"
      textFieldBoxStyle={{ display: 'flex', flexDirection: 'row' }}
      labelStyle={{ width: '50px', marginTop: '10px' }}
      checkBoxStyle={{ height: '30px' }}

    />
    <div>
      <Button
        onClick={() => props.filterUsers()}
        color="secondary"
        variant="contained"
        style={{ width: '100px', marginRight: '10px' }}
      >Filter
      </Button>
      <Button
        onClick={() => props.resetFilters()}
        color="secondary"
        variant="outlined"
        style={{ width: '100px' }}
      >Reset
      </Button>
    </div>
  </div>
);

export default FilterUsers;
