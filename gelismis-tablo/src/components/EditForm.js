import React, { useContext, useState } from 'react'
import { Button, Form } from 'react-bootstrap'
import { EmployeeContext } from '../Context/EmployeeContext'

const EditForm = ({ theEmployee }) => {

    const { updateEmployee } = useContext(EmployeeContext)
    const employee = theEmployee

    const id = employee.id
    console.log(employee, id)

    const [name, setName] = useState(employee.name)
    const [email, setEmail] = useState(employee.email)
    const [address, setAddress] = useState(employee.address)
    const [phone, setPhone] = useState(employee.phone)

    const updatedEmployee = { id, name, email, address, phone }

    const handleName = (e) => {
        setName(e.target.value)
    }
    const handleEmail = (e) => {
        setEmail(e.target.value)
    }
    const handleAdress = (e) => {
        setAddress(e.target.value)
    }
    const handlePhone = (e) => {
        setPhone(e.target.value)
    }


    const handleSubmit = (e) => {
        e.preventDefault()
        updateEmployee(id, updatedEmployee)
    }

    return (
        <Form onSubmit={handleSubmit}>
            <Form.Group className="mb-3">
                <Form.Control onChange={handleName} value={name} type="text" placeholder="Name*" required />
            </Form.Group>
            <Form.Group className="mb-3">
                <Form.Control onChange={handleEmail} value={email} type="email" placeholder="Email*" required />
            </Form.Group>
            <Form.Group className="mb-3">
                <Form.Control onChange={handleAdress} value={address} as="textarea" placeholder="Address" row={3} />
            </Form.Group>
            <Form.Group className="mb-3">
                <Form.Control onChange={handlePhone} value={phone} type="textarea" placeholder="Phone" />
            </Form.Group>

            <Button variant="success" type="submit">
                Edit Employee
            </Button>
        </Form>
    )
}

export default EditForm
