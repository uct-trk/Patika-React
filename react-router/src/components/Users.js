import React, { useEffect, useState } from 'react'
import { Switch,Route, useRouteMatch, NavLink } from 'react-router-dom'
import axios from 'axios'
import User from './User'
const Users = () => {

    const [users, setUsers] = useState([])
    const [loading, isLoading] = useState(true)

    const {path, url} = useRouteMatch()
    console.log(path,url)

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
                    <NavLink activeStyle={{backgroundColor: 'black'}} to={`${url}/${user.id}`}>{user.name}</NavLink>
                    </li>
                ))}
            </ul>

            <Switch>
                <Route exact path={path}>
                    <h3>Please Select a Topic</h3>
                </Route>
                <Route path={`${path}/:id`}>
                    <User/>
                </Route>
            </Switch>
        </div>
    )
}

export default Users
