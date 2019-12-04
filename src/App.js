import React, {useRef} from 'react';
import UserList from "./UserList";

function App() {
  const users = [
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
  ];

  const nextId = useRef(4);

  const onCreate = () => {
    console.log(nextId.current);
    nextId.current += 1;
  };

  return (
     <UserList users={users}/>
  );
}

export default App;
