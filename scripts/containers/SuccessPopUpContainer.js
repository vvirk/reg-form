import { connect } from 'react-redux';
import { togglePopUp } from '../actions/index';
import SuccessPopUp from '../components/SuccessPopUp/SuccessPopUp';

const mapStateToProps = state => ({
});
const mapDispatchToProps = {
  togglePopUp,
};

export const SuccessPopUpContainer = connect(
  mapStateToProps,
  mapDispatchToProps,
)(SuccessPopUp);

export default SuccessPopUpContainer;
