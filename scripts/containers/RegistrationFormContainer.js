import { connect } from 'react-redux';
import { toggleIsFetching } from '../actions/index';
import RegistrationForm from '../components/RegistrationForm/RegistrationForm';

const mapStateToProps = state => ({
  countries: state.countries,
  isFetching: state.isFetching,
});
const mapDispatchToProps = {
  toggleIsFetching,
};

export const RegistrationFormContainer = connect(
  mapStateToProps,
  mapDispatchToProps,
)(RegistrationForm);

export default RegistrationFormContainer;
