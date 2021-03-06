import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { addTodoRequest } from 'Store/actions/action';
import { PlusCircleOutlined } from '@ant-design/icons';
import styled from 'styled-components';

function TodoInput() {
  const [inputValue, setInputValue] = useState('');
  const dispatch = useDispatch();

  // submit 할 시 공백이면 alert출력
  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (inputValue === '') {
      alert('내용을 입력해주세요!');
      return;
    }

    dispatch(addTodoRequest(inputValue));
    setInputValue('');
  };

  return (
    <TodoInputWrapper onSubmit={handleSubmit}>
      <CustomInput
        autoFocus
        placeholder="What you want to do?"
        value={inputValue}
        onChange={(e) => setInputValue(e.target.value)}
      />
      <CustomButton>
        <PlusCircleOutlined />
      </CustomButton>
    </TodoInputWrapper>
  );
}

const TodoInputWrapper = styled.form`
  display: flex;
  justify-content: space-between;
  align-items: center;
  background-color: #ffffffab;
  border-radius: 1.5rem;
  padding: 1rem 2rem;
  margin: 2rem 0;
`;

const CustomInput = styled.input`
  width: 100%;
  border: none;
  background-color: transparent;
  color: #996dbf;

  &:focus {
    outline: none;
  }

  &::placeholder {
    color: #d9d0df;
  }
`;

export const CustomButton = styled.button`
  background-color: transparent;
  border: none;
  font-size: 1.8rem;
  color: #875ac6;
  cursor: pointer;
`;

export default TodoInput;
