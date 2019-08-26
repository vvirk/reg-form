import React, { Component } from 'react';
import RegistrationFormContainer from './containers/RegistrationFormContainer';
import SuccessPopUpContainer from './containers/SuccessPopUpContainer';

class App extends Component {
  componentDidMount() {
    this.props.getCountries();
  }
  render() {
    {(this.props.successPopUp) ? window.onclick = ()=>this.props.togglePopUp(false) : null}
    return (
      <div className="app">
        {(this.props.successPopUp) ? <SuccessPopUpContainer /> : null}
        <div className="app-inner">
          <RegistrationFormContainer />
        </div>
      </div>
    )
  }
}

export default App;