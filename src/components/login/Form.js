import React from 'react';
import ReactDOM from 'react-dom';

import FormErrors from './FormErrors';

class Form extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            login: '',
            password: '',
            formErrors: {login: '', password: ''},
            loginValid: false,
            passwordValid: false,
            formValid: false
        };
        this.validateField = this.validateField.bind(this);
    }

    render() {
        return (
            [
            <form action="#">
                <label htmlFor="login">Sign in</label>
                <br /><input type="text" id="login" placeholder="Login" 
                    onChange={this.handleUserInput} name="login" />
                <br /><input type="password" placeholder="Password" 
                    onChange={this.handleUserInput} name="password" />
                <br /><input type="submit" value="Sign In" />
            </form>,
            <div className="panel panel-default">
                <FormErrors formErrors={this.state.formErrors} />
            </div>
            ]
        );
    }

    handleUserInput = (event) => {
        const name = event.target.name;
        const value = event.target.value;
        this.setState({[name] : value},
            () => {this.validateField(name, value)});
    }

    validateField(fieldName, value) {
        let fieldValidationErrors = this.state.formErrors;
        let loginValid = this.state.loginValid;
        let passwordValid = this.state.passwordValid;

        switch (fieldName) {
            case 'login':
                loginValid = value.match(/^([\w.%+-]+)@([\w-]+\.)+([\w]{2,})$/i);
                fieldValidationErrors.login = loginValid ? '' : ' is invalid';
                break;
            case 'password':
                passwordValid = value.length >= 6;
                fieldValidationErrors.password = passwordValid ? '': ' is too short';
                break;
            default:
                break;
        }

        this.setState({
                formErrors: fieldValidationErrors,
                loginValid: loginValid,
                passwordValid: passwordValid
            },
            this.validateForm);
    }

    validateForm() {
        this.setState({formValid: this.state.loginValid && this.state.passwordValid});
    }
}

export default Form;