import React from 'react';
import { ReactElement, useState, useEffect, useRef } from 'react';
import styled from 'styled-components';
import { CheckOutlined, DeleteOutlined } from '@ant-design/icons';
import { CustomButton } from 'Components/TodoInput';

interface TodoItemProps {
  id: string;
  content: string;
  isCheck: boolean;
  createdAt: string;
}

function TodoItem({
  id,
  content,
  isCheck,
  createdAt,
}: TodoItemProps): ReactElement {
  const handleDelete = (e: React.MouseEvent<HTMLButtonElement>) => {
    console.log('del ', id);
  };

  const handleCheck = () => {
    console.log('status change', id);
  };
  return (
    <ItemWrapper>
      <ButtonCheck isCheck={isCheck} onClick={handleCheck}>
        <CheckOutlined />
      </ButtonCheck>

      <ContentWrapper>
        <ItemContent isCheck={isCheck}>{content}</ItemContent>
        <ItemCreatedAt>created at {createdAt}</ItemCreatedAt>
      </ContentWrapper>

      <ButtonDelete onClick={handleDelete}>
        <DeleteOutlined />
      </ButtonDelete>
    </ItemWrapper>
  );
}

const ItemWrapper = styled.li`
  display: flex;
  align-items: center;
  background-color: #fff;
  margin-bottom: 2rem;
  padding: 2rem;
  border-radius: 1rem;
  box-shadow: 0 0.5rem 2rem -1rem #481c9436;
`;

const ContentWrapper = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  line-height: 2rem;
`;

const ItemContent = styled.div<{ isCheck: boolean }>`
  text-decoration: ${({ isCheck }) => (isCheck ? 'line-through' : 'none')};
  color: ${({ isCheck }) => (isCheck ? '#c6bccc' : '#38353f')};
  font-weight: 600;
`;

const ItemCreatedAt = styled.div`
  font-size: 1.2rem;
  color: #d9d0df;
`;

const ButtonCheck = styled(CustomButton)<{ isCheck: boolean }>`
  color: ${({ isCheck }) => (isCheck ? '#08ba6d' : '#efeded')};
  margin-right: 1rem;
`;

const ButtonDelete = styled(CustomButton)`
  color: #ba0808;
`;

export default TodoItem;