import { createReducer, createActions } from 'reduxsauce';
import Immutable from 'seamless-immutable';

// Actions
const { Types, Creators } = createActions({
  getTeamsRequest: null,
  getTeamsSuccess: ['data'],
});

export const TeamsTypes = Types;
export default Creators;

// Reducers
export const INITIAL_STATE = Immutable({
  data: [],
});

export const getSuccess = (state, { data }) => state.merge({ data });

// Mapeamento de action chamada para método para executar
export const reducer = createReducer(INITIAL_STATE, {
  [Types.GET_TEAMS_SUCCESS]: getSuccess,
});
