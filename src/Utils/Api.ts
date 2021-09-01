const BASE_URL = 'http://dummy-server.io';
const URL = BASE_URL + ':4000/todo';

// server의 data를 받아옴
export const fetchTodos: any = () => {
  return fetch(URL).then((res) => {
    if (!res.ok) {
      console.log(res.statusText); //error
    }
    return res.json();
  });
};
