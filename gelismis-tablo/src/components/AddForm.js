import React, { useContext, useState } from 'react'
import { Button, Form } from 'react-bootstrap'
import { EmployeeContext } from '../Context/EmployeeContext'
const AddForm = () => {

    //const [name, setName] = useState("")
    //const [email, setEmail] = useState("")
    //const [address, setAddress] = useState("")
    //const [phone, setPhone] = useState("")

    const [newEmployee, setNewEmployee] = useState({
        name: "", email: "", address: "", phone: ""
    })

    const {name, email, address, phone} = newEmployee

    const { addEmployee } = useContext(EmployeeContext)

    /* const handleName = (e) => {
        setName(e.target.value)
    }
    const handleEmail = (e) => {
        setEmail(e.target.value)
    }
    const handleAddress = (e) => {
        setAddress(e.target.value)
    }
    const handlePhone = (e) => {
        setPhone(e.target.value)
    } */

    const onInputChange = (e) => {
        setNewEmployee({...newEmployee, [e.target.name]: e.target.value})
    }

    const handleSubmit = (e) => {
        e.preventDefault()
        addEmployee(name, email, address, phone)
    }
    console.log(newEmployee)

    return (
        <Form onSubmit={handleSubmit}>
            <Form.Group className="mb-3">
                <Form.Control onChange={onInputChange} name="name" value={name} type="text" placeholder="Name*" required />
            </Form.Group>
            <Form.Group className="mb-3">
                <Form.Control onChange={onInputChange} name="email" value={email} type="email" placeholder="Email*" required />
            </Form.Group>
            <Form.Group className="mb-3">
                <Form.Control onChange={onInputChange} name="address" value={address} as="textarea" placeholder="Address" row={3} />
            </Form.Group>
            <Form.Group className="mb-3">
                <Form.Control onChange={onInputChange} name="phone" value={phone} type="textarea" placeholder="Phone" />
            </Form.Group>

            <Button variant="success" type="submit">
                Add New Employee
            </Button>
        </Form>
    )
}

export default AddForm
