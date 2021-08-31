import { GET_TODO_DATA } from 'Store/actions/action';
// import { combineReducers } from 'redux';

const initialState = {
  todoList: [],
};

const reducer = (state = initialState, action: any) => {
  if (action.type === GET_TODO_DATA) {
    const newState = JSON.parse(JSON.stringify(state));
    newState.todoList = action.data;
    return newState;
  }

  return state;
};

export default reducer;
