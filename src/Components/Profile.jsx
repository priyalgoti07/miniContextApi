import React, { useContext } from 'react'
import UserContext from '../Context/UserContext'

const Profile = () => {
    const { user } = useContext(UserContext)
    console.log("user", user);
    if (!user) return <div>Please login</div>

    return <div>Welcom {user.userName}</div>

}

export default Profile