import React from 'react';
import { homeMain } from '../../actions/UserAction';
import { connect } from "react-redux";


class Home extends React.Component {

    componentDidMount() {
        this.props.home();
    }

    render() {
        return (
            <div>
                <h1> This is the Home Page</h1>
                {!this.props.user.isLoggedIn ||
                    <h3>Welcome {this.props.firstName} {this.props.lastName}</h3>}
            </div>
        );
    }
}



const mapStateToProps = (state) => {
    return {
        user: state.UserReducer,
        firstName: state.UserReducer.firstName,
        lastName: state.UserReducer.lastName
    };
};


const mapDispatchToProps = (dispatch) => {
    return {
        home: (data) => {
            dispatch(homeMain(data));
        }
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(Home);
// export default Home;
