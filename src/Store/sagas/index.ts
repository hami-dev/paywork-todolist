import { all } from 'redux-saga/effects';
import { getInitialTodoListSaga } from 'Store/sagas/saga';

function* rootSaga() {
  yield all([getInitialTodoListSaga()]);
}

export default rootSaga;
