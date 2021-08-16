import React, { useEffect, useState } from "react";
import { Form, Button, Container } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { useHistory } from "react-router-dom";
import { userActions } from "../redux/actions/user.actions";

const LogInPage = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const dataLogIn = {
      "email": email,
      "password": password,
    };
    const dispatch = useDispatch();
    const history = useHistory();
    const login = useSelector((state) => state.userReducer.login);
    console.log("login", login)
    const handleEmailChange=(e) => {
        setEmail(e.target.value)
    }

    const handlePasswordChange=(e) => {
        setPassword(e.target.value)
    }

    const handleSubmit=(e) => {
        e.preventDefault();
        console.log(dataLogIn)
        dispatch(userActions.postLogIn(dataLogIn));
    }
    
    useEffect(() => {
        if (login) {
        history.push("/")
        }
    },[dispatch, login])

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