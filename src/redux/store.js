import profileReducer from "./profileReducer"
import messengerReducer from "./messengerReducer"

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
            ],
            NewMessageBody: ""

        },
        sideBar: {
            
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

        this._state.profilePage = profileReducer(this._state.profilePage, action)
        this._state.messengerPage = messengerReducer(this._state.messengerPage, action)
        this._callSubscriber(this._state);
    }
}

export default store;
window.store = store;