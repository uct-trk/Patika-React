import React, { useEffect, useState } from 'react'
import Form from './Form'
import List from './List'

const Contacts = () => {
    const [contacts, setContacts] = useState([])

    useEffect(() => {
        console.log(contacts)
    }, [contacts])
    return (
        <div>
            <List/>
            <Form setContacts={setContacts} contacts={contacts}/>
        </div>
    )
}

export default Contacts
