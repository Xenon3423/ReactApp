import React from "react";
import axios from "axios";


export const getUsersAPI = (currentPage, pageSize) => {
    return axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${currentPage}&count=${pageSize}`, { withCredentials: true })
        .then(response => response.data);
}
export const followAPI = (userID) => {
    return axios.post(`https://social-network.samuraijs.com/api/1.0/follow/${userID}`, {}, { withCredentials: true, headers: { "API-KEY": "b12ce9c7-a407-496a-a8e7-17df99b65fd0" } })
}

export const unfollowAPI = (userID) => {
    return axios.delete(`https://social-network.samuraijs.com/api/1.0/follow/${userID}`, { withCredentials: true, headers: { "API-KEY": "b12ce9c7-a407-496a-a8e7-17df99b65fd0" } })
}

export const getProfileAPI = (userID) => {
    return axios.get(`https://social-network.samuraijs.com/api/1.0/profile/` + userID, { withCredentials: true });
}

export const authAPI = () => {
    return axios.get(`https://social-network.samuraijs.com/api/1.0/auth/me`, { withCredentials: true })
}