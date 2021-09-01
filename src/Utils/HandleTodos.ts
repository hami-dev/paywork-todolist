export type Itodo = {
  id: string;
  content: string;
  isCheck: boolean;
  createdAt: string;
};

export type IState = {
  count: number;
  todoList: Itodo[];
};

export type contentType = {
  todoId: string;
  content: string;
};

export type ActionType =
  //add
  | { type: 'ADD_TODO_REQUEST' }
  | { type: 'ADD_TODO_SUCCESS'; data: string }
  | { type: 'ADD_TODO_FAILURE' }
  //del
  | { type: 'DELETE_TODO_REQUEST' }
  | { type: 'DELETE_TODO_SUCCESS'; data: string }
  | { type: 'DELETE_TODO_FAILURE' }
  //update status
  | { type: 'UPDATE_STATUS_REQUEST' }
  | { type: 'UPDATE_STATUS_SUCCESS'; data: string }
  | { type: 'UPDATE_STATUS_FAILURE' }
  //update content
  | { type: 'UPDATE_CONTENT_REQUEST' }
  | { type: 'UPDATE_CONTENT_SUCCESS'; data: contentType }
  | { type: 'UPDATE_CONTENT_FAILURE' }
  //get Filtered Todo
  | { type: 'GET_FILTER_TODO_REQUEST' }
  | { type: 'GET_FILTER_TODO_SUCCESS'; data: string }
  | { type: 'GET_FILTER_TODO_FAILURE' }
  // get TODO LIST
  | { type: 'GET_TODO_LIST_REQUEST' }
  | { type: 'GET_TODO_LIST_SUCCESS'; data: any }
  | { type: 'GET_TODO_LIST_FAILURE' };

export const initialState = {
  count: 1,
  todoList: [
    {
      id: '1',
      content: '쓰레기 버리기',
      createdAt: '2021-08-30T15:58:50.023Z',
      isCheck: true,
    },
  ],
};

const BASE_URL = 'http://dummy-server.io';

export const fetchTodos: any = () => {
  return fetch(BASE_URL + ':4000/todo').then((res) => {
    if (!res.ok) {
      console.log(res.statusText); //error
    }
    return res.json();
  });
};
