import React from 'react';
import InputComponent from '../../common/InputComponent';
import { FormErrors } from '../../FormErrors';
// import { registerUser } from '../../actions/UserAction';
import { Button } from 'react-bootstrap';
import { FormGroup } from 'react-bootstrap';
import Axios from 'axios';

class Register extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            firstName: "",
            lastName: "",
            email: "",
            password: "",
            confirmPassword: "",
            formErrors: { email: "", password: "", firstName: "", lastName: "", confirmPassword: "" },
            emailValid: false,
            passwordValid: false,
            firstNameValid: false,
            lastNameValid: false,
            confirmPasswordvalid: false,
            formValid: false
        };
        this.handleChange = this.handleChange.bind(this);
        this.onSubmit = this.onSubmit.bind(this);
    }

    handleChange(evt) {
        const name = evt.target.name;
        const value = evt.target.value;
        this.setState({ [name]: value },
            () => { this.validateField(name, value) });
    }


    validateField(fieldName, value) {
        let fieldValidationErrors = this.state.formErrors;
        let emailValid = this.state.emailValid;
        let passwordValid = this.state.passwordValid;
        let firstNameValid = this.state.firstNameValid;
        let lastNameValid = this.state.lastNameValid;
        let confirmPasswordValid = this.state.confirmPasswordValid;

        switch (fieldName) {
            case 'email':
                emailValid = value.match(/^([\w.%+-]+)@([\w-]+\.)+([\w]{2,})$/i);
                fieldValidationErrors.email = emailValid ? '' : ' is invalid';
                break;
            case 'password':
                passwordValid = value.match(/^(?=.*[0-9]).{6,}$/i);
                fieldValidationErrors.password = passwordValid ? '' : ' must be 6 characters long and contain at least 1 number';
                break;
            case 'confirmPassword':
                confirmPasswordValid = value.match(this.state.passwordValid);
                fieldValidationErrors.confirmPassword = confirmPasswordValid ? '' : 'must match';
                break;
            case 'firstName':
                firstNameValid = value.length >= 1;
                fieldValidationErrors.firsName = firstNameValid ? '' : ' is invalid';
                break;
            case 'lastName':
                lastNameValid = value.length >= 1;
                fieldValidationErrors.lastName = lastNameValid ? '' : ' is invalid';
                break;
            default:
                break;
        }
        this.setState({
            formErrors: fieldValidationErrors,
            emailValid: emailValid,
            passwordValid: passwordValid,
            firstNameValid: firstNameValid,
            lastNameValid: lastNameValid,
            confirmPasswordValid: confirmPasswordValid
        }, this.validateForm);
    }

    validateForm() {
        this.setState({ formValid: this.state.emailValid && this.state.passwordValid && this.state.firstNameValid && this.state.lastNameValid && this.state.confirmPasswordValid });
    }

    onSubmit() {
        var { firstName, lastName, email, password } = this.state;
        var data = {
            firstName,
            lastName,
            email,
            password
        };
        Axios.post("https://pacoima-ypi.azurewebsites.net/api/users/register", data)
            .then(resp => resp.data.isSuccessful)
            .catch(err => {
                console.log("an error occured while submiting form", err);
            });
        this.props.history.push("/");
    }


    render() {
        return (
            <div>
                <h1>This is the Register Page</h1>
                <form>
                    <FormGroup>
                        <div className='panel panel-default'>
                            <FormErrors formErrors={this.state.formErrors} />
                        </div>
                        <InputComponent id="firstName" label="First Name"
                            type="text" isRequired="true" placeHolder="John"
                            value={this.state.firstName}
                            onChange={this.handleChange} />
                        <InputComponent id="lastName" label="Last Name"
                            type="text" isRequired="true" placeHolder="Smith"
                            value={this.state.lastName}
                            onChange={this.handleChange}
                        />
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
                        <InputComponent id="confirmPassword" label="Confirm Password"
                            type="password" isRequired="true" placeHolder="******"
                            value={this.state.confirmPassword}
                            onChange={this.handleChange}
                        />
                        <Button type="button"
                            bsStyle="primary"
                            disabled={!this.state.formValid}
                            onClick={this.onSubmit}
                        >Submit</Button>
                    </FormGroup>
                </form>
            </div>
        );
    }
}
// const mapStateToProps = (state) => {
//     return {
//         user: state.UserReducer
//     };
// };

// const mapDispatchToProps = (dispatch) => {
//     return {
//         register: (data) => {
//             dispatch(registerUser(data));
//         }
//     };
// };
// export default connect(mapStateToProps, mapDispatchToProps)(Register);
export default Register;