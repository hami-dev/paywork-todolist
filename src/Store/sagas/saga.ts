import { takeEvery, put } from 'redux-saga/effects';

import { GET_TODO_LIST, getTodoDataAction } from 'Store/actions/action';

import axios from 'axios';

// const BASE_URL = 'http://dummy-server.io/';

export function* getInitialTodoList(): any {
  // const URL = BASE_URL + ':4000/todo';
  const URL = '/Data/data.json';
  try {
    const res = yield axios.get(URL);
    const action = getTodoDataAction(res.data.todo);
    yield put(action);
    // console.log(res.data.todo);
  } catch (e) {
    console.log('error!!!', e);
  }
}

export function* getInitialTodoListSaga(): any {
  yield takeEvery(GET_TODO_LIST, getInitialTodoList);
}
