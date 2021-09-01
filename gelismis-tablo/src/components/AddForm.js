import React from 'react'
import { Button, Form } from 'react-bootstrap'
const AddForm = () => {
    return (
        <Form>
            <Form.Group className="mb-3">
                <Form.Control type="text" placeholder="Name*" required />
            </Form.Group>
            <Form.Group className="mb-3">
                <Form.Control type="email" placeholder="Email*" required />
            </Form.Group>
            <Form.Group className="mb-3">
                <Form.Control as="textarea" placeholder="Address" row={3} />
            </Form.Group>
            <Form.Group className="mb-3">
                <Form.Control type="textarea" placeholder="Phone" />
            </Form.Group>

            <Button variant="success" type="submit">
                Add New Employee
            </Button>
        </Form>
    )
}

export default AddForm
