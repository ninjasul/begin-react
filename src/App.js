import React, { useRef, useState } from 'react';
import UserList from "./UserList";
import CreateUser from "./CreateUser";

function App() {
  const [inputs, setInputs] = useState({
    username: '',
    email: '',
  });

  const { username, email } = inputs;

  const onChange = e => {
    const { name, value } = e.target;

    // 불변이므로 복제한 후 name, value 쌍을 입력함.
    setInputs({
      ...inputs,
      [name]: value
    });
  };

  const [users, setUsers] = useState([
    {
      id: 1,
      username: 'velopert',
      email: 'public.velopert@gmail.com'
    },
    {
      id: 2,
      username: 'ninjasul',
      email: 'ninjasul@gmail.com'
    },
    {
      id: 3,
      username: 'ka2377',
      email: 'ka2377@naver.com'
    },
  ]);

  const nextId = useRef(4);

  const onCreate = () => {
    const user = {
      id: nextId.current,
      username,
      email,
    };

    // 배열에 추가할 경우에는 스프레드 연산자(...)나 concat을 사용해야 함.
    // push, splice는 사용하면 안됨.
    //setUsers([...users, user]);
    setUsers(users.concat(user));

    setInputs({
      username: '',
      email: '',
    });

    console.log(nextId.current);
    nextId.current += 1;
  };

  return (
      <>
        <CreateUser
            username={username}
            email={email}
            onChange={onChange}
            onCreate={onCreate}
        />
        <UserList users={users} />
      </>
  );
}

export default App;
