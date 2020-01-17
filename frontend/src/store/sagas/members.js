import { put, call } from 'redux-saga/effects';
import { actions as toastrActions } from 'react-redux-toastr';
import api from '~/services/api';

import MembersActions from '../ducks/members';

export function* getMembers() {
  const response = yield call(api.get, 'members');

  // Chamando a Action e passando o valor por parâmetro
  yield put(MembersActions.getMembersSuccess(response.data));
}

export function* updateMember({ id, roles }) {
  try {
    yield call(api.put, `members/${id}`, { roles: roles.map(role => role.id) });

    yield put(
      toastrActions.add({
        type: 'success',
        title: 'Sucesso!',
        message: 'Membro atulizado com sucesso!',
      })
    );
  } catch (error) {
    yield put(
      toastrActions.add({
        type: 'error',
        title: 'Falha na operação',
        message: 'Verifique os dados inseridos',
      })
    );
  }
}

export function* inviteMember({ email }) {
  try {
    yield call(api.post, 'invites', { invites: [email] });

    yield put(
      toastrActions.add({
        type: 'success',
        title: 'Sucesso!',
        message: 'Convite enviado com sucesso!',
      })
    );
  } catch (error) {
    yield put(
      toastrActions.add({
        type: 'error',
        title: 'Falha na operação',
        message: 'Verifique os dados inseridos',
      })
    );
  }
}
