import { call, delay, all, fork, takeLatest, put } from 'redux-saga/effects';

import {
  ADD_TODO_REQUEST,
  DELETE_TODO_REQUEST,
  UPDATE_STATUS_REQUEST,
  UPDATE_CONTENT_REQUEST,
  GET_TODO_LIST_REQUEST,
  // add
  addTodoSuccess,
  addTodoFailure,
  // del
  deleteTodoSuccess,
  deleteTodoFailure,
  // update status
  upadteStatusSuccess,
  upadteStatusFailure,
  // update content
  upadteContentSuccess,
  upadteContentFailure,
  // get todo
  getTodoListSuccess,
  getTodoListFailure,
} from 'Store/actions/action';

import { fetchTodos } from 'Utils/Api';

type Action = {
  type: string;
  data: string;
};

// ADD
function* addTodo(action: Action) {
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

// DELETE
function* deleteTodo(action: Action) {
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

// UPDATE STATE
function* updateTodoState(action: Action) {
  try {
    yield delay(100);
    yield put(upadteStatusSuccess(action.data));
  } catch (error) {
    yield put(upadteStatusFailure(error));
    console.error(error);
  }
}
function* watchUpdateStatus() {
  yield takeLatest(UPDATE_STATUS_REQUEST, updateTodoState);
}

// UPDATE CONTENT
function* updateTodoContent(action: Action) {
  try {
    yield delay(100);
    yield put(upadteContentSuccess(action.data));
  } catch (error) {
    yield put(upadteContentFailure(error));
    console.error(error);
  }
}
function* watchUpdateContent() {
  yield takeLatest(UPDATE_CONTENT_REQUEST, updateTodoContent);
}

// GET TODOS from server
function* getTodoList(): any {
  try {
    const getTodos: any = yield call(fetchTodos);
    yield put(getTodoListSuccess(getTodos));
  } catch (error) {
    yield put(getTodoListFailure(error));
    console.error(error);
  }
}
function* watchGetTodoList() {
  yield takeLatest(GET_TODO_LIST_REQUEST, getTodoList);
}

export default function* todoSaga() {
  yield all([
    fork(watchAdd),
    fork(watchDelete),
    fork(watchUpdateStatus),
    fork(watchUpdateContent),
    fork(watchGetTodoList),
  ]);
}
