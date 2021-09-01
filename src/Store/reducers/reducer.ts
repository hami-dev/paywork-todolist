import { getNowTime } from 'Utils/GetNowTime';
import {
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

import { Itodo, initialState, IState } from 'Utils/HandleTodos';

type Action =
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

const reducer = (state = initialState, action: Action) => {
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
      const createdTime = getNowTime();
      return {
        ...state,
        count: state.count + 1,
        todoList: [
          ...state.todoList,
          {
            id: newId,
            content: newTodo,
            createdAt: createdTime,
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
        if (todo.id === action.data) {
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
    default:
      return state;
  }
};

export default reducer;
