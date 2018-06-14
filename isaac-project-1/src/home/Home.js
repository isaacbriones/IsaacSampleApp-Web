import React from 'react';

const fontStyle = {
    fontFamily: "Courier New"
}

const divStyle = {
    border: "2px solid #353535",
    borderRadius: "5px",
    background: "#f6f5f5",
    width: "100%",
    maxWidth: "760px",
    overflow: "hidden",
    margin: "0 auto",
    boxSizing: " border-box"
}
class Home extends React.Component {
    render() {
        return (
            <div className="continer g-pt-50 g-pt-50--md g-pb-70">
                <div className="row">
                    <div className="col-sm-10 offset-sm-1 text-center">
                        <header>
                            <h1 style={fontStyle}>Macronutrient Calculator</h1>
                        </header>
                        <div style={divStyle}>
                            <h1 style={{ fontSize: "25px" }}>Please Fill out the Fields Below</h1>
                            <form>
                                <div class="form-group col-sm-4 offset-sm-4">
                                    <label className="pull-left" htmlFor="Age">Age:</label>
                                    <input type="number" class="form-control" placeholder="18" />
                                    <br />
                                    <label className="pull-left" htmlFor="Gender">Gender:</label>
                                    <br />
                                </div>
                                <div class="form-group col-sm-4 offset-sm-4">
                                    <div class="custom-control custom-radio">
                                        <input type="radio" id="customRadio1" name="customRadio" class="custom-control-input" />
                                        <label class="custom-control-label" for="customRadio1">Male</label>
                                    </div>
                                    <div class="custom-control custom-radio">
                                        <input type="radio" id="customRadio2" name="customRadio" class="custom-control-input" />
                                        <label class="custom-control-label" for="customRadio2">Female</label>
                                    </div>
                                </div>
                                <div class="form-group col-sm-4 offset-sm-4">
                                    <div class="row">
                                        <div class="col offset-sm-4">
                                            <label className="pull-left">Feet</label>
                                            <input type="number" class="form-control" placeholder="6" />
                                        </div>
                                        <div class="col offset-sm-4">
                                            <label className="pull-left">Inches</label>
                                            <input type="number" class="form-control" placeholder="1" />
                                        </div>
                                    </div>
                                    {/* <div class=" form-group col-sm-7">
                                        <label className="pull-left">Feet</label>
                                        <input type="number" class="form-control" placeholder="6" />
                                    </div>
                                    <div class="form-group col-sm-7">
                                        <label className="pull-left">Inches</label>
                                        <input type="number" class="form-control" placeholder="1" />
                                    </div> */}
                                </div>
                                <div className="col-sm-4 offset-sm-4">
                                    <label className="pull-left" htmlFor="Age">Weight:</label>
                                </div>
                                <div class="form-group col-sm-4 offset-sm-4">
                                    <input type="number" class="form-control" placeholder="185lb" />
                                </div>
                                <div className="col-sm-4 offset-sm-4">
                                    <label className="pull-left" for="inputState">Plan:</label>
                                </div>
                                <div class="form-group col-sm-4 offset-sm-4">
                                    <select id="inputState" class="form-control">
                                        <option selected>Choose...</option>
                                        <option>Fat Loss</option>
                                        <option>Muscle Gain</option>
                                        <option>Maintenance</option>
                                    </select>
                                    <br />
                                    <label className="pull-left">Activity Level:</label>
                                    <br />
                                </div>
                            </form>
                            <div class="form-group col-sm-4 offset-sm-4">
                                <div class="custom-control custom-radio">
                                    <input type="radio" id="customRadio3" name="customRadio" class="custom-control-input" />
                                    <label class="custom-control-label" for="customRadio3">Not Active</label>
                                </div>
                                <div class="custom-control custom-radio">
                                    <input type="radio" id="customRadio4" name="customRadio" class="custom-control-input" />
                                    <label class="custom-control-label" for="customRadio4">Light Activity</label>
                                </div>
                                <div class="custom-control custom-radio">
                                    <input type="radio" id="customRadio5" name="customRadio" class="custom-control-input" />
                                    <label class="custom-control-label" for="customRadio5">Active</label>
                                </div>
                                <div class="custom-control custom-radio">
                                    <input type="radio" id="customRadio6" name="customRadio" class="custom-control-input" />
                                    <label class="custom-control-label" for="customRadio6">Very Active</label>
                                </div>
                            </div>
                            <div className="col-sm-4 offset-sm-4">
                                <button className="btn btn-block btn-md u-btn-outline-blue g-mr-10 g-mb-15">Submit</button>
                            </div>
                            <br />
                        </div>
                    </div>
                </div>
            </div >
        );
    }
}
export default Home;