import { Button, Form } from 'react-bootstrap';
import { useState } from "react";
import { Read, Write } from "../data"
const Forms = () => {

 
  const initalValues = { Client: "", c_Name: "", phone: "", email: "", c_num:"" }
  const [formValues, setFormValues] = useState(initalValues)


  const num = 1000
  const clientNum = () => {
     setFormValues(num += 3)
  }

  

  const clientName = (e) => {
    console.log(e.target.value);
    console.log(e.target.id);
    const id = e.target.id;
    const val = e.target.value;
    const values = { ...formValues };
    if (id === "Client") {
      values.Client = val;
    } else if (id === "c_Name") {
      values.c_Name = val;
    } else if (id === "phone") {
      values.phone = val;
    } else if (id === "email") {
      values.email = val;
    }else if (id === "c_num") {
    values.c_num = val;
  }
    //values[id] = val;
    setFormValues(values)
  }

  const submit = (e) => {
    e.preventDefault();
    console.log(formValues);
    Write(formValues)
    setFormValues(initalValues)
    console.log(Read());


  }

  const clientAnalyst = (e) => {
    const clientanlystInp = e.target.value
  }
  const clientPhone = (e) => {
    const clientPhoneInp = e.target.value
  }
  const clientEmail = (e) => {
    const clientEmailInp = e.target.value
  }
  return (
    <Form>

      <Form.Group className="mb-3" controlId="Client">
        <Form.Label>Client name</Form.Label>
        <Form.Control type="text" placeholder="client name" value={formValues.Client} onChange={clientName} />
        <Form.Text className="text-muted">

        </Form.Text>
      </Form.Group>

      <Form.Group className="mb-3" controlId="c_Name">
        <Form.Label>Name</Form.Label>
        <Form.Control type="text" placeholder="name" value={formValues.c_Name} onChange={clientName} />
        <Form.Text className="text-muted">

        </Form.Text>
      </Form.Group>

      <Form.Group className="mb-3" controlId="phone">
        <Form.Label>Phone Number</Form.Label>
        <Form.Control type="text" placeholder="number" value={formValues.phone} onChange={clientName} />
        <Form.Text className="text-muted">

        </Form.Text>
      </Form.Group>

      <Form.Group className="mb-3" controlId="email">
        <Form.Label>Email address</Form.Label>
        <Form.Control type="email" placeholder="Enter email" value={formValues.email} onChange={clientName} />
        <Form.Text className="text-muted">
          We'll never share your email with anyone else.
    </Form.Text>
      </Form.Group>

      <Form.Group className="mb-3" controlId="c_num">
        <Form.Label>Guild</Form.Label>
        <Form.Control type="text" placeholder="Enter Guild" value={formValues.c_num} onChange={clientName} />
        <Form.Text className="text-muted">
          We'll never share your email with anyone else.
    </Form.Text>
      </Form.Group>

      <Button variant="success" type="submit" onClick={submit} >
        Create
  </Button>
    </Form>)
}
export default Forms;