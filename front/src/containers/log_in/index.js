import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import * as actionCreators from './actions';
import LogIn from '../../components/log_in';

function mapStateToProps(state) {
  const  isAdmin = state.logIn.isAdmin;
  const user = state.logIn.user;
  const logInStatus = state.logIn.logInStatus;
  return {
    isAdmin,
    user,
    logInStatus,
  };
}

export function mapDispatchToProps(dispatch) {
  return bindActionCreators(actionCreators, dispatch);
}

const App = connect(mapStateToProps, mapDispatchToProps)(LogIn);

export default App;
