import React from "react";
import styles from "./User.module.css"

let Users = (props) => {
    // if (props.usersData.length === 0) {
    //     props.setUsers( [
    //         { id: 1, photoUrl: 'https://vsegda-pomnim.com/uploads/posts/2022-04/1650244828_59-vsegda-pomnim-com-p-astra-r-foto-63.jpg', followed: false, fullName: 'Alexander', status: 'Opel Astra GTC', location: {city: 'Krasnodar', country: 'Russia'} },
    //         { id: 2, photoUrl: 'https://mobimg.b-cdn.net/v3/fetch/08/08166611dd3c60def4a4e6015f8d5397.jpeg', followed: true, fullName: 'John', status: 'Honda Civic 4D', location: {city: 'Krasnodar', country: 'Russia'} },
    //         { id: 3, photoUrl: 'https://i.ytimg.com/vi/YrVbqDO46OI/maxresdefault.jpg', followed: false, fullName: 'Michael', status: 'Honda Civic Si', location: {city: 'Krasnodar', country: 'Russia'} }
    //         ]
    //     )
    // }

    return <div>
        {
            props.usersData.map(u => <div key={u.id}>
               <span>
                <div>
                    <img src={u.photoUrl} className={styles.userPhoto} />
                </div>
                <div>
                    {u.followed 
                    ? <button onClick ={ () => {props.unfollow(u.id)}}>Unfollow</button> 
                    : <button onClick ={ () => {props.follow(u.id)}}>Follow</button>}
                </div>
               </span>
               <span>
                <span>
                    <div>{u.fullName}</div>
                    <div>{u.status}</div>
                </span>
                <span>
                     <div>{u.location.country}</div>
                    <div>{u.location.city}</div>
                </span>
               </span>
            </div>)
        }
    </div>
}

export default Users;