import React, { useEffect, useState } from "react";
import { Form, Button, Container } from "react-bootstrap";
import { useDispatch } from "react-redux";
import { toast } from "react-toastify";
import { userActions } from "../redux/actions/user.actions";

const SignUpPage = () => {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [userData, setUserData] = useState({});
    console.log("password", typeof password)

    const dispatch = useDispatch()
    console.log("user data", userData)

    const handleNameChange=(e) => {
        console.log(e.target.value)
        setName(e.target.value)
    }

    const handleEmailChange=(e) => {
        setEmail(e.target.value)
    }

    const handlePasswordChange=(e) => {
        setPassword(e.target.value)
    }

    const handleSubmit=(e) => {
        e.preventDefault();
        if (!name || !email || !password) {
            toast.error('Please input your name, email and password!')
        } else {
        setUserData({"name": name, "email": email, "password": password});
        }
    }

    useEffect(() => {
        if (userData){
          dispatch(userActions.postNewUser(userData))
        }
    },[dispatch, userData])
    

    return (
        <Container style={{width:"40%", padding:"3%", marginBottom:"5%", border:"1px solid gray", borderRadius:"5px"}}>
        <Form onSubmit={handleSubmit}>
  <Form.Group className="mb-3" controlId="formBasicName" onChange={handleNameChange}>
    <Form.Label>Name</Form.Label>
    <Form.Control type="text" placeholder="Tan" />
  </Form.Group>

  <Form.Group className="mb-3" controlId="formBasicEmail" onChange={handleEmailChange}>
    <Form.Label>Email address</Form.Label>
    <Form.Control type="email" placeholder="tan@coderschool.vn" />
    <Form.Text className="text-muted">
      We'll never share your email with anyone else.
    </Form.Text>
  </Form.Group>

  <Form.Group className="mb-3" controlId="formBasicPassword" onChange={handlePasswordChange}>
    <Form.Label>Password</Form.Label>
    <Form.Control type="password" placeholder="******" />
  </Form.Group>
  
  <Button variant="primary" type="submit">
    Submit
  </Button>
  <Form.Text className="text-muted"> <p></p>
      Already have account? <a href="/auth/login">Log in</a>
    </Form.Text>
</Form>
</Container>
    )
}

export default SignUpPage