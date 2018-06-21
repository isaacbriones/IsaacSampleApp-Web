import React from 'react';
import WorkoutPlanApi from '../../../api/WorkoutPlanApi';
import { connect } from 'react-redux';

class WorkoutPlans extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            imageUrl: "",
            title: "",
            description: "",
            dataList: []
        };
        this.getPlans = this.getPlans.bind(this);
        this.onGetPlans_Success = this.onGetPlans_Success.bind(this);
    }

    componentDidMount() {
        if (this.props.user.isLoggedIn === false) {
            this.props.history.push("/")
        }
        this.getPlans();
    }
    getPlans() {
        WorkoutPlanApi.GetPlans(this.onGetPlans_Success, this.onGetPlans_Error);
    }

    onGetPlans_Success(resp) {
        console.log(resp);
        this.setState({
            dataList: resp.data.items
        })
    }

    onGetPlans_Error(err) {
        console.log(err);
    }
    render() {
        return (
            <div className="container">
                <h1><em>Beginner Plans</em></h1>
                <br /><br />
                <div className="row">
                    {this.state.dataList.map((item, index) =>
                        <div className="col-sm-3" key={index}>
                            <div className="card" style={{ width: "18rem" }}>
                                <img className="card-img-top" src={item.imageUrl} alt="Card image cap" />
                                <div className="card-body">
                                    <h5 className="card-title"><a href={item.titleLink} style={{ display: "block", color: "black" }}><strong>{item.title}</strong></a></h5>
                                    <p className="card-text" style={{ textTransform: "capitalize" }}>{item.description}</p>
                                </div>
                            </div>
                            <br />
                        </div>
                    )}
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
export default connect(mapStateToProps)(WorkoutPlans);