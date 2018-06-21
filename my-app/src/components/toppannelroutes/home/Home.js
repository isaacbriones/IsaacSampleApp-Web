import React from 'react';
import { Link } from 'react-router-dom';
import RegisterInput from './Register';
import UserApi from '../../../api/UserApi';
import { connect } from 'react-redux';
import { loginUser } from '../../../actions/UserAction';

class Home extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            name: "",
            email: "",
            password: "",
            cPassword: "",
            nameError: false,
            emailError: false,
            passwordError: false,
            cPasswordError: false,
            loginError: false,
            buttonClicked: false,
            loginBtn: true,
            registerBtn: false,
            registerForm: true,
            loginForm: false
        }
        this.handleChange = this.handleChange.bind(this);
        this.onSubmitRegister = this.onSubmitRegister.bind(this);
        this.onSubmitRegister_Success = this.onSubmitRegister_Success.bind(this);
        this.onSubmitLogin = this.onSubmitLogin.bind(this);
        this.onLogin_Success = this.onLogin_Success.bind(this);
    }
    componentDidUpdate(prevProps, prevState) {
        if (this.props.user.isLoggedIn) {
            this.props.history.push("/workoutplans");
        }
        else if (prevProps.user.loginSuccess !== false && this.props.user.loginSuccess === false) {
            this.setState({
                ...this.state,
                loginError: true,
                buttonClicked: false
            })
        }
    }

    onSubmitLogin(evt) {
        evt.preventDefault();
        this.validate(this.state.email, this.state.password);
    }

    onSubmitRegister() {
        let data = {
            name: this.state.name,
            email: this.state.email,
            password: this.state.password
        }
        this.setState({
            registerBtn: true
        })
        this.validate(this.state.email, this.state.password, this.state.cPassword);
    }

    onSubmitRegister_Success(resp) {
        console.log(resp);
        alert("Account was successfully made! Please Sign In")
    }

    onSubmitRegister_Error(err) {
        console.log(err);
    }

    validate(email, password, cPassword, name) {
        this.setState({
            ...this.state,
            emailError: !/^([a-zA-Z0-9_\-\.]+)@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.)|(([a-zA-Z0-9\-]+\.)+))([a-zA-Z]{2,4}|[0-9]{1,3})(\]?)$/.test(email),
            passwordError: !/(?=.{8,})(?=.*[0-9])/.test(password),
            cPasswordError: !(password === cPassword),
            nameError: !(this.state.name > 3),
            buttonClicked: true,
        }, () => { this.callApi(); });
    }

    callApi() {
        if (this.state.loginBtn == true) {
            if (this.state.emailError === false && this.state.passwordError === false) {
                let data = {
                    email: this.state.email,
                    password: this.state.password
                }
                this.props.login(data)
            } else {
            }
        } else if (this.state.registerBtn == true) {
            if (this.state.emailError === false && this.state.passwordError === false && this.state.cPasswordError === false) {
                UserApi.Register({ email: this.state.email, password: this.state.password }, this.onSubmitRegister_Success, this.onSubmitRegister_Error);
            }
        }
    }

    onLogin_Success(resp) {
        console.log(resp);
        this.props.history.push("/workoutplans");
    }

    onLogin_Error(err) {
        console.log(err);
    }

    handleChange(evt) {
        const key = evt.target.name;
        const val = evt.target.value;
        this.setState({
            ...this.state,
            [key]: val
        });
    }

    showLoginForm() {
        this.setState({
            ...this.state,
            loginBtn: true,
            registerBtn: false,
            loginForm: false,
            registerForm: true
        });
        this.refreshForm();
    }

    showRegisterForm() {
        this.setState({
            ...this.state,
            loginBtn: false,
            registerBtn: true,
            loginForm: true,
            registerForm: false
        });
        this.refreshForm();
    }

    refreshForm() {
        this.setState({
            name: "",
            email: "",
            password: "",
            cPassword: "",
            emailError: false,
            passwordError: false,
            cPasswordError: false,
            loginError: false,
            captchaShow: true,
        })
    }
    render() {
        const divStyle = {
            backgroundImage: "url(http://quotesideas.com/wp-content/uploads/2015/09/bodybuilder-widescreen-high-definition-wallpaper-images-full-free.jpg)",
            backgroundSize: "cover"
        }
        return (
            <div className="container">
                <br />
                <div className="g-bg-img-hero g-bg-pos-top-center" style={divStyle}>
                    <div className="container g-pt-100 g-pb-100 g-pb-130--lg">
                        <div className="g-pos-rel">
                            <div className="row">
                                <div className="col-md-6 offset-md-3" style={{ background: "rgba(240, 248, 255,0.7)", paddingTop: "15px", paddingBottom: "15px" }}>
                                    <ul className="nav nav-pills mb-3" id="pills-tab" role="tablist">
                                        <li className="nav-item">
                                            <a className="nav-link active" id="pills-home-tab" data-toggle="pill" href="#pills-home" role="tab" aria-controls="pills-home" aria-selected="true" onClick={() => this.showLoginForm()} style={{ color: "white" }}>Sign in</a>
                                        </li>
                                        <li className="nav-item">
                                            <a className="nav-link" id="pills-profile-tab" data-toggle="pill" href="#pills-profile" role="tab" aria-controls="pills-profile" aria-selected="false" onClick={() => this.showRegisterForm()} style={{ color: "white" }}>Create Account</a>
                                        </li>
                                    </ul>
                                    <form>
                                        <div id="signup" styles="display: none;">
                                            <div className="g-mb-20">
                                                {!this.state.registerForm && <div className="g-mb-10">
                                                    <RegisterInput type="text" id="name" name="name" icon="fa fa-user" placeholder="Full Name" value={this.state.name} onChange={this.handleChange} />
                                                    <p style={{ background: "red", color: "white" }} className="form-control-feedback"> {this.state.nameError ? "Name must be at least 3 characters long" : ""} </p>
                                                </div>}
                                                <br />
                                                <RegisterInput type="email" id="email" name="email" value={this.state.email} onChange={this.handleChange} icon="fa fa-envelope" placeholder="Email" />
                                                <br />
                                                <p style={{ background: "red", color: "white" }} className="form-control-feedback" > {this.state.emailError ? "Email address entered is invalid." : ""} </p>
                                            </div>
                                            <div className="g-mb-20">
                                                <RegisterInput type="password" id="password" name="password" value={this.state.password} onChange={this.handleChange} icon="fa fa-lock" placeholder="Password" />
                                                <br />
                                                <p style={{ background: "red", color: "white" }} className="form-control-feedback"> {this.state.passwordError ? "Password must be at least 8 characters and contain at least one number." : ""} </p>
                                            </div>
                                            {!this.state.registerForm && <div className="g-mb-10">
                                                <RegisterInput type="password" id="cPassword" name="cPassword" icon="fa fa-lock" placeholder="Confirm Password" value={this.state.cPassword} onChange={this.handleChange} />
                                                <p style={{ background: "red", color: "white" }} className="form-control-feedback"> {this.state.cPasswordError ? "Passwords must match." : ""} </p>
                                            </div>}
                                            <div style={{ paddingBottom: "10px" }}>
                                                {!this.state.loginForm && <button type="button" className="btn u-shadow-v33 g-color-white g-bg-primary g-bg-main--hover g-font-size-default rounded g-px-25 g-py-7" style={{ width: "100%" }} onClick={this.onSubmitLogin}>Sign in</button>}
                                                {!this.state.registerForm && <button type="button" className="btn u-shadow-v33 g-color-white g-bg-primary g-bg-main--hover g-font-size-default rounded g-px-25 g-py-7" style={{ width: "100%" }} onClick={this.onSubmitRegister}>Register</button>}
                                            </div>
                                        </div>
                                        <br />
                                        <br />
                                        <br />
                                    </form>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}
const mapStateToProps = (state) => {
    return {
        user: state.UserReducer
    };
};

const mapDispatchToProps = (dispatch) => {
    return {
        login: (data) => {
            dispatch(loginUser(data));
        }
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(Home);