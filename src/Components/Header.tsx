import { useState, useEffect } from 'react';
import { useSelector } from 'react-redux';
import { Itodo } from 'Utils/HandleTodos';

import styled from 'styled-components';

function Header() {
  const [timeString, setTimeString] = useState<string>('');
  const todoList: Itodo[] = useSelector((state: any) => state.todoList);

  const todoCount: number = todoList.filter(
    (todo) => todo.isCheck === false,
  ).length;

  useEffect(() => {
    setNowTime();
  }, []);

  // 현재 시간을 string으로 return
  function getNowTime() {
    const date = new Date();
    let hour = date.getHours();
    const min = date.getMinutes();

    const ampm = hour <= 12 ? 'am' : 'pm';

    hour = hour % 12;
    hour = hour ? hour : 12;
    const minString = min < 10 ? '0' + min : min;

    return `${ampm} ${hour} : ${minString}`;
  }

  // setInterval을 사용하여 1분마다 시간을 갱신
  function setNowTime() {
    const time = getNowTime();
    setTimeString(time);

    setInterval(() => {
      const time = getNowTime();
      setTimeString(time);
    }, 60000);
  }

  return (
    <HeaderWrapper>
      <span>{timeString}</span>
      <span> {todoCount} todos left</span>
    </HeaderWrapper>
  );
}

const HeaderWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  font-weight: 600;
  padding-top: 1.5rem;
  height: 3rem;
  padding-left: 0.5rem;
  letter-spacing: -0.1rem;
`;

export default Header;
