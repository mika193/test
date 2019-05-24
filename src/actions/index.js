import { createAction } from 'redux-actions';
import axios from 'axios';
import { getPersonUrl, getPersonsUrl } from '../routes';

export const addPerson = createAction('PERSON_ADD');
export const setCurentPersonId = createAction('CURRENT_PERSON_ID_SET');
export const setFilterValue = createAction('FILTER_VALUE_SET');
export const startDataRequest = createAction('START_DATA_REQUEST');
export const finishDataRequest = createAction('FINISH_DATA_REQUEST');


export const makePersonRequest = id => async (dispatch) => {
  dispatch(startDataRequest());
  const data = await axios.get(getPersonUrl(id));
  const person = { ...data.data, id };
  dispatch(addPerson({ person }));
  dispatch(finishDataRequest());
};

export const makePersonsRequest = () => async (dispatch) => {
  dispatch(startDataRequest());
  const data = await axios.get(getPersonsUrl());
  const { results } = data.data;
  const persons = results.map((result, id) => ({...result, id}));
  persons.forEach(person => dispatch(addPerson({ person })));
  dispatch(finishDataRequest());
};
