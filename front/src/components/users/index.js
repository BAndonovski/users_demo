import React from 'react';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import IconButton from '@material-ui/core/IconButton';
import DeleteIcon from '@material-ui/icons/Delete';
import Edit from '@material-ui/icons/Edit';
import AddIcon from '@material-ui/icons/Add';
import Button from '@material-ui/core/Button';
import Divider from '@material-ui/core/Divider';
import FoooterComponent from './table_pagination_ctions';
import User from './user';
import FilterUsers from './filter_users';
import '../../containers/users/style.css';

class Users extends React.Component {
  componentDidMount() {
    this.props.getUsersList();
  }
  render() {
    const usersList = this.props.users;
    const ifEmailsExist = this.props.users.map(user => user.email).includes(this.props.userInput.email);
    const checking = (this.props.userInput.name !== '') &&
    (this.props.userInput.surname !== '') &&
    (this.props.userInput.email !== '') &&
    (this.props.userInput.password !== '') &&
    (ifEmailsExist === false);
    const ifEmailsExistEdit = this.props.users.map(user => user.email).includes(this.props.user.email);
    const checkingEdit = (this.props.user.name !== '') &&
    (this.props.user.surname !== '') &&
    (this.props.user.email !== '') &&
    (this.props.user.password !== '') &&
    (ifEmailsExist === false);
    const emptyRows = 20 - Math.min(20, 20 - (this.props.page * 20));
    return (
      <div className="table_container">
        <FilterUsers
          inputName={this.props.inputNameFilter}
          inputSurname={this.props.inputSurnameFilter}
          isAdmin={this.props.checkIsAdminFilter}
          filters={this.props.filters}
          filterUsers={this.props.filterUsers}
          resetFilters={this.props.resetFilters}
        />
        <Divider style={{ marginTop: '30px' }} />
        <Table style={{ marginTop: '30px' }}>
          <TableHead>
            <TableRow>
              <TableCell style={{ fontSize: 16, fontWeight: 'bold' }} >User</TableCell>
              <TableCell style={{ fontSize: 16, fontWeight: 'bold' }}>Email</TableCell>
              <TableCell style={{
 fontSize: 16, fontWeight: 'bold', padding: 0, textAlign: 'center',
}}
              >User/Admin
              </TableCell>
              <TableCell style={{
 padding: 0, fontSize: 16, fontWeight: 'bold', textAlign: 'center',
}}
              >Edit
              </TableCell>
              <TableCell style={{
 padding: 0, fontSize: 16, fontWeight: 'bold', textAlign: 'center',
}}
              >Delete
              </TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {usersList.map(user => (
              <TableRow key={user.id} >
                <TableCell style={{ fontSize: 14 }}>{user.name} {user.surname}</TableCell>
                <TableCell style={{ fontSize: 14 }}>{user.email}</TableCell>
                <TableCell style={{ fontSize: 14, padding: 0, textAlign: 'center' }}>{user.isAdmin === 0 ? 'User' : 'Admin'}</TableCell>
                <TableCell style={{ padding: 0, textAlign: 'center' }}>
                  <IconButton
                    aria-label="Edit"
                    onClick={(e) => {
                        e.preventDefault();
                        this.props.getClickedUserData(user);
                        this.props.openEditUSerDialog(true);
                      }}
                  >
                    <Edit />
                  </IconButton>
                </TableCell>
                <TableCell style={{ padding: 0, textAlign: 'center' }}>
                  <IconButton
                    aria-label="Delete"
                    onClick={(e) => {
                        e.preventDefault();
                        this.props.deleteUser(user.id);
                      }}
                  >
                    <DeleteIcon />
                  </IconButton>
                </TableCell>
              </TableRow>
 ))}
            {emptyRows > 0 && (
            <TableRow style={{ height: 48 * emptyRows }}>
              <TableCell colSpan={6} />
            </TableRow>
              )}
          </TableBody>
        </Table>
        <FoooterComponent
          usersListLength={this.props.usersListLength}
          handleChangePage={this.props.handleChangePage}
          page={this.props.page}
        />
        <User
          dialogLabel="Add User"
          users={this.props.userInput}
          isAdmin={this.props.isAdmin}
          userInput={this.props.userInput}
          openDialog={this.props.openDialog}
          valueName={this.props.userInput.name}
          onChangeNameInput={(e) => {
            e.preventDefault();
            this.props.inputName(e.target.value);
          }}
          valueSurname={this.props.userInput.surname}
          onChangeSurnameInput={(e) => {
            e.preventDefault();
            this.props.inputSurname(e.target.value);
          }}
          valueEmail={this.props.userInput.email}
          onChangeEmailInput={(e) => {
            e.preventDefault();
            this.props.inputEmail(e.target.value);
          }}
          valuePassword={this.props.userInput.password}
          onChangePasswordInput={(e) => {
            e.preventDefault();
            this.props.inputPassword(e.target.value);
          }}
          valueIsAdmin={this.props.userInput.isAdmin}
          onChangeAdmin={e => this.props.selectAdminUser(e.target.checked)}
          onClickCancelButton={() => this.props.openAddUSerDialog(false)}
          onClickSaveButton={() => {
            this.props.createUser(this.props.userInput);
            this.props.openAddUSerDialog(false);
          }}
          ifEmailsExist={ifEmailsExist}
          checking={checking}
        />
        <User
          dialogLabel="Edit User"
          users={this.props.users}
          isAdmin={this.props.user.isAdmin}
          userInput={this.props.user}
          openDialog={this.props.openEditDialog}
          valueName={this.props.user.name}
          onChangeNameInput={(e) => {
            e.preventDefault();
            this.props.editName(e.target.value);
          }}
          valueSurname={this.props.user.surname}
          onChangeSurnameInput={(e) => {
            e.preventDefault();
            this.props.editSurname(e.target.value);
          }}
          valueEmail={this.props.user.email}
          onChangeEmailInput={(e) => {
            e.preventDefault();
            this.props.editEmail(e.target.value);
          }}
          valuePassword={this.props.user.password}
          onChangePasswordInput={(e) => {
            e.preventDefault();
            this.props.editPassword(e.target.value);
          }}
          valueIsAdmin={this.props.users.isAdmin}
          onChangeAdmin={e => this.props.editAdminUser(e.target.checked)}
          onClickCancelButton={() => this.props.openEditUSerDialog(false)}
          onClickSaveButton={() => {
            this.props.updateUser(this.props.user);
            this.props.openEditUSerDialog(false);
          }}
          ifEmailsExist={ifEmailsExistEdit}
          checking={checkingEdit}
        />
        <Button
          onClick={(e) => {
            e.preventDefault();
            this.props.openAddUSerDialog(true);
          }}
          variant="fab"
          color="secondary"
          style={{ left: '100%', bottom: 60 }}
          aria-label="Add"
        >
          <AddIcon />
        </Button>
      </div>

    );
  }
}
export default Users;
