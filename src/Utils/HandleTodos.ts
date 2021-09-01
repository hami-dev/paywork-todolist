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
  | { type: 'UPDATE_CONTENT_FAILURE' };

export const initialState = {
  count: 4,
  todoList: [
    {
      id: '1',
      content: '쓰레기 버리기',
      createdAt: '2021-08-30T15:58:50.023Z',
      isCheck: true,
    },
    {
      id: '2',
      content: '방 청소 하기',
      createdAt: '2021-08-31T15:59:09.942Z',
      isCheck: false,
    },
    {
      id: '3',
      content: '과제 제출하기',
      createdAt: '2021-09-01T15:59:09.942Z',
      isCheck: false,
    },
    {
      id: '4',
      content: '가을 옷 꺼내기',
      createdAt: '2021-09-01T15:59:09.942Z',
      isCheck: true,
    },
  ],
};
