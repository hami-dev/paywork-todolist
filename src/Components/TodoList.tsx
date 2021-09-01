import React, { useState, useEffect } from 'react';
import { useSelector } from 'react-redux';

import TodoItem from 'Components/TodoItem';
import { CustomButton } from 'Components/TodoInput';
import { Itodo } from 'Utils/HandleTodos';
import styled from 'styled-components';

function TodoList() {
  const todoList: Itodo[] = useSelector((state: any) => state.todoList);

  const [filter, setFilter] = useState<string>('all');
  const [filtering, setFiltering] = useState<boolean>(false);

  useEffect(() => {
    if (filter === 'all') {
    }
    if (filter === 'todo') {
      setFiltering(false);
    }
    if (filter === 'done') {
      setFiltering(true);
    }
  }, [filter]);

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
        {todoList &&
          todoList.map((todo: any, index: number) => {
            if (filter !== 'all' && todo.isCheck !== filtering) {
              return null;
            }
            return (
              <TodoItem
                key={index}
                id={todo.id}
                content={todo.content}
                isCheck={todo.isCheck}
                createdAt={todo.createdAt}
              />
            );
          })}
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
`;

const ItemListWrapper = styled.ul``;

export default TodoList;
