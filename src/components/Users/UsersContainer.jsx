import React from "react";
import { connect } from "react-redux";
import { followAC, setUserAC, unFollowAC } from "../../redux/usersReducer";
import Users from "./Users";

let mapStateToProps = (state) => {
    return {
        usersData: state.usersPage.usersData
    }
}

let mapDispatchToProps = (dispatch) => {
    return {
        follow: (userId) => {
            dispatch(followAC(userId));
        },
        unfollow: (userId) => {
            dispatch(unFollowAC(userId));
        },
        setUsers: (usersData) => {
            dispatch(setUserAC(usersData));
        }
    }
}
export default connect (mapStateToProps,mapDispatchToProps) (Users);