const FOLLOW = 'FOLLOW';
const UNFOLLOW = 'UNFOLLOW';
const SET_USERS = 'SET_USERS';

let initialState = {usersData: []};

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
            return {...state, usersData: action.usersData}
            }
        
         default:
            return state;
    }
}

export const followAC = (userId) => ({type: FOLLOW, userId})
export const unFollowAC = (userId) => ({type: UNFOLLOW, userId})
export const setUserAC = (usersData) => ({type: SET_USERS, usersData})


export default userReducers;