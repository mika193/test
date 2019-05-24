import { combineReducers } from 'redux';
import { handleActions } from 'redux-actions';
import * as actions from '../actions';

const persons = handleActions({
  [actions.addPerson](state, { payload: { person } }) {
    const { byId, allIds } = state;
    return {
      byId: { ...byId, [person.id]: person },
      allIds: [...allIds, person.id],
    };
  },
}, { byId: {}, allIds: [] });

const currentPersonId = handleActions({
  [actions.setCurentPersonId](state, { payload: { id } }) {
    return id;
  },
}, '');

const filterValue = handleActions({
  [actions.setFilterValue](state, { payload: { value } }) {
    return value;
  },
}, '');

const gettingDataState = handleActions({
  [actions.startDataRequest]() {
    return 'requested';
  },
  [actions.finishDataRequest]() {
    return 'finished';
  },
}, 'none');

export default combineReducers({
  persons,
  currentPersonId,
  filterValue,
  gettingDataState,
});
