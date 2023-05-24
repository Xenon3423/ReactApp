import { getUsersAPI, followAPI, unfollowAPI } from "../api/api";

const FOLLOW = 'FOLLOW';
const UNFOLLOW = 'UNFOLLOW';
const SET_USERS = 'SET_USERS';
const SET_CURRENTPAGE = 'SET_CURRENTPAGE';
const SET_TOTALCOUNT = 'SET_TOTALCOUNT';
const TOGGLE_IS_FETCHING = 'TOGGLE_IS_FETCHING';
const TOGGLE_IS_FOLLOWING_PROGRESS = 'TOGGLE_IS_FOLLOWING_PROGRESS';

let initialState = {
    usersData: [],
    pageSize: 5,
    totalUsersCount: 0,
    currentPage: 1,
    isFetching: false,
    followingInProgress: false
};

const userReducers = (state = initialState, action) => {
    switch (action.type) {
        case FOLLOW:
            return {
                ...state,
                usersData: state.usersData.map(u => {
                    if (u.id === action.userId) {
                        return { ...u, followed: true }
                    }
                    return u;
                })
            }


        case UNFOLLOW:
            return {
                ...state,
                usersData: state.usersData.map(u => {
                    if (u.id === action.userId) {
                        return { ...u, followed: false }
                    }
                    return u;
                })
            }

        case SET_USERS: {
            return { ...state, usersData: action.usersData }
        }
        case SET_CURRENTPAGE: {
            return { ...state, currentPage: action.currentPage }
        }
        case SET_TOTALCOUNT: {
            return { ...state, totalUsersCount: action.totalUsersCount }
        }
        case TOGGLE_IS_FETCHING: {
            return { ...state, isFetching: action.isFetching }
        }
        case TOGGLE_IS_FOLLOWING_PROGRESS: {
            return { ...state, followingInProgress: action.isFetching }

        }

        default:
            return state;
    }
}

export const followSuccess = (userId) => ({ type: FOLLOW, userId })
export const unfollowSuccess = (userId) => ({ type: UNFOLLOW, userId })
export const setUsers = (usersData) => ({ type: SET_USERS, usersData })
export const setCurrentPage = (currentPage) => ({ type: SET_CURRENTPAGE, currentPage })
export const setUsersTotalCount = (totalUsersCount) => ({ type: SET_TOTALCOUNT, totalUsersCount })
export const toggleIsFetching = (isFetching) => ({ type: TOGGLE_IS_FETCHING, isFetching })
export const toggleFollowingProgress = (isFetching) => ({ type: TOGGLE_IS_FOLLOWING_PROGRESS, isFetching })

export const getUsers = (currentPage, pageSize) => {
    return (dispatch) => {
    dispatch(toggleIsFetching(true));
    getUsersAPI (currentPage, pageSize).then(data => {
        dispatch(toggleIsFetching(false));
        dispatch(setUsers(data.items));
        dispatch(setUsersTotalCount(data.totalCount));
    });
}}

export const follow = (userID) => {
    return (dispatch) => {
        dispatch(toggleFollowingProgress(true));
        followAPI(userID).then(response => {
                if (response.data.resultCode == 0) {
                    dispatch(followSuccess(userID));
                }
                dispatch(toggleFollowingProgress(false));
            });
    };
}

export const unfollow = (userID) => {
    return (dispatch) => {
        dispatch(toggleFollowingProgress(true));
        unfollowAPI(userID).then(response => {
                if (response.data.resultCode == 0) {
                    dispatch(unfollowSuccess(userID));
                }
                dispatch(toggleFollowingProgress(false));
            });
    };
}


export default userReducers;