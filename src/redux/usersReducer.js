const FOLLOW = 'FOLLOW';
const UNFOLLOW = 'UNFOLLOW';
const SET_USERS = 'SET_USERS';

let initialState = {
    usersData: [ 
        { id: 1, photoUrl: 'https://vsegda-pomnim.com/uploads/posts/2022-04/1650244828_59-vsegda-pomnim-com-p-astra-r-foto-63.jpg', followed: false, fullName: 'Alexander', status: 'Opel Astra GTC', location: {city: 'Krasnodar', country: 'Russia'} },
        { id: 2, photoUrl: 'https://mobimg.b-cdn.net/v3/fetch/08/08166611dd3c60def4a4e6015f8d5397.jpeg', followed: true, fullName: 'John', status: 'Honda Civic 4D', location: {city: 'Krasnodar', country: 'Russia'} },
        { id: 3, photoUrl: 'https://i.ytimg.com/vi/YrVbqDO46OI/maxresdefault.jpg', followed: false, fullName: 'Michael', status: 'Honda Civic Si', location: {city: 'Krasnodar', country: 'Russia'} }
    ]
};

const userReducers = (state = initialState, action) => {
    switch (action.type) {
        case FOLLOW:
            return { 
                ...state,
                usersData: state.usersData.map( u => {
                if (u.id === action.userId) {
                   return {...u, followed: true} 
                } 
                return u;})}
        
            
        case UNFOLLOW: 
        return { 
            ...state,
            usersData: state.usersData.map( u => {
            if (u.id === action.userId) {
               return {...u, followed: false} 
            }
            return u;})}
        
        case SET_USERS: {
            return {...state, users: [...state.usersData, action.usersData]}
            }
        
         default:
            return state;
    }
}

export const followAC = (userId) => ({type: FOLLOW, userId})
export const unFollowAC = (userId) => ({type: UNFOLLOW, userId})
export const setUserAC = (usersData) => ({type: SET_USERS, usersData})


export default userReducers;