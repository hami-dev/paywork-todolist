import Header from 'Components/Header';
import TodoList from 'Components/TodoList';
import styled from 'styled-components';
import TodoInput from 'Components/TodoInput';

function TodoMain() {
  return (
    <TodoMainWrapper>
      <Header />
      <TodoInput />
      <TodoList />
    </TodoMainWrapper>
  );
}

const TodoMainWrapper = styled.div`
  width: 60%;
  max-width: 55rem;
  min-width: 36rem;
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

export default TodoMain;
