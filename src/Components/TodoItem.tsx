import { useState, ReactElement } from 'react';
import { useDispatch } from 'react-redux';

import { CustomButton } from 'Components/TodoInput';
import {
  deleteTodoRequest,
  upadteStatusRequest,
  upadteContentRequest,
} from 'Store/actions/action';

import {
  CheckOutlined,
  DeleteOutlined,
  EditOutlined,
  SaveOutlined,
} from '@ant-design/icons';
import styled from 'styled-components';

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
  const dispatch = useDispatch();

  const [isEdit, setIsEdit] = useState<boolean>(false);
  const [newContent, setNewContent] = useState<string>(content);
  const cutCreatedAt = createdAt.substr(0, 10);

  // Todo 삭제
  const handleDelete = () => {
    dispatch(deleteTodoRequest(id));
  };

  // Todo 상태(todo, done) 변경
  const handleCheck = () => {
    dispatch(upadteStatusRequest(id));
  };

  // Todo 내용 (content) 수정
  const handleEditSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    handleEdit();
  };

  // input이 공백일 시 alert 출력
  const handleEdit = () => {
    if (newContent === '') {
      alert('수정할 내용을 정확히 입력해주세요!');
      return;
    }

    dispatch(upadteContentRequest(id, newContent));
    setIsEdit(!isEdit);
  };

  return (
    <ItemWrapper>
      <ButtonCheck isCheck={isCheck} onClick={handleCheck}>
        <CheckOutlined />
      </ButtonCheck>

      <ContentWrapper>
        {isEdit ? (
          <TodoEditWrapper onSubmit={handleEditSubmit}>
            <TodoEditInput
              autoFocus
              placeholder={content}
              value={newContent}
              onChange={(e) => setNewContent(e.target.value)}
            />
          </TodoEditWrapper>
        ) : (
          <ItemContent isCheck={isCheck}>{newContent}</ItemContent>
        )}

        <ItemCreatedAt>created at {cutCreatedAt}</ItemCreatedAt>
      </ContentWrapper>

      {isEdit ? (
        <ButtonSubmit onClick={handleEdit}>
          <SaveOutlined />
        </ButtonSubmit>
      ) : (
        <ButtonEdit onClick={(e) => setIsEdit(!isEdit)}>
          <EditOutlined />
        </ButtonEdit>
      )}
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

const TodoEditWrapper = styled.form``;

const TodoEditInput = styled.input`
  width: 90%;
  height: 2rem;
  border: none;
  border-bottom: 1px solid #e9e4f7;
  &:focus {
    outline: none;
  }

  &::placeholder {
    color: #d9d0df;
  }
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
  transition: 0.5s;

  &:hover {
    color: #ff7272;
  }
`;

const ButtonEdit = styled(CustomButton)`
  color: #dbc9ff;
  transition: 0.5s;

  &:hover {
    color: #8447ff;
  }
`;

const ButtonSubmit = styled(CustomButton)`
  color: #8da99e;
  transition: 0.5s;

  &:hover {
    color: #31ff98;
  }
`;

export default TodoItem;
