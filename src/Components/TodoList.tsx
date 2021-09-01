import React, { useState, useEffect } from 'react';
import TodoItem from './TodoItem';
import { TODO_ITEM_LIST } from 'Constant';
import { Itodo } from 'Utils/HandleTodos';
import styled from 'styled-components';
import { CustomButton } from 'Components/TodoInput';
import { useSelector } from 'react-redux';
import rootSaga from 'Store/sagas';

function TodoList() {
  // const todoList: Itodo[] = TODO_ITEM_LIST.todoList;
  const todoList: any = useSelector((state: any) => state.todoList);
  // const todoList = useSelector((state: any) => state.reducer);

  const [filter, setFilter] = useState<string>('all');
  const [todos, setTodos] = useState<any>(todoList);

  useEffect(() => {
    console.log(todoList);
    let filteredTodo: any = [];

    if (filter === 'all') {
      filteredTodo = todoList;
    }

    if (filter === 'todo') {
      filteredTodo = todoList.filter((item: any) => !item.isCheck);
    }
    if (filter === 'done') {
      filteredTodo = todoList.filter((item: any) => item.isCheck);
    }

    setTodos(filteredTodo);
  }, [filter, todoList]);

  // 버튼을 클릭할 경우 필터링 변경
  const handleFilterButton = (e: React.MouseEvent<HTMLButtonElement>) => {
    setFilter(e.currentTarget.id);
  };

  return (
    <>
      <ButtonWrapper>
        <FilterButton
          id="all"
          onClick={handleFilterButton}
          filterSelected={filter === 'all'}
        >
          All
        </FilterButton>
        <FilterButton
          id="todo"
          onClick={handleFilterButton}
          filterSelected={filter === 'todo'}
        >
          TO DO
        </FilterButton>
        <FilterButton
          id="done"
          onClick={handleFilterButton}
          filterSelected={filter === 'done'}
        >
          DONE
        </FilterButton>
      </ButtonWrapper>
      <ItemListWrapper>
        {todos &&
          todos.map((todo: any) => (
            <TodoItem
              id={todo.id}
              content={todo.content}
              isCheck={todo.isCheck}
              createdAt={todo.createdAt}
            />
          ))}
      </ItemListWrapper>
    </>
  );
}

const ButtonWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  margin-bottom: 2rem;
`;

const FilterButton = styled(CustomButton)<{ filterSelected: boolean }>`
  flex: 1;
  border-bottom: ${({ filterSelected }) =>
    filterSelected ? '1px solid #996dbf' : 'none'};
  color: ${({ filterSelected }) => (filterSelected ? '#996dbf' : '#d9d0df')};
  height: 4rem;
  box-sizing: content-box;
  margin: 0 1rem;
`;

const ItemListWrapper = styled.ul``;

export default TodoList;
