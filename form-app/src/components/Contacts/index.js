import React, { useEffect, useState } from 'react'
import Form from './Form'
import List from './List'

const Contacts = () => {
    const [contacts, setContacts] = useState([
        {
            fullname: "Uğurcan",
            phone_number: "123123"
        },
        {
            fullname: "Ahmet",
            phone_number: "456546"
        },
        {
            fullname: "Ayşe",
            phone_number: "7878979"
        },
    ])

    useEffect(() => {
        console.log(contacts)
    }, [contacts])
    return (
        <div>
            <Form setContacts={setContacts} contacts={contacts}/>
            <List contacts={contacts}/>
        </div>
    )
}

export default Contacts
