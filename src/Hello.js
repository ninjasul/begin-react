import React, { Component } from 'react';

/*
function Hello(props) {
    console.log(props);
    return <div style={{
        color: props.color
    }}>안녕하세요 {props.name}</div>;
}
*/

/*function Hello({ color, name, isSpecial }) {
    return (
        <div style={{
            color
        }}>
            {isSpecial ? <b>*</b> : <b>?</b>}
            {/!*{isSpecial && <b>*</b>}*!/}
            안녕하세요 {name}
        </div>
    );
}*/

class Hello extends Component {
    static defaultProps = {
        name: '이름없음',
    };

    render() {
        const { color, isSpecial, name } = this.props;
        return (
            <div style={{color}}>
                {isSpecial && <b>*</b>}
                안녕하세요 {name}
            </div>
        )
    }
}
/*Hello.defaultProps = {
    name: '이름없음'
}*/

export default Hello;