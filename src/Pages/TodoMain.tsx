import { useEffect } from 'react';
import Header from 'Components/Header';
import TodoList from 'Components/TodoList';
import styled from 'styled-components';
import TodoInput from 'Components/TodoInput';

import { connect } from 'react-redux';
import { getTodoListAction } from 'Store/actions/action';
import { useDispatch } from 'react-redux';

function TodoMain() {
  const dispatch = useDispatch();
  // const todoData = useSelector((state: any) => state.todoList); //initial값 = []

  useEffect(() => {
    dispatch(getTodoListAction());
  }, []);

  return (
    <TodoMainWrapper>
      <Header />
      <TodoInput />
      <TodoList />
    </TodoMainWrapper>
  );
}

const mapStateToProps = (state: any) => {
  console.log('state', state);
  console.log('mapStateToProps: ', state.todoList.todoList);
  return {
    todoList: state.todoList,
  };
};

const mapDispatchToProps = (dispatch: any) => {
  console.log('dispatch', dispatch);
  return {
    getInitList() {
      const action = getTodoListAction();
      dispatch(action);
    },
  };
};

const TodoMainWrapper = styled.div`
  width: 60%;
  max-width: 55rem;
  height: 80vh;
  min-height: 70rem;
  font-size: 1.4rem;
  background-color: #f5f3ffe0;
  border-radius: 2rem;
  margin: 0 auto;
  margin-top: 10vh;
  padding: 0 2rem;
  box-shadow: 0 1rem 2rem -1rem #13001033;
`;

// export default TodoMain;
export default connect(mapStateToProps, mapDispatchToProps)(TodoMain);
