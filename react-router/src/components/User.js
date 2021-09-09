import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router'
import axios from 'axios'
import { Link } from 'react-router-dom'

const User = () => {
    const [user, setUser] = useState({})
    const [loading, setLoading] = useState(true)
    const {id} = useParams()

    useEffect(() => {
        axios.get(`https://jsonplaceholder.typicode.com/users/${id}`)
        .then(res => setUser(res.data))
        .finally(() => setLoading(false))
    },[id])

    return (
        <div>
            {loading && <div>Loading...</div>}
            <code>
                {JSON.stringify(user)}
            </code>
            <h1>{user.name}</h1>
            <h3>{user.email}</h3>
            <div>{user.website}</div>

            <Link to={`/user/${parseInt(id) + 1}`}>Next User {+id + 1}</Link>
        </div>
    )
}

export default User
