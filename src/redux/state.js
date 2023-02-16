const ADD_POST = 'ADD-POST';
const UNPT = 'UPDATE-NEW-POST-TEXT';



let store = {
    _state: {
        profilePage: {
            postData: [
                { id: 1, message: 'Hi? how are you?', like: 10 },
                { id: 2, message: 'It" s my first post', like: 8 }
            ],
            newPostText: 'WoW'
        },
        
        messengerPage: {
            MessengerData: [
                { id: 1, name: 'Alex' },
                { id: 2, name: 'Sam' },
                { id: 3, name: 'Katrin' },
                { id: 4, name: 'John' }
            ],
            MessageData: [
                { id: 1, message: 'Hi' },
                { id: 2, message: 'How are you' },
                { id: 3, message: 'Yo' }
            ]
        }
    },
    _callSubscriber() {
        console.log('state changed')
    },

    getState() {
        return this._state;
    },
    subscribe(observer) {
        this._callSubscriber = observer;
    },
  
    
    dispatch(action) {
        if (action.type === ADD_POST) {
            let newPost = {
                id:3,
                message: this._state.profilePage.newPostText,
                like:0
            };
            this._state.profilePage.postData.push(newPost);
            this._state.profilePage.newPostText = '';
            this._callSubscriber(this._state);
        } else if (action.type === UNPT) {
            this._state.profilePage.newPostText = action.newText;
            this._callSubscriber(this._state);
        }
    }
}

export const addPostActionCreator = () => ({type: ADD_POST})
export const updateNewPostActionCreator = (text) => ({type: UNPT, newText: text})

export default store;
window.store = store;