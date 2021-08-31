export const GET_TODO_DATA = 'GET_TODO_DATA';
export const GET_TODO_LIST = 'GET_TODO_LIST';

const getTodoDataAction = (data: any) => ({
  type: GET_TODO_DATA,
  data,
});

const getTodoListAction = () => ({
  type: GET_TODO_LIST,
});

export { getTodoDataAction, getTodoListAction };
