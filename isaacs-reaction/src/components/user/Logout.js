import React from 'react';
import { connect } from 'react-redux';
import { logoutUser } from '../../actions/UserAction';
import { Button } from 'react-bootstrap';

class Logout extends React.Component {
    render() {
        return (
            <div>
                <h1> This is the Logout Page</h1>
                <Button bsStyle='primary' onClick={() => {
                    this.props.logout();
                    this.props.history.push("/");
                }}>Logout!</Button>
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
