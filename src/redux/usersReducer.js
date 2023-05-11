const FOLLOW = 'FOLLOW';
const UNFOLLOW = 'UNFOLLOW';
const SET_USERS = 'SET_USERS';
const SET_CURRENTPAGE = 'SET_CURRENTPAGE';
const SET_TOTALCOUNT = 'SET_TOTALCOUNT';
const TOGGLE_IS_FETCHING = 'TOGGLE_IS_FETCHING';

let initialState = {
    usersData: [],
    pageSize: 5,
    totalUsersCount: 0,
    currentPage: 1,
    isFetching: false
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
            return {...state, usersData: action.usersData}
            }
        case SET_CURRENTPAGE: {
            return {...state, currentPage: action.currentPage}
        }
        case SET_TOTALCOUNT: {
            return {...state, totalUsersCount: action.totalUsersCount}
        }
        case TOGGLE_IS_FETCHING: {
            return {...state, isFetching: action.isFetching }
        }
        
         default:
            return state;
    }
}

export const follow = (userId) => ({type: FOLLOW, userId})
export const unfollow = (userId) => ({type: UNFOLLOW, userId})
export const setUsers = (usersData) => ({type: SET_USERS, usersData})
export const setCurrentPage = (currentPage) => ({type: SET_CURRENTPAGE, currentPage})
export const setUsersTotalCount = (totalUsersCount) => ({type: SET_TOTALCOUNT, totalUsersCount})
export const toggleIsFetching = (isFetching) => ({type: TOGGLE_IS_FETCHING, isFetching})

export default userReducers;