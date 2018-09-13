import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import * as actionCreators from './actions';
import Users from '../../components/users';

function mapStateToProps(state) {
  const users = state.users.users;
  const userInput = state.users.userInput;
  const openDialog = state.users.openDialog;
  const user = state.users.user;
  const openEditDialog = state.users.openEditDialog;
  const usersListLength =  state.users.usersListLength;
  const page = state.users.page;
  const filters = state.users.filters;
  return {
    users,
    userInput,
    openDialog,
    user,
    openEditDialog,
    usersListLength,
    page,
    filters,
  };
}

export function mapDispatchToProps(dispatch) {
  return bindActionCreators(actionCreators, dispatch);
}

const App = connect(mapStateToProps, mapDispatchToProps)(Users);

export default App;
