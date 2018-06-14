import React from 'react';

class About extends React.Component {
    render() {
        return (
            <div id="about-section" className="g-overflow-hidden">
                <div className="container g-pt-100">
                    {/* <!-- Heading --> */}
                    <div className="g-max-width-550 text-center mx-auto g-mb-100">
                        <h1 className="text-uppercase g-color-main-light-v1 g-font-weight-600 g-font-size-13 g-letter-spacing-2 mb-4">About Us</h1>
                        <p className="g-font-size-16">Unify creative technology company providing key digital services. Focused on helping our clients to build a successful business on web and mobile.</p>
                    </div>
                    {/* <!-- End Heading --> */}

                    {/* <!-- Icon Blocks --> */}
                    <ul className="row list-inline u-info-v9-1 g-pb-70 mb-0">
                        <li className="col-md-4 list-inline-item g-mx-0 g-mb-30">
                            {/* <!-- Icon Blocks --> */}
                            <div className="u-block-hover text-center g-px-40">
                                <div className="g-mb-5">
                                    <span className="u-icon-v1 g-width-85 g-height-85 g-color-main g-font-size-50 rounded-circle">
                                        <i className="icon-education-024 u-line-icon-pro"></i>
                                    </span>
                                </div>
                                <div className="g-mb-25">
                                    <span className="u-icon-v2 u-shadow-v22 g-width-25 g-height-25 g-color-primary g-bg-white g-font-size-9 rounded-circle">
                                        <i className="fa fa-check"></i>
                                    </span>
                                </div>
                                <h3 className="g-color-primary g-font-weight-600 g-font-size-17 text-uppercase mb-3">
                                    <span className="g-color-main g-font-weight-700">01.</span>
                                    Consult
                                </h3>
                                <p>We aim high at being focused on building relationships with our clients and community.</p>
                            </div>
                            {/* <!-- End Icon Blocks --> */}
                        </li>

                        <li className="col-md-4 list-inline-item g-mx-0 g-mb-30">
                            {/* <!-- Icon Blocks --> */}
                            <div className="u-block-hover text-center g-px-40">
                                <div className="g-mb-5">
                                    <span className="u-icon-v1 g-width-85 g-height-85 g-color-main g-font-size-50 rounded-circle">
                                        <i className="icon-education-073 u-line-icon-pro"></i>
                                    </span>
                                </div>
                                <div className="g-mb-25">
                                    <span className="u-icon-v2 u-shadow-v22 g-width-25 g-height-25 g-color-white g-bg-primary g-font-size-9 rounded-circle">
                                        <i className="fa fa-check"></i>
                                    </span>
                                </div>
                                <h3 className="g-color-primary g-font-weight-600 g-font-size-17 text-uppercase mb-3">
                                    <span className="g-color-main g-font-weight-700">02.</span>
                                    Create
                                </h3>
                                <p>We strive to embrace and drive change in our industry which allows us to keep our clients relevant.</p>
                            </div>
                            {/* <!-- End Icon Blocks --> */}
                        </li>

                        <li className="col-md-4 list-inline-item g-mx-0 g-mb-30">
                            {/* <!-- Icon Blocks --> */}
                            <div className="u-block-hover text-center g-px-40">
                                <div className="g-mb-5">
                                    <span className="u-icon-v1 g-width-85 g-height-85 g-color-main g-font-size-50 rounded-circle">
                                        <i className="icon-communication-180 u-line-icon-pro"></i>
                                    </span>
                                </div>
                                <div className="g-mb-25">
                                    <span className="u-icon-v2 u-shadow-v22 g-width-25 g-height-25 g-color-primary g-bg-white g-font-size-9 rounded-circle">
                                        <i className="fa fa-check"></i>
                                    </span>
                                </div>
                                <h3 className="g-color-primary g-font-weight-600 g-font-size-17 text-uppercase mb-3">
                                    <span className="g-color-main g-font-weight-700">03.</span>
                                    Release
                </h3>
                                <p>At the end of the day, it's important to not let being busy distract us from having fun.</p>
                            </div>
                            {/* <!-- End Icon Blocks -->*/}
                        </li>
                    </ul>
                    {/* <!-- End Icon Blocks --> */}
                </div>
            </div>
        );
    }
}
export default About;