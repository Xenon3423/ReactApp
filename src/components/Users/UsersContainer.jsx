import React from "react";
import { connect } from "react-redux";
import { followAC, setUserAC, unFollowAC, setCurrentPageAC, setUsersTotalCountAC } from "../../redux/usersReducer";
import Users from "./Users";

let mapStateToProps = (state) => {
    return {
        usersData: state.usersPage.usersData,
        pageSize: state.usersPage.pageSize,
        totalUsersCount: state.usersPage.totalUsersCount,
        currentPage: state.usersPage.currentPage
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
        },
        setCurrentPage: (pageNumber) => {
            dispatch(setCurrentPageAC(pageNumber))
        },
        setTotalUsersCount: (totalCount) => {
            dispatch(setUsersTotalCountAC(totalCount))
        }
    }
}
export default connect (mapStateToProps,mapDispatchToProps) (Users);