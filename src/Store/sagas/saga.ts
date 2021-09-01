import { delay, all, fork, takeLatest, put } from 'redux-saga/effects';

import {
  GET_TODO_LIST,
  ADD_TODO_REQUEST,
  ADD_TODO_SUCCESS,
  ADD_TODO_FAILURE,
  DELETE_TODO_REQUEST,
  DELETE_TODO_SUCCESS,
  DELETE_TODO_FAILURE,
  getTodoDataAction,
  addTodoRequest,
  addTodoSuccess,
  addTodoFailure,
  deleteTodoRequest,
  deleteTodoSuccess,
  deleteTodoFailure,
} from 'Store/actions/action';

function* addTodo(action: any) {
  try {
    yield delay(500);
    // yield put(addTodoSuccess({ data: action.data }));
    yield put(addTodoSuccess(action.data));
  } catch (e) {
    yield put(addTodoFailure({ e }));
    console.error(e);
  }
}
function* watchAdd() {
  yield takeLatest(ADD_TODO_REQUEST, addTodo);
}

function* deleteTodo(action: any) {
  try {
    yield delay(500);
    // yield put(deleteTodoSuccess({ data: action.data }));
    yield put(deleteTodoSuccess(action.data));
  } catch (e) {
    yield put(deleteTodoFailure({ e }));
    console.error(e);
  }
}
function* watchDelete() {
  yield takeLatest(DELETE_TODO_REQUEST, deleteTodo);
}

export default function* todoSaga() {
  yield all([fork(watchAdd), fork(watchDelete)]);
}
