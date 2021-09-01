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

export type ActionType =
  //add
  | { type: 'ADD_TODO_REQUEST' }
  | { type: 'ADD_TODO_SUCCESS'; data: string }
  | { type: 'ADD_TODO_FAILURE' }
  //del
  | { type: 'DELETE_TODO_REQUEST' }
  | { type: 'DELETE_TODO_SUCCESS'; data: string }
  | { type: 'DELETE_TODO_FAILURE' }
  //update
  | { type: 'UPDATE_STATUS_REQUEST' }
  | { type: 'UPDATE_STATUS_SUCCESS'; data: string }
  | { type: 'UPDATE_STATUS_FAILURE' };

export function HandleTodos() {}

export const initialState = {
  count: 4,
  todoList: [
    {
      id: '1',
      content: '끝난일1',
      createdAt: '2021-02-03',
      isCheck: true,
    },
    {
      id: '2',
      content: '안끝난일1',
      createdAt: '2021-03-03',
      isCheck: false,
    },
    {
      id: '3',
      content: '안끝난일2',
      createdAt: '2021-04-03',
      isCheck: false,
    },
    {
      id: '4',
      content: '끝난일2',
      createdAt: '2021-05-03',
      isCheck: true,
    },
  ],
};
