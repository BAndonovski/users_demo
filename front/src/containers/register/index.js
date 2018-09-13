import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import * as actionCreators from './actions';
import Register from '../../components/register';

function mapStateToProps(state) {
const user = state.register.user;
const retypedPassword = state.register.retypedPassword;
const changeRoute = state.register.changeRoute;
const registerStatus =  state.register.registerStatus;
  return {
    user,
    retypedPassword,
    changeRoute,
    registerStatus,
  };
}

export function mapDispatchToProps(dispatch) {
  return bindActionCreators(actionCreators, dispatch);
}

const App = connect(mapStateToProps, mapDispatchToProps)(Register);

export default App;
