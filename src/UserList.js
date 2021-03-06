import React, { useEffect, useContext } from 'react';
import { UserDispatch } from './App';

const User = React.memo(function User({ user }) {
    const { username, email, id, active } = user;
    const dispatch = useContext(UserDispatch);
/*
    useEffect(() => {
        // 컴포넌트가 마운트(화면에 나타날때) 실행되는 로직
        // 주로 props 를 컴포넌트의 state로 변환
        // 특정 REST API 호출
        // 라이브러리 사용
        console.log('컴포넌트가 화면에 나타남');
        
        // 컴포넌트가 언마운트(화면에서 사라질 때) 실행되는 로직
        return () => {
            // 주로 클리어 작업을 수행함.
            // 라이브러리 인스턴스 제거
            console.log('컴포넌트가 화면에서 사라짐');
        }
    }, []);
*/
    // 두 번째 인자인 디펜던시 객체 배열에 항목을 입력하면
    // 해당 객체의 마운트, 변경, 언마운트 시에 최신 값을 읽어올 수 있음.
    useEffect(() => {
        console.log('user 값이 설정됨');
        console.log(user);

        return () => {
            console.log('user 값이 바뀌기 전');
            console.log(user);
        }
    }, [user]);

    return (
        <div>
            <b
                style={{
                    color: active ? 'green' : 'black',
                    cursor: 'pointer'
                }}
                onClick={() => dispatch({
                    type: 'TOGGLE_USER',
                    id
                })}
            >

            {username}
            </b>
            <span>({email})</span>
            <button onClick={() => dispatch({
                type: 'REMOVE_USER',
                id
            })}>삭제</button>
        </div>
    );
});

function UserList( { users } ) {
    return (
        <div>
            {
                // key 가 있어야 각 element를 식별할 수 있음.
                // 객체 내에 key 로 삼을 만한 것이 없다면 차선으로 배열 index 값을 입력.
                // 하지만 추천하지는 않음.
                users.map(
                    user => (<User
                                user={user}
                                key={user.id}
                             />)
                )
            }
        </div>
    );
}


// 두번째 인자는 리렌더링을 방지를 위한 비교 구문임.
// true이면 리렌더링을 수행하지 않음.
// 즉, 이전 props와 다음 props 의 users가 같으면 리렌더링 하지 않음.
// onRemove, onToggle에서는 함수형 setter를 사용함으로써
// users에 대한 의존관계를 끊었기 때문에 비교할 필요 조차 없음.
export default React.memo(
    UserList,
    (prevProps, nextProps) => nextProps.users === prevProps.users
);