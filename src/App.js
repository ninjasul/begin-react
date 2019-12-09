import React, { useRef, useState, useMemo, useCallback } from 'react';
import UserList from "./UserList";
import CreateUser from "./CreateUser";

function countActiveUsers(users) {
  console.log('활성 사용자 수를 세는 중...');
  return users.filter(user => user.active).length;
}

function App() {
  const [inputs, setInputs] = useState({
    username: '',
    email: '',
  });

  const { username, email } = inputs;

  const onChange = useCallback(e => {
    const { name, value } = e.target;

    // 불변이므로 복제한 후 name, value 쌍을 입력함.
    setInputs({
      ...inputs,
      [name]: value
    });
  }, [inputs]);

  const [users, setUsers] = useState([
    {
      id: 1,
      username: 'velopert',
      email: 'public.velopert@gmail.com',
      active: true,
    },
    {
      id: 2,
      username: 'ninjasul',
      email: 'ninjasul@gmail.com',
      active: false,
    },
    {
      id: 3,
      username: 'ka2377',
      email: 'ka2377@naver.com',
      active: false,
    },
  ]);

  const nextId = useRef(4);

  const onCreate = useCallback(() => {
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
  }, [username, email, users]);

  const onRemove = useCallback(id => {
    setUsers(users.filter(user => user.id !== id));
  }, [users]);

  const onToggle = useCallback(id => {
    setUsers(users.map(
        user => user.id === id
        ? { ...user, active: !user.active }
        : user
    ));
  }, [users]);

  // input 값이 바뀌었을 때 매번 countActiveUsers 함수를 호출해 주지 말고
  // users가 바뀌었을 때만 countActiveUsers 함수를 호출 해 줘야 함.
  const count = useMemo(() => countActiveUsers(users), [users]);

  return (
      <>
        <CreateUser
            username={username}
            email={email}
            onChange={onChange}
            onCreate={onCreate}
        />
        <UserList
            users={users}
            onRemove={onRemove}
            onToggle={onToggle}
        />
        <div>활성 사용자 수: {count}</div>
      </>
  );
}

export default App;
