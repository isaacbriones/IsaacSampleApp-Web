import React from 'react';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import Home from './components/toppannelroutes/home/Home';

const Routes = (props) => (
    <Router>
        <div>
            <header id="js-header" class="u-header u-header--change-appearance u-header--change-logo"
                data-header-fix-moment="0">
                <div class="u-header__section g-bg-black-opacity-0_2 g-transition-0_3 g-py-7 g-py-23--md"
                    data-header-fix-moment-exclude="g-bg-black-opacity-0_5 g-py-23--md"
                    data-header-fix-moment-classes="u-shadow-v19 g-bg-white g-py-15--md">
                    <nav class="navbar navbar-expand-lg g-py-0">
                        <div class="container g-pos-rel">
                            {/* <!-- Logo --> */}
                            <a href="#!" class="js-go-to navbar-brand u-header__logo"
                                data-type="static">
                                <img class="u-header__logo-img u-header__logo-img--main g-width-90" src="assets/img/logo.png" alt="Image description" />
                                <img class="u-header__logo-img g-width-90" src="assets/img/logo-dark.png" alt="Image description" />
                            </a>
                            {/* <!-- End Logo --> */}

                            {/* <!-- Navigation --> */}
                            <div class="collapse navbar-collapse align-items-center flex-sm-row" id="navBar">
                                <ul id="js-scroll-nav" class="navbar-nav text-uppercase g-letter-spacing-1 g-font-size-12 g-pt-20 g-pt-0--lg ml-auto">
                                    <li class="nav-item g-mr-15--lg g-mb-7 g-mb-0--lg">
                                        <Link to="/" class="nav-link p-0">Home</Link>
                                    </li>
                                    <li class="nav-item g-mx-15--lg g-mb-7 g-mb-0--lg">
                                        <Link to="/j" class="nav-link p-0">About</Link>
                                    </li>
                                    <li class="nav-item g-mx-15--lg g-mb-7 g-mb-0--lg">
                                        <Link to="/n" class="nav-link p-0">Services</Link>
                                    </li>
                                    <li class="nav-item g-mx-15--lg g-mb-7 g-mb-0--lg">
                                        <Link to="/v" class="nav-link p-0">News</Link>
                                    </li>
                                    <li class="nav-item g-mx-15--lg g-mb-7 g-mb-0--lg">
                                        <Link to="/r" class="nav-link p-0">Portfolio</Link>
                                    </li>
                                    <li class="nav-item g-mx-15--lg g-mb-7 g-mb-0--lg">
                                        <Link to="/s" class="nav-link p-0">Contact</Link>
                                    </li>
                                </ul>
                            </div>
                            {/* <!-- End Navigation --> */}

                            {/* <!-- Responsive Toggle Button --> */}
                            <button class="navbar-toggler btn g-line-height-1 g-brd-none g-pa-0 g-pos-abs g-top-15 g-right-0" type="button"
                                aria-label="Toggle navigation"
                                aria-expanded="false"
                                aria-controls="navBar"
                                data-toggle="collapse"
                                data-target="#navBar">
                                <span class="hamburger hamburger--slider">
                                    <span class="hamburger-box">
                                        <span class="hamburger-inner"></span>
                                    </span>
                                </span>
                            </button>
                            {/* <!-- End Responsive Toggle Button --> */}
                        </div>
                    </nav>
                </div>
            </header>
            <Route exact path="/" component={Home} />
        </div>
    </Router>
);
export default Routes;