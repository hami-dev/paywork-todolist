import React, { useState, useEffect } from 'react';
import TodoItem from './TodoItem';
import styled from 'styled-components';
import { CustomButton } from 'Components/TodoInput';
import { useSelector } from 'react-redux';
import { Itodo } from 'Utils/HandleTodos';

function TodoList() {
  const todoList: Itodo[] = useSelector((state: any) => state.todoList);

  const [filter, setFilter] = useState<string>('all');
  const [fTodo, setTodos] = useState<Itodo[]>([]);

  useEffect(() => {
    let filteredTodo: Itodo[] = [];

    if (filter === 'all') {
      filteredTodo = todoList;
    }

    if (filter === 'todo') {
      filteredTodo = todoList.filter((item: Itodo) => item.isCheck === false);
    }
    if (filter === 'done') {
      filteredTodo = todoList.filter((item: Itodo) => item.isCheck === true);
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
          // onClick={handlFilterButton}
          onClick={(e) => setFilter('all')}
          filterSelected={filter === 'all'}
        >
          All
        </FilterButton>
        <FilterButton
          id="todo"
          // onClick={handleFilterButton}
          onClick={(e) => setFilter('todo')}
          filterSelected={filter === 'todo'}
        >
          TO DO
        </FilterButton>
        <FilterButton
          id="done"
          // onClick={handleFilterButton}
          onClick={(e) => setFilter('done')}
          filterSelected={filter === 'done'}
        >
          DONE
        </FilterButton>
      </ButtonWrapper>
      <ItemListWrapper>
        {fTodo &&
          fTodo.map((todo: any) => (
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
  transition: 1.5s;

  /* &:hover {
    border-bottom: ${({ filterSelected }) =>
    filterSelected ? '1px solid #996dbf' : '1px solid  #d9d0df'};
  } */
`;

const ItemListWrapper = styled.ul``;

export default TodoList;
