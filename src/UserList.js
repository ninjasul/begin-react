import React from 'react';

function User({ user }) {
    return (
        <div>
            <b>{user.username}</b> <span>({user.email})</span>
        </div>
    );
}

function UserList( {users} ) {

    return (
        <div>
            {
                // key 가 있어야 각 element를 식별할 수 있음.
                // 객체 내에 key 로 삼을 만한 것이 없다면 차선으로 배열 index 값을 입력.
                // 하지만 추천하지는 않음.
                users.map(
                    user => (<User user={user} key={user.id} />)
                )
            }
        </div>
    );
}

export default UserList;