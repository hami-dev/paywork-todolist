const BASE_URL = 'http://dummy-server.io';

export const fetchTodos: any = () => {
  return fetch(BASE_URL + ':4000/todo').then((res) => {
    if (!res.ok) {
      console.log(res.statusText); //error
    }
    return res.json();
  });
};
