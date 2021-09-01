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
  UPDATE_CONTENT_REQUEST,
  UPDATE_CONTENT_SUCCESS,
  UPDATE_CONTENT_FAILURE,
} from 'Store/actions/action';

import { initialState, ActionType } from 'Utils/HandleTodos';

const reducer = (state = initialState, action: ActionType) => {
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

    // UPDATE STATE
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

    // UPDATE CONTENT
    case UPDATE_CONTENT_REQUEST: {
      return {
        ...state,
      };
    }

    case UPDATE_CONTENT_SUCCESS: {
      const todo = state.todoList.map((todo) => {
        if (todo.id === action.data.todoId) {
          todo.content = action.data.content;
        }
        return todo;
      });
      return { ...state, todoList: [...todo] };
    }

    case UPDATE_CONTENT_FAILURE: {
      return state;
    }

    default:
      return state;
  }
};

export default reducer;
