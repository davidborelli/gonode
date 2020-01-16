import { createReducer, createActions } from 'reduxsauce';
import Immutable from 'seamless-immutable';

// Actions
const { Types, Creators } = createActions({
  openMembersModal: null,
  closeMembersModal: null,
});

export const MembersTypes = Types;
export default Creators;

// Reducers
export const INITIAL_STATE = Immutable({
  membersModalOpen: false,
});

export const openModal = state => state.merge({ membersModalOpen: true });
export const closeModal = state => state.merge({ membersModalOpen: false });

// Mapeamento de action chamada para método para executar
export const reducer = createReducer(INITIAL_STATE, {
  [Types.OPEN_MEMBERS_MODAL]: openModal,
  [Types.CLOSE_MEMBERS_MODAL]: closeModal,
});
