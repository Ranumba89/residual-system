import { Button,Form} from 'react-bootstrap';

const Forms = ()=>{
  const clientName =(e)=>{
    console.log(e.target.value);
    console.log(e.target);
   const clientNamInp = e.target.value
  }

  const clientAnalyst =(e)=>{
    const clientanlystInp = e.target.value
   }
   const clientPhone =(e)=>{
    const clientPhoneInp = e.target.value
   }
   const clientEmail =(e)=>{
    const clientEmailInp = e.target.value
   }
    return(
<Form>
  <Form.Group className="mb-3" controlId="formBasicEmail">
    <Form.Label>Client #</Form.Label>
    <Form.Control type="email" placeholder="client #"  />
    <Form.Text className="text-muted">
      
    </Form.Text>
  </Form.Group>
  <Form.Group className="mb-3" controlId="formBasicEmail">
    <Form.Label>Client name</Form.Label>
    <Form.Control type="email" placeholder="client name" onChange={clientName}/>
    <Form.Text className="text-muted">
      
    </Form.Text>
  </Form.Group>
  
  <Form.Group className="mb-3" controlId="formBasicEmail">
    <Form.Label>Name</Form.Label>
    <Form.Control type="email" placeholder="name" onChange={clientAnalyst}/>
    <Form.Text className="text-muted">
      
    </Form.Text>
  </Form.Group>

  <Form.Group className="mb-3" controlId="formBasicEmail">
    <Form.Label>Phone Number</Form.Label>
    <Form.Control type="email" placeholder="number" onChange={clientPhone}/>
    <Form.Text className="text-muted">
      
    </Form.Text>
  </Form.Group>

  <Form.Group className="mb-3" controlId="formBasicEmail">
    <Form.Label>Email address</Form.Label>
    <Form.Control type="email" placeholder="Enter email" onChange={clientEmail}/>
    <Form.Text className="text-muted">
      We'll never share your email with anyone else.
    </Form.Text>
  </Form.Group>
  <Button variant="success" type="submit">
    Create
  </Button>
</Form>)
}
export default Forms;