import React from "react";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";

import Home from './components/home/Home'
import About from './components/about/About';
import Login from './components/user/Login';
import Logout from './components/user/Logout';
import Register from './components/user/Register';
import Myfaqs from "./components/user/Myfaq";
import Faq from './components/user/Faq';
const Routes = (props) => (
    <Router>
        <div className="nav">
            <ul>
                <li>
                    <Link to="/">Home</Link>
                </li>
                <li>
                    <Link to="/about">About</Link>
                </li>
                <li>
                    {props.isLoggedIn || <Link to="/login">Login</Link>}
                </li>
                <li>
                    {!props.isLoggedIn || <Link to="/faq">Create Faq</Link>}
                </li>
                <li>
                    {!props.isLoggedIn || <Link to="/myfaqs">Myfaqs</Link>}
                </li>
                <li>
                    {!props.isLoggedIn || <Link to="/logout" >Logout</Link>}
                </li>

                <li>
                    {props.isLoggedIn || <Link to="/register">Register</Link>}
                </li>



            </ul>

            <Route exact path="/" component={Home} />
            <Route path="/about" component={About} />
            <Route path="/login" component={Login} />
            <Route path="/logout" component={Logout} />
            <Route path="/register" component={Register} />
            <Route path="/myfaqs" component={Myfaqs} />
            <Route exact path="/faq" component={Faq} />
            <Route path="/faq/:id" component={Faq} />





        </div>
    </Router>
);

export default Routes;