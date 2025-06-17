import { useState } from "react";

const LoginForm = ({onLogin}) => {
    const [name,setName] = useState('');
    const handleSubmit = (e)=>{
        e.preventDefault();
        const trimmed = name.trim();
        if(trimmed){ //빈값이 아니라면
            onLogin(name); //부모에게 데이터전송
            setName('');
        }
    }
    return (
        <form onSubmit={handleSubmit}
        className="loginForm">
            <h2>당신의 이름을 입력하세요</h2>
            <div className="input-button">
            <input
                type="text"
                placeholder="이름"
                value={name}
                onChange={(e)=>{setName(e.target.value)}}
            />
            <button type="submit">입장하기</button>
            </div>
        </form>
    );
};

export default LoginForm;