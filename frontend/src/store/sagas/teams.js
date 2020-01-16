import { put, call } from 'redux-saga/effects';
import { actions as toastrActions } from 'react-redux-toastr';
import api from '~/services/api';

import TeamsActions from '../ducks/teams';

export function* getTeams() {
  const response = yield call(api.get, 'teams');

  // Chamando a Action e passando o valor por parâmetro
  yield put(TeamsActions.getTeamsSuccess(response.data));
}

export function* createTeam({ name }) {
  try {
    const response = yield call(api.post, 'teams', { name });

    yield put(TeamsActions.createTeamSuccess(response.data));
    yield put(TeamsActions.closeTeamModal());

    yield put(
      toastrActions.add({
        type: 'success',
        title: 'Sucesso!',
        message: 'Time criado com sucesso!',
      })
    );
  } catch (error) {
    yield put(
      toastrActions.add({
        type: 'error',
        title: 'Falha na operação',
        message: 'Verifique nome informado',
      })
    );
  }
}
