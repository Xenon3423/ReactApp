const ADD_POST = 'ADD-POST';
const UNPT = 'UPDATE-NEW-POST-TEXT';
const SET_USER_PROFILE = 'SET_USER_PROFILE';

let initialState = {
    postData: [
        { id: 1, message: 'Hi? how are you?', like: 10 },
        { id: 2, message: 'It" s my first post', like: 8 }
    ],
    newPostText: '',
    profile: null
}

const profileReducer = (state = initialState, action) => {
    switch (action.type) {
        case ADD_POST: {
            let newPost = {
                id: 3,
                message: state.newPostText,
                like: 0
            };
            return {
                ...state,
                postData: [...state.postData, newPost],
                newPostText: ''};
        }
        case UNPT: {
            return {
                ...state,
                newPostText: action.newText};
        }
        case SET_USER_PROFILE: {
            return {
                ...state,
                profile: action.profile};
        }
        default:
            return state;
    }
}

export const addPostActionCreator = () => ({type: ADD_POST})
export const updateNewPostActionCreator = (text) => ({type: UNPT, newText: text})
export const setUsersProfile = (profile) => ({type: SET_USER_PROFILE, profile})

export default profileReducer;