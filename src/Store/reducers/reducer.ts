import {
  GET_TODO_DATA,
  ADD_TODO_REQUEST,
  ADD_TODO_SUCCESS,
  ADD_TODO_FAILURE,
  DELETE_TODO_REQUEST,
  DELETE_TODO_SUCCESS,
  DELETE_TODO_FAILURE,
  UPDATE_STATUS_REQUEST,
  UPDATE_STATUS_SUCCESS,
  UPDATE_STATUS_FAILURE,
} from 'Store/actions/action';
// import { combineReducers } from 'redux';

const initialState = {
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

const reducer: any = (state = initialState, action: any) => {
  switch (action.type) {
    // ADD
    case ADD_TODO_REQUEST: {
      return {
        ...state,
      };
    }
    case ADD_TODO_SUCCESS: {
      const newTodo = action.data;
      const newId = (state.count + 1).toString();
      return {
        ...state,
        count: state.count + 1,
        todoList: [
          ...state.todoList,
          {
            id: newId,
            content: newTodo,
            createdAt: '2021-08-31',
            isCheck: false,
          },
        ],
      };
    }
    case ADD_TODO_FAILURE: {
      return state;
    }

    // DELETE
    case DELETE_TODO_REQUEST: {
      return {
        ...state,
      };
    }

    case DELETE_TODO_SUCCESS: {
      const todo = state.todoList.filter((todo) => todo.id !== action.data);
      return {
        ...state,
        count: state.count - 1,
        todoList: [...todo],
      };
    }
    case DELETE_TODO_FAILURE: {
      return state;
    }

    // UPDATE
    case UPDATE_STATUS_REQUEST: {
      return {
        ...state,
      };
    }
    case UPDATE_STATUS_SUCCESS: {
      const todo = state.todoList.map((todo) => {
        if (todo.id === action.data.id) {
          todo.isCheck = todo.isCheck ? false : true;
        }
        return todo;
      });
      return {
        ...state,
        todoList: [...todo],
      };
    }
    case UPDATE_STATUS_FAILURE: {
      return state;
    }
  } // end switch

  return state;
};

export default reducer;
