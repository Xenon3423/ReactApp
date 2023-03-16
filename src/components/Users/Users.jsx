import axios from "axios";
import React from "react";
import styles from "./User.module.css"
import userPhoto from "./../../assets/image/1.png";

let Users = (props) => {
    if (props.usersData) {
        debugger;
        axios.get("https://social-network.samuraijs.com/api/1.0/users").then(response => {
            props.setUsers(response.data.items);
        });
        }
    

    return <div>
        {
            props.usersData.map(u => <div key={u.id}>
               <span>
                <div>
                    <img src={"u.photos.small != null ? u.photos.small : userPhoto "} className={styles.userPhoto} />
                </div>
                <div>
                    {u.followed 
                    ? <button onClick ={ () => {props.unfollow(u.id)}}>Unfollow</button> 
                    : <button onClick ={ () => {props.follow(u.id)}}>Follow</button>}
                </div>
               </span>
               <span>
                <span>
                    <div>{u.name}</div>
                    <div>{u.status}</div>
                </span>
                <span>
                     <div>{"u.location.country"}</div>
                    <div>{"u.location.city"}</div>
                </span>
               </span>
            </div>)
        }
    </div>
}

export default Users;