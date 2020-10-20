import React from "react";
import { Form, Button } from 'react-bootstrap'

export default function ContactView() {
  return (
    <div className="col-6 mr-auto">
      <Form>
      <Form.Group controlId="formBasicEmail">
        <Form.Label>Email address</Form.Label>
        <Form.Control type="email" placeholder="Escriba su usuario" />
        <Form.Text className="text-muted">
          We'll never share your email with anyone else.
        </Form.Text>
      </Form.Group>

      <Form.Group controlId="formBasicPassword">
        <Form.Label>Password</Form.Label>
        <Form.Control type="text" placeholder="Ingrese su problema o dificultad" />
      </Form.Group>
      <Button variant="primary" type="submit">
        Submit
      </Button>
    </Form>
    </div>
    
  );
}
