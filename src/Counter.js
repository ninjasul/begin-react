import React, { Component } from 'react';

// this 참조를 정상적으로 하게 만드는 방법
// 1. constructor 사용
// 2. => 함수 사용
class Counter extends Component {

    // 1. constructor 사용용
   /*constructor(props) {
        super(props);
        this.handleIncrease = this.handleIncrease.bind(this);
        this.handleDecrease = this.handleDecrease.bind(this);
    }*/

    // 클래스 타입 컴포넌트의 state값은 무조건 객체이어야 함.
    // 함수
    /*constructor(props) {
        super(props);
        this.state = {
            counter: 0
        };
    }*/

    state = {
        counter: 0,
        fixed: 1,
        updateMe: {
            toggleMe: false,
            dontChangeMe: 1,
        }
    }

    // 2. => 함수 사용
    handleIncrease = () => {
        this.setState(state => ({
            counter: state.counter + 1
        }));
        this.setState(state => ({
            counter: state.counter + 1
        }));
        this.setState(state => ({
            counter: state.counter + 1
        }));
    }

    handleDecrease = () => {
        this.setState({
            counter: this.state.counter - 1
        });
        this.setState({
            counter: this.state.counter - 1
        });
        this.setState({
            counter: this.state.counter - 1
        });
    }

    render() {
        return (
            <div>
                <h1>{this.state.counter}</h1>
                <button onClick={this.handleIncrease}>+1</button>
                <button onClick={this.handleDecrease}>-1</button>
                <p>고정된 값: {this.state.fixed}</p>
            </div>
        );
    }
}
/*
function reducer(state, action) {
    switch (action.type) {
        case 'INCREMENT':
            return state + action.diff;
        case 'DECREMENT':
            return state - action.diff;
        default:
            throw new Error('Unhandled action');
    }
}

function Counter() {
    const [number, dispatch] = useReducer(reducer, 0);

    const onIncrease = () => {
       dispatch({
           type: 'INCREMENT',
           diff: 5
       })
    };
    const onDecrease = () => {
        dispatch({
            type: 'DECREMENT',
            diff: 5
        })
    };

    return (
        <div>
            <h1>{number}</h1>
            <button onClick={onIncrease}>+5</button>
            <button onClick={onDecrease}>-5</button>
        </div>
    )
}
*/

export default Counter;