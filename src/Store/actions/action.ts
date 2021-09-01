export const GET_TODO_DATA = 'GET_TODO_DATA';
export const GET_TODO_LIST = 'GET_TODO_LIST';

export const ADD_TODO_REQUEST = 'ADD_TODO_REQUEST';
export const ADD_TODO_SUCCESS = 'ADD_TODO_SUCCESS';
export const ADD_TODO_FAILURE = 'ADD_TODO_FAILURE';

export const DELETE_TODO_REQUEST = 'DELETE_TODO_REQUEST';
export const DELETE_TODO_SUCCESS = 'DELETE_TODO_SUCCESS';
export const DELETE_TODO_FAILURE = 'DELETE_TODO_FAILURE';

export const UPDATE_STATUS_REQUEST = 'UPDATE_STATUS_REQUEST';
export const UPDATE_STATUS_SUCCESS = 'UPDATE_STATUS_SUCCESS';
export const UPDATE_STATUS_FAILURE = 'UPDATE_STATUS_FAILURE';

export const UPDATE_CONTENT_REQUEST = 'UPDATE_CONTENT_REQUEST';
export const UPDATE_CONTENT_SUCCESS = 'UPDATE_CONTENT_SUCCESS';
export const UPDATE_CONTENT_FAILURE = 'UPDATE_CONTENT_FAILURE';

export const GET_FILTER_TODO_REQUEST = 'GET_FILTER_TODO_REQUEST';
export const GET_FILTER_TODO_SUCCESS = 'GET_FILTER_TODO_SUCCESS';
export const GET_FILTER_TODO_FAILURE = 'GET_FILTER_TODO_FAILURE';

const addTodoRequest = (newTodo: string) => {
  return {
    type: ADD_TODO_REQUEST,
    data: newTodo,
  };
};

const addTodoSuccess = (data: string) => {
  return {
    type: ADD_TODO_SUCCESS,
    data,
  };
};

const addTodoFailure = (error: any) => {
  return {
    type: ADD_TODO_FAILURE,
    error: error,
  };
};

const deleteTodoRequest = (todoId: string) => {
  return {
    type: DELETE_TODO_REQUEST,
    data: todoId,
  };
};

const deleteTodoSuccess = (data: string) => {
  return {
    type: DELETE_TODO_SUCCESS,
    data,
  };
};

const deleteTodoFailure = (error: any) => {
  return {
    type: DELETE_TODO_FAILURE,
    error: error,
  };
};

const upadteStatusRequest = (todoId: string) => {
  return {
    type: UPDATE_STATUS_REQUEST,
    data: todoId,
  };
};

const upadteStatusSuccess = (data: any) => {
  return {
    type: UPDATE_STATUS_SUCCESS,
    data,
  };
};

const upadteStatusFailure = (error: any) => {
  return {
    type: UPDATE_STATUS_FAILURE,
    error: error,
  };
};

const upadteContentRequest = (todoId: string, content: string) => {
  return {
    type: UPDATE_CONTENT_REQUEST,
    data: { todoId, content },
  };
};

const upadteContentSuccess = (data: any) => {
  return {
    type: UPDATE_CONTENT_SUCCESS,
    data,
  };
};

const upadteContentFailure = (error: any) => {
  return {
    type: UPDATE_CONTENT_FAILURE,
    error: error,
  };
};

const getFilterTodoRequest = (data: string) => {
  return {
    type: GET_FILTER_TODO_REQUEST,
    data,
  };
};

const getFilterTodoSuccess = (data: any) => {
  return {
    type: GET_FILTER_TODO_SUCCESS,
    data,
  };
};

const getFilterTodoFailure = (error: any) => {
  return {
    type: GET_FILTER_TODO_FAILURE,
    error: error,
  };
};

export {
  // add
  addTodoRequest,
  addTodoSuccess,
  addTodoFailure,
  // del
  deleteTodoRequest,
  deleteTodoSuccess,
  deleteTodoFailure,
  // update status
  upadteStatusRequest,
  upadteStatusSuccess,
  upadteStatusFailure,
  // update content
  upadteContentRequest,
  upadteContentSuccess,
  upadteContentFailure,
  // get filter todo
  getFilterTodoRequest,
  getFilterTodoSuccess,
  getFilterTodoFailure,
};
