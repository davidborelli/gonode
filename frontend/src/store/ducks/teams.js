import { createReducer, createActions } from 'reduxsauce';
import Immutable from 'seamless-immutable';

// Actions
const { Types, Creators } = createActions({
  getTeamsRequest: null,
  getTeamsSuccess: ['data'],
  selectTeam: ['team'],
});

export const TeamsTypes = Types;
export default Creators;

// Reducers
export const INITIAL_STATE = Immutable({
  data: [],
  active: JSON.parse(localStorage.getItem('@TaskMan:team')) || null,
});

export const getSuccess = (state, { data }) => state.merge({ data });
export const selectTeam = (state, { team }) => {
  localStorage.setItem('@TaskMan:team', JSON.stringify(team));

  return state.merge({ active: team });
};

// Mapeamento de action chamada para método para executar
export const reducer = createReducer(INITIAL_STATE, {
  [Types.GET_TEAMS_SUCCESS]: getSuccess,
  [Types.SELECT_TEAM]: selectTeam,
});
