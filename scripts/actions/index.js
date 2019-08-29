import * as type from '../actions/actionTypes';

export const addCountries = countries => ({
  type: type.ADD_COUNTRIES,
  countries,
});

export const togglePopUp = popUp => ({
  type: type.TOGGLE_POP_UP,
  popUp,
})

export const toggleIsFetching = isFetching => ({
  type: type.TOGGLE_IS_FETSHING,
  isFetching,
});

export const getCountries = () => async (dispatch) => {
  try {
    const url = 'http://0.0.0.0:3002/countries';
    const response = await fetch(url);
    const responseBody = await response.json();
    dispatch(addCountries(responseBody));
  } catch(e) {console.log(e)}
};

export const registerUser = (formData) => async (dispatch) => {
  try {
    const url = 'http://0.0.0.0:3002/register';
    const response = await fetch(url, {
      method: 'POST',
      body: JSON.stringify(formData),
      headers:{
        'Content-Type': 'application/json'
      }
    });
    await response.json();
    dispatch(toggleIsFetching(false));
    dispatch(togglePopUp(true));
  } catch(e) {console.log(e)}
};
