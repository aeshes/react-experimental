import React from 'react';
import ReactDOM from 'react-dom';

import Form from './Form';
import './login.css';

class Login extends React.Component {
    render() {
        return (
            <div className="login-form">
                <Form />
            </div>
        );
    }
}

export default Login;