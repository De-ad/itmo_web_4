import React, {useEffect, useState} from 'react';

const LoginForm = () => {
    const [login, setLogin] = useState("");
    const [password, setPassword] = useState("");

    const submitForm = (e) => {
        e.preventDefault();
        console.log(login);
        console.log(password);
    }


    return (
        <div>
            <input type="text"
                   placeholder="Enter username"
                   onChange={e => setLogin(e.target.value)}/>
            <input type="password"
                   placeholder="Enter password"
                   onChange={e => setPassword(e.target.value)}/>
            <button onClick={submitForm}>Log in</button>
        </div>
    );
};

export default LoginForm;