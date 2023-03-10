const ADD_POST = 'ADD-POST';
const UNPT = 'UPDATE-NEW-POST-TEXT';

let initialState = {
    postData: [
        { id: 1, message: 'Hi? how are you?', like: 10 },
        { id: 2, message: 'It" s my first post', like: 8 }
    ],
    newPostText: ''
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
        default:
            return state;
    }
}

export const addPostActionCreator = () => ({type: ADD_POST})
export const updateNewPostActionCreator = (text) => ({type: UNPT, newText: text})

export default profileReducer;