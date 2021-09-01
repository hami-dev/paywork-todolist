import { delay, all, fork, takeLatest, put } from 'redux-saga/effects';

import {
  ADD_TODO_REQUEST,
  DELETE_TODO_REQUEST,
  UPDATE_STATUS_REQUEST,
  // add
  addTodoSuccess,
  addTodoFailure,
  // del
  deleteTodoSuccess,
  deleteTodoFailure,
  // update
  upadteStatusSuccess,
  upadteStatusFailure,
} from 'Store/actions/action';

function* addTodo(action: any) {
  try {
    yield delay(500);
    yield put(addTodoSuccess(action.data));
  } catch (error) {
    yield put(addTodoFailure(error));
    console.error(error);
  }
}
function* watchAdd() {
  yield takeLatest(ADD_TODO_REQUEST, addTodo);
}

function* deleteTodo(action: any) {
  try {
    yield delay(500);
    yield put(deleteTodoSuccess(action.data));
  } catch (error) {
    yield put(deleteTodoFailure(error));
    console.error(error);
  }
}
function* watchDelete() {
  yield takeLatest(DELETE_TODO_REQUEST, deleteTodo);
}

function* updateTodo(action: any) {
  try {
    yield delay(100);
    yield put(upadteStatusSuccess(action.data));
  } catch (error) {
    yield put(upadteStatusFailure(error));
    console.error(error);
  }
}
function* watchStatusUpdate() {
  yield takeLatest(UPDATE_STATUS_REQUEST, updateTodo);
}

export default function* todoSaga() {
  yield all([fork(watchAdd), fork(watchDelete), fork(watchStatusUpdate)]);
}
