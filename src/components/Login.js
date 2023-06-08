import { useState } from "react";
import { useHistory } from "react-router-dom/cjs/react-router-dom";

function Login({ setLoggedIn, setNotification }) {

    const [ username, setUsername ] = useState('');
    const [ password, setPassword ] = useState('');
    const history = useHistory();

    function onUsernameChange(e) {
        setUsername(e.target.value);
    }

    function onPasswordChange(e) {
        setPassword(e.target.value);
    }

    function onLogin(e) {
        e.preventDefault();

        // set log in to true if password and username is correct
        if (username === 'admin' && password === '123456') {
            setLoggedIn(true);
            history.push('/');
        } else {
            setNotification('Wrong username and password');
        }

        console.log('Username:', username);
        console.log('Password:', password);

    }

    return (
        <div>
            <h1>Login</h1>
            <form onSubmit={ onLogin }>
                <div>
                <input type="text" name="username" placeholder="Username" onChange={ onUsernameChange } />
                </div>
                <div>
                <input type="password" name="password" placeholder="Password" onChange={ onPasswordChange } />
                </div>
                <input type="submit" value="Submit" />
            </form>
        </div>
    );
}

export default Login;