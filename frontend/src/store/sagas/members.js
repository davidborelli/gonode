import { put, call } from 'redux-saga/effects';
import api from '~/services/api';

import MembersActions from '../ducks/members';

export function* getMembers() {
  const response = yield call(api.get, 'members');

  // Chamando a Action e passando o valor por parâmetro
  yield put(MembersActions.getMembersSuccess(response.data));
}
