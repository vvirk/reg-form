import { connect } from 'react-redux';
import { hot } from 'react-hot-loader';
import { 
  getCountries,
  togglePopUp,
} from '../actions/index';
import App from '../app';

const mapStateToProps = state => ({
  successPopUp: state.successPopUp,
});
const mapDispatchToProps = {
  getCountries,
  togglePopUp,
};

export const AppContainer = connect(
  mapStateToProps,
  mapDispatchToProps,
)(hot(module)(App));

export default AppContainer;
