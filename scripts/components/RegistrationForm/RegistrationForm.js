import React from 'react';
import { Form, Field } from 'react-final-form'
import Select from 'react-select';
import Loader from '../Loader/Loader';

const ReactSelect = ({ input, meta, ...rest }) => (
  <div className="reg-form-input-wrap">
    <label className="reg-form-input-label">
      Code
      <Select 
        className="reg-form-select-container"
        classNamePrefix="reg-form-select"
        {...input}
        {...rest} 
      />
    </label>
    {meta.error && meta.touched && <span className="reg-form-error">{meta.error}</span>}
  </div>
)
const sleep = ms => new Promise(resolve => setTimeout(resolve, ms))

const onSubmit = async values => {
  await sleep(3000)
  window.alert(JSON.stringify(values, 0, 2));
}
export const RegistrationForm = (props) => {
  const required = value => (value ? undefined : 'Required');
  const mustBeNumber = value => (isNaN(value) ? 'Must be a number' : undefined);
  const composeValidators = (...validators) => value =>
    validators.reduce((error, validator) => error || validator(value), undefined);
  const countries = [];
  const dialCodes = [];
  if(props.countries) {
    props.countries.map((country) =>{(
      countries.push({value: country.name, label: country.name}),
      dialCodes.push({value: `+${country.dial_code}`, label: `+${country.dial_code} ${country.name}`})
    )})
  }
  return (
    <div className="reg-form-wrap">
      <Form
        onSubmit={onSubmit}
        validate={values => {
          const errors = {}
          if (values.confirm !== values.password) {
            errors.confirm = 'Your passwords do not match'
          }
          return errors
        }}
        render={({ handleSubmit, submitting}) => (
          <form 
            onSubmit={handleSubmit}
            className="reg-form"
          >
            <h1 className="reg-form-title">
              Sign up
            </h1>
            <Field 
              name="name"
              validate={required}
            >
              {({ input, meta }) => (
                <div className="reg-form-input-wrap">
                  <label className="reg-form-input-label">
                    Name
                    <input 
                      {...input} 
                      type="text" 
                      placeholder="Name" 
                      className="reg-form-input" 
                    />
                  </label>
                  {meta.error && meta.touched && <span className="reg-form-error">{meta.error}</span>}
                </div>
              )}
            </Field>
            <Field 
              name="dialCode"
              validate={required} 
              component={ReactSelect}
              options={dialCodes} 
              placeholder="Code"
              validate={required}
            />
            <Field 
              name="phoneNumber"
              className="reg-form-input"
              validate={composeValidators(required, mustBeNumber)}>
              {({ input, meta }) => (
                <div className="reg-form-input-wrap">
                  <label className="reg-form-input-label">
                    Number
                    <input
                      {...input}
                      type="text"
                      placeholder="Number"
                      className="reg-form-input"
                    />
                  </label>
                  {meta.error && meta.touched && <span className="reg-form-error">{meta.error}</span>}
                </div>
              )}
            </Field> 
            <Field
              name="email"
              validate={required}
            >
              {({ input, meta }) => (
                <div className="reg-form-input-wrap">
                  <label className="reg-form-input-label">
                    Email address
                    <input 
                      {...input} 
                      type="email" 
                      placeholder="Email address" 
                      className="reg-form-input"
                    />
                  </label>
                  {meta.error && meta.touched && <span className="reg-form-error">{meta.error}</span>}
                </div>
              )}
            </Field>
            <Field 
              name="country" 
              component={ReactSelect}
              options={countries} 
              placeholder="Select country"
              validate={required}
            />
            <Field 
              name="password"
              validate={required}
            >
              {({ input, meta }) => (
                <div className="reg-form-input-wrap">
                  <label className="reg-form-input-label">
                    Password
                    <input 
                      {...input} 
                      type="password" 
                      placeholder="Password"
                      className="reg-form-input"  
                    />
                  </label>
                  {meta.error && meta.touched && <span className="reg-form-error">{meta.error}</span>}
                </div>
              )}
            </Field>
            <Field
              name="confirm"
              validate={required}
            >
              {({ input, meta }) => (
                <div className="reg-form-input-wrap">
                  <label className="reg-form-input-label">
                    Password сonfirmation
                    <input
                      {...input}
                      type="password"
                      placeholder="Password сonfirmation"
                      className="reg-form-input"
                    />
                  </label>
                {meta.error && meta.touched && <span className="reg-form-error">{meta.error}</span>}
                </div>
              )}
            </Field>
              <div className="reg-form-input-wrap">
              <label className="reg-form-ch-box-label">
                <Field
                  name="newsletterSubscr"
                  component="input"
                  type="checkbox"
                  value="yes"
                  className="reg-form-ch-box"
                />{' '}
                Yes, I'd like to recieve the very occasional email with 
                information on new services and discounts
              </label>
            </div>
            <div className="reg-form-input-wrap">
              <button
                type="submit"
                className="reg-form-btn"
                disabled={submitting}
              >
                {(props.isFetching) ? <Loader /> : "create an account"}
              </button>
            </div>
            <div className="reg-form-desc">
              Already have a 24Slides account?<a href="#" className="reg-form-link"> Click here </a> 
              to log in to your existing account and join a company team
            </div>
          </form>
        )}
      />
    </div>
  );
}

export default RegistrationForm;
