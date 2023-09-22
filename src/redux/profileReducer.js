import { getProfileAPI, getStatusAPI, updateStatusAPI } from "./../api/api";

const ADD_POST = 'ADD-POST';
const SET_USER_PROFILE = 'SET_USER_PROFILE';
const SET_STATUS = 'SET_STATUS';

let initialState = {
    postData: [
        { id: 1, message: 'Hi? how are you?', like: 10 },
        { id: 2, message: 'It" s my first post', like: 8 }
    ],
    profile: null,
    status: ""
}

const profileReducer = (state = initialState, action) => {
    switch (action.type) {
        case ADD_POST: {
            let newPost = {
                id: 3,
                message: action.newPostText,
                like: 0
            };
            return {
                ...state,
                postData: [...state.postData, newPost],
                newPostText: ''
            };
        }
        case SET_USER_PROFILE: {
            return {
                ...state,
                profile: action.profile
            };
        }
        case SET_STATUS: {
            return {
                ...state,
                status: action.status
            };
        }
        default:
            return state;
    }
}

export const addPostActionCreator = (newPostText) => ({ type: ADD_POST, newPostText })
export const setUsersProfile = (profile) => ({ type: SET_USER_PROFILE, profile })
export const setStatus = (status) => ({ type: SET_STATUS, status })

export const getUsersProfile = (userID) => (dispatch) => {
    return getProfileAPI(userID).then(response => {
        dispatch(setUsersProfile(response.data));
    });
}

export const getStatus = (userID) => (dispatch) => {
    return getStatusAPI(userID).then(response => {
        dispatch(setStatus(response.data));
    });
}

export const updateStatus = (status) => (dispatch) => {
    return updateStatusAPI(status).then(response => {
        if (response.data.resultCode === 0) {
            dispatch(setStatus(status));
        }
    });
}



export default profileReducer;