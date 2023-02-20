const ADD_POST = 'ADD-POST';
const UNPT = 'UPDATE-NEW-POST-TEXT';



const profileReducer = (state, action) => {
    switch (action.type) {
        case ADD_POST:
            let newPost = {
                id: 3,
                message: state.newPostText,
                like: 0
            };
            state.postData.push(newPost);
            state.newPostText = '';
            return state;
        case UNPT:
            state.newPostText = action.newText;
            return state;
        default:
            return state;
    }
}

export const addPostActionCreator = () => ({type: ADD_POST})
export const updateNewPostActionCreator = (text) => ({type: UNPT, newText: text})

export default profileReducer;