import React, { useEffect, useState } from "react";
import { Form, Button, Container } from "react-bootstrap";
import { useDispatch } from "react-redux";
import { userActions } from "../redux/actions/user.actions";

const LogInPage = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [dataLogIn, setDataLogIn] = useState('');
    const dispatch = useDispatch();

    const handleEmailChange=(e) => {
        setEmail(e.target.value)
    }

    const handlePasswordChange=(e) => {
        setPassword(e.target.value)
    }

    const handleSubmit=(e) => {
        e.preventDefault();
        setDataLogIn({"email": email, "password": password});
        console.log(dataLogIn)
        dispatch(userActions.postLogIn(dataLogIn))
    }
    
    useEffect(() => {
        console.log(dataLogIn)
        if (dataLogIn){
           dispatch(userActions.postLogIn(dataLogIn))
        }
    },[dispatch, dataLogIn])

    return (
    <Container style={{width:"40%", padding:"3%", marginBottom:"5%", border:"1px solid gray", borderRadius:"5px"}}>
        <Form onSubmit={handleSubmit}>

  <Form.Group className="mb-3" controlId="formBasicEmail" onChange={handleEmailChange}>
    <Form.Label>Email address</Form.Label>
    <Form.Control type="email" placeholder="tan@coderschool.vn" />
  </Form.Group>

  <Form.Group className="mb-3" controlId="formBasicPassword" onChange={handlePasswordChange}>
    <Form.Label>Password</Form.Label>
    <Form.Control type="password" placeholder="******" />
  </Form.Group>
  
  <Button variant="primary" type="submit">
    Submit
  </Button> <p></p>
  <Form.Text className="text-muted">
      Don't have account? <a href="/auth/register">Sign up</a>
    </Form.Text>
</Form>
</Container>
    )
}

export default LogInPage