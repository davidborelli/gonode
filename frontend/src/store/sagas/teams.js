import { put, call } from 'redux-saga/effects';
import api from '~/services/api';

import TeamsActions from '../ducks/teams';

export function* getTeams() {
  const response = yield call(api.get, 'teams');

  // Chamando a Action e passando o valor por parâmetro
  yield put(TeamsActions.getTeamsSuccess(response.data));
}
