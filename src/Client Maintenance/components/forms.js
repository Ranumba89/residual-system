import { Button, Form } from 'react-bootstrap';
import { useState, useEffect } from "react";
import { Read, Write } from "../data"
const Forms = () => {

 
  const initalValues = { Id: "", discription: "", guild: "" } //{ Client: "", c_Name: "", phone: "", email: "", c_num:"" }
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
  //   if (id === "Client") { 
  //     values.Client = val;
  //   } else if (id === "c_Name") {
  //     values.c_Name = val;
  //   } else if (id === "phone") {
  //     values.phone = val;
  //   } else if (id === "email") {
  //     values.email = val;
  //   }else if (id === "c_num") {
  //   values.c_num = val;
  // }
  
    values[id] = val; //If target id equals the form controlId then set the value typed into the useState values 
    setFormValues(values)
  }

  const submit = (e) => {
    // e.preventDefault();
    // console.log(formValues);
    // Write(formValues)
    // setFormValues(initalValues)
    // console.log(Read());

    const postOptions = {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({formValues })
    };
   
      
    fetch('http://localhost:3000/guild',postOptions ).then((value)=>{
      console.log("post added");
    })
      
   

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

      <Form.Group className="mb-3" controlId="Id">
        <Form.Label>Id</Form.Label>
          {/* use to be Client Name  */}
        <Form.Control type="text" placeholder="number" value={formValues.Id} onChange={clientName} />
        <Form.Text className="text-muted">

        </Form.Text>
      </Form.Group>

      <Form.Group className="mb-3" controlId="guild">
          {/* use to be cName  */}
        <Form.Label>Guild</Form.Label>
        <Form.Control type="text" placeholder="name" value={formValues.guild} onChange={clientName} />
        <Form.Text className="text-muted">

        </Form.Text>
      </Form.Group>

      <Form.Group className="mb-3" controlId="discription"> 
      {/* use to be phonenumber  */}
        <Form.Label>Discription</Form.Label>
        <Form.Control type="text" placeholder="name" value={formValues.discription} onChange={clientName} />
        <Form.Text className="text-muted">

        </Form.Text>
      </Form.Group>

      {/* <Form.Group className="mb-3" controlId="email">
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
      </Form.Group> */}

      <Button variant="success" type="submit" onClick={submit} >
        Create
  </Button>
    </Form>)
}
export default Forms;