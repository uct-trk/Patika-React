import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import axios from 'axios'
const Users = () => {

    const [users, setUsers] = useState([])
    const [loading, isLoading] = useState(true)

    useEffect(() => {
        axios.get('https://jsonplaceholder.typicode.com/users')
        .then((res => {setUsers(res.data)}))
        .catch((err) => console(err))
        .finally(() => isLoading(false))
    },[])
    console.log(users)
    return (
        <div>
            {loading && <div>Loading...</div>}
            <h1>Users</h1>
            <ul>
                {users.map(user => (
                    <li key={user.id}>
                    <Link to={`/user/${user.id}`}>{user.name}</Link>
                    </li>
                ))}
            </ul>
        </div>
    )
}

export default Users
