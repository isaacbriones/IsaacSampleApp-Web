import React from 'react';
import InputComponent from '../../common/InputComponent';
import { connect } from 'react-redux';
import { loginUser } from '../../actions/UserAction';
import { FormErrors } from '../../FormErrors';
import { Button } from 'react-bootstrap';

class Login extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            email: "",
            password: "",
            formErrors: { email: "", password: "" },
            emailValid: false,
            passwordValid: false,
            formValid: false
        };
        this.handleChange = this.handleChange.bind(this);
    }

    handleChange(evt) {
        const name = evt.target.name;
        const value = evt.target.value;
        this.setState({ [name]: value },
            () => { this.validateField(name, value) });
    }
    // ***************************************************** this is validation

    validateField(fieldName, value) {
        let fieldValidationErrors = this.state.formErrors;
        let emailValid = this.state.emailValid;
        let passwordValid = this.state.passwordValid;

        switch (fieldName) {
            case 'email':
                emailValid = value.match(/^([\w.%+-]+)@([\w-]+\.)+([\w]{2,})$/i);
                fieldValidationErrors.email = emailValid ? '' : ' is invalid';
                break;
            case 'password':
                passwordValid = value.match(/^(?=.*[0-9]).{6,}$/i);
                fieldValidationErrors.password = passwordValid ? '' : ' must be 6 characters long and contain at least 1 number';
                break;
            default:
                break;
        }
        this.setState({
            formErrors: fieldValidationErrors,
            emailValid: emailValid,
            passwordValid: passwordValid
        }, this.validateForm);
    }

    validateForm() {
        this.setState({ formValid: this.state.emailValid && this.state.passwordValid });
    }


    // *********************************** the actual form put together
    render() {
        return (
            <div>
                <h1>This is the Login Page</h1>
                <form>
                    <div className='panel panel-default'>
                        <FormErrors formErrors={this.state.formErrors} />
                    </div>

                    <InputComponent id="email" label="Email"
                        type="email" isRequired="true" placeHolder="jsmith@gmail.com"
                        value={this.state.email}
                        onChange={this.handleChange}
                    />
                    <InputComponent id="password" label="Password"
                        type="password" isRequired="true" placeHolder="******"
                        value={this.state.password}
                        onChange={this.handleChange}
                    />

                </form>
                <Button bsStyle='primary' disabled={!this.state.formValid} onClick={() => {
                    this.props.login({ email: this.state.email, password: this.state.password });
                    this.props.history.push("/");
                }}>Login</Button>
            </div>
        );
    }
}
// ********************************** this function sends the message to the store and also using the UserReducer we created 


const mapStateToProps = (state) => {
    return {
        user: state.UserReducer
    };
};

//********************** this functions is what is coming back from the store


const mapDispatchToProps = (dispatch) => {
    return {
        login: (data) => {
            dispatch(loginUser(data));
        }
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(Login);