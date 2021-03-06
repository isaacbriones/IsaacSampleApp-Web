import React from 'react';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import Home from './components/toppannelroutes/home/Home';
import Blogs from './components/toppannelroutes/blogs/Blogs';
import MacroCalucaltor from './components/toppannelroutes/macrocalculator/MacroCalculator';
import WorkoutPlans from './components/toppannelroutes/workoutplans/WorkoutPlans';
import Supplements from './components/toppannelroutes/supplements/Supplements';
import Logout from './components/toppannelroutes/user/Logout';
import SupplementUpdate from './components/toppannelroutes/supplements/SupplementUpdate';

const Routes = (props) => (
    <Router>
        <div>
            <header id="js-header" className="u-header u-header--change-logo bg-dark"
                data-header-fix-moment="0">
                <div className="u-header__section g-bg-black-opacity-0_2 g-transition-0_3 g-py-7 g-py-23--md"
                    data-header-fix-moment-exclude="g-bg-black-opacity-0_5 g-py-23--md"
                    data-header-fix-moment-classes="u-shadow-v19 g-bg-white g-py-15--md">
                    <nav className="navbar navbar-expand-lg g-py-0">
                        <div className="container g-pos-rel">
                            {/* <!-- Logo --> */}
                            <Link to="/" style={{ fontSize: "20px", color: "#008080", fontFamily: "Courier New, Courier, monospace" }}>
                                <strong>IBFitness</strong>
                            </Link>
                            {/* <!-- End Logo --> */}

                            {/* <!-- Navigation --> */}
                            <div className="collapse navbar-collapse align-items-center flex-sm-row" id="navBar">
                                <ul id="js-scroll-nav" className="navbar-nav text-uppercase g-letter-spacing-1 g-font-size-12 g-pt-20 g-pt-0--lg ml-auto">
                                    <li className="nav-item g-mr-15--lg g-mb-7 g-mb-0--lg">
                                        {props.isLoggedIn || <Link to="/" className="nav-link p-0">Sign In</Link>}
                                    </li>
                                    <li className="nav-item g-mx-15--lg g-mb-7 g-mb-0--lg">
                                        {!props.isLoggedIn || <Link to="/workoutplans" className="nav-link p-0">Workout Plans</Link>}
                                    </li>
                                    <li className="nav-item g-mx-15--lg g-mb-7 g-mb-0--lg">
                                        {!props.isLoggedIn || <Link to="/macrocalculator" className="nav-link p-0">Macro Calculator</Link>}
                                    </li>
                                    <li className="nav-item g-mx-15--lg g-mb-7 g-mb-0--lg">
                                        {!props.isLoggedIn || <Link to="/blogs" className="nav-link p-0">Blogs</Link>}
                                    </li>
                                    <li className="nav-item g-mx-15--lg g-mb-7 g-mb-0--lg">
                                        {!props.isLoggedIn || <Link to="/supplements" className="nav-link p-0">Supplements</Link>}
                                    </li>
                                    <li className="nav-item g-mx-15--lg g-mb-7 g-mb-0--lg">
                                        {!props.isLoggedIn || <Link to="/logout" className="nav-link p-0">Logout</Link>}
                                    </li>
                                </ul>
                            </div>
                            {/* <!-- End Navigation --> */}

                            {/* <!-- Responsive Toggle Button --> */}
                            <button className="navbar-toggler btn g-line-height-1 g-brd-none g-pa-0 g-pos-abs g-top-15 g-right-0" type="button"
                                aria-label="Toggle navigation"
                                aria-expanded="false"
                                aria-controls="navBar"
                                data-toggle="collapse"
                                data-target="#navBar">
                                <span className="hamburger hamburger--slider">
                                    <span className="hamburger-box">
                                        <span className="hamburger-inner"></span>
                                    </span>
                                </span>
                            </button>
                            {/* <!-- End Responsive Toggle Button --> */}
                        </div>
                    </nav>
                </div>
            </header>
            <Route exact path="/" component={Home} />
            <Route path="/workoutplans" component={WorkoutPlans} />
            <Route path="/macrocalculator" component={MacroCalucaltor} />
            <Route path="/blogs" component={Blogs} />
            <Route path="/supplements" component={Supplements} />
            <Route path="/supplementupdate/:id" component={SupplementUpdate} />
            <Route path="/logout" component={Logout} />
        </div>
    </Router>
);
export default Routes;