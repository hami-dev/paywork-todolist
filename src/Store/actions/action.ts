export const GET_TODO_DATA = 'GET_TODO_DATA';
export const GET_TODO_LIST = 'GET_TODO_LIST';

export const ADD_TODO_REQUEST = 'ADD_TODO_REQUEST';
export const ADD_TODO_SUCCESS = 'ADD_TODO_SUCCESS';
export const ADD_TODO_FAILURE = 'ADD_TODO_FAILURE';

export const DELETE_TODO_REQUEST = 'DELTE_TODO_REQUEST';
export const DELETE_TODO_SUCCESS = 'DELTE_TODO_SUCCESS';
export const DELETE_TODO_FAILURE = 'DELTE_TODO_FAILURE';

const getTodoDataAction = (data: any) => ({
  type: GET_TODO_DATA,
  data,
});

const getTodoListAction = () => ({
  type: GET_TODO_LIST,
});

const addTodoRequest = (newTodo: any) => {
  return {
    type: ADD_TODO_REQUEST,
    data: newTodo,
  };
};

const addTodoSuccess = (data: any) => {
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

const deleteTodoSuccess = (data: any) => {
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

export {
  getTodoDataAction,
  getTodoListAction,
  addTodoRequest,
  addTodoSuccess,
  addTodoFailure,
  deleteTodoRequest,
  deleteTodoSuccess,
  deleteTodoFailure,
};
