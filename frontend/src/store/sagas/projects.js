import { put, call } from 'redux-saga/effects';
import api from '~/services/api';

import ProjectsActions from '../ducks/projects';

export function* getProjects() {
  const response = yield call(api.get, 'projects');

  // Chamando a Action e passando o valor por parâmetro
  yield put(ProjectsActions.getProjectsSuccess(response.data));
}
