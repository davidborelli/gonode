import { createReducer, createActions } from 'reduxsauce';
import Immutable from 'seamless-immutable';

// Actions
const { Types, Creators } = createActions({
  getTeamsRequest: null,
  getTeamsSuccess: ['data'],
  selectTeam: ['team'],
  openTeamModal: null,
  closeTeamModal: null,
});

export const TeamsTypes = Types;
export default Creators;

// Reducers
export const INITIAL_STATE = Immutable({
  data: [],
  teamModalOpen: false,
  active: JSON.parse(localStorage.getItem('@TaskMan:team')) || null,
});

export const getSuccess = (state, { data }) => state.merge({ data });
export const selectTeam = (state, { team }) => {
  localStorage.setItem('@TaskMan:team', JSON.stringify(team));

  return state.merge({ active: team });
};

export const openModal = state => state.merge({ teamModalOpen: true });
export const closeModal = state => state.merge({ teamModalOpen: false });

// Mapeamento de action chamada para método para executar
export const reducer = createReducer(INITIAL_STATE, {
  [Types.GET_TEAMS_SUCCESS]: getSuccess,
  [Types.SELECT_TEAM]: selectTeam,
  [Types.OPEN_TEAM_MODAL]: openModal,
  [Types.CLOSE_TEAM_MODAL]: closeModal,
});
