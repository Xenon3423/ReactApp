let state = {
    profilePage: {
        postData: [
            { id: 1, message: 'Hi? how are you?', like: 10 },
            { id: 2, message: 'It" s my first post', like: 8 }
        ]
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

}

export let addPost = (postMessage) => {
    let newPost = {
        id:3,
        message:postMessage,
        like:0
    };

    state.profilePage.postData.push(newPost);
}

export default state;