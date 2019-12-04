import React, { useState } from 'react';

function MultipleInputSample() {
    const [inputs, setInputs] = useState({
        name : '',
        nickname: '',
    });

    const { name, nickname } = inputs;

    const onChange = (e) => {
        const { name, value } = e.target;

        // React 내의 객체는 immutable이므로
        // 상태를 변경시키는 것이 아니라
        // 기존 객체를 복사한 후 key, value 를 입력함.
        setInputs({
            ...inputs,
            [name]: value,
        });
    };

    const onReset = () => {
        setInputs({
            name: '',
            nickname: '',
        });
    };

    return (
        <div>
            <input name="name"
                   placeholder="이름"
                   onChange={onChange}
                   value={name}
            />
            <input name="nickname"
                   placeholder="닉네임"
                   onChange={onChange}
                   value={nickname}
            />
            <button onClick={onReset}>초기화</button>
            <div>
                <b>값: </b>
                {name} ({nickname})
            </div>
        </div>
    )
}

export default MultipleInputSample;