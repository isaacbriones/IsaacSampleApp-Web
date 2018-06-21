import React from 'react';
import { connect } from 'react-redux';
import { logoutUser } from '../../../actions/UserAction';

class Logout extends React.Component {
    componentDidMount() {
        this.props.logout();
    }

    componentDidUpdate(prevProps, prevState) {
        if (!this.props.user.isLoggedIn) {
            console.log(this.props.user.isLoggedIn)
            this.props.history.push("/");
        }
    }

    render() {
        return (
            <div>
                {/* reroutes before render */}
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
        logout: () => {
            dispatch(logoutUser());
        }
    };
};
export default connect(mapStateToProps, mapDispatchToProps)(Logout);