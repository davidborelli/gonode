import { put, call } from 'redux-saga/effects';
import { actions as toastrActions } from 'react-redux-toastr';
import api from '~/services/api';

import ProjectsActions from '../ducks/projects';

export function* getProjects() {
  const response = yield call(api.get, 'projects');

  // Chamando a Action e passando o valor por parâmetro
  yield put(ProjectsActions.getProjectsSuccess(response.data));
}

export function* createProjects({ title }) {
  try {
    const response = yield call(api.post, 'projects', { title });

    yield put(ProjectsActions.createProjectSuccess(response.data));
    yield put(ProjectsActions.closeProjectModal());

    yield put(
      toastrActions.add({
        type: 'success',
        title: 'Sucesso!',
        message: 'Projeto criado com sucesso!',
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
