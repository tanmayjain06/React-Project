import React, {useContext} from 'react'
import UserContext from '../Context/UserContext'

function Profile() {
    const {user} = useContext(UserContext)
    if (!user) return <div>pleaseLogin</div>
    return <div>WELCOME {user.username}</div>
}

export default Profile