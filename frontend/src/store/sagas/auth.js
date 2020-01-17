import { call, put, select } from 'redux-saga/effects';
import { push } from 'connected-react-router';
import { actions as toastrActions } from 'react-redux-toastr';

import api from '~/services/api';

import AuthActions from '../ducks/auth';

export function* signIn({ email, password }) {
  try {
    const response = yield call(api.post, 'sessions', { email, password });

    localStorage.setItem('@TaskMan:token', response.data.token);

    yield put(AuthActions.signInSuccess(response.data.token));

    yield put(push('/'));
  } catch (error) {
    yield put(
      toastrActions.add({
        type: 'error',
        title: 'Falha no login',
        message: 'Verifique seu e-mail/senha',
      })
    );
  }
}

export function* signUp({ name, email, password }) {
  try {
    const response = yield call(api.post, 'users', { name, email, password });

    localStorage.setItem('@TaskMan:token', response.data.token);

    yield put(AuthActions.signInSuccess(response.data.token));
    yield put(push('/'));

    yield put(
      toastrActions.add({
        type: 'success',
        title: 'Sucesso',
        message: 'Cadastro realizado com sucesso!',
      })
    );
  } catch (error) {
    yield put(
      toastrActions.add({
        type: 'error',
        title: 'Falha no cadastro',
        message: 'Verifique os dados inseridos',
      })
    );
  }
}

export function* signOut() {
  localStorage.removeItem('@TaskMan:token');
  localStorage.removeItem('@TaskMan:team');

  yield put(push('/signin'));
}

export function* getPermissions() {
  const team = yield select(state => state.teams.active);
  const signedIn = yield select(state => state.auth.signedIn);

  if (!signedIn || !team) {
    return;
  }

  const response = yield call(api.get, 'permissions');
  const { roles, permissions } = response.data;

  yield put(AuthActions.getPermissionsSuccess(roles, permissions));
}
