import React from "react";
import { Container, Form, Row, Col, Button } from "react-bootstrap";
import { useDispatch} from "react-redux";
import { useParams } from "react-router-dom";
import { userActions } from "../redux/actions/user.actions";

const PaymentPage = () => {
    const params = useParams();
    const id = params.id;
    // const userId = useSelector((state) => state.userReducer.data._id)
    const dispatch = useDispatch()
    console.log("order id", id)

    const handlePayment = (e) => {
        e.preventDefault();

        dispatch(userActions.putPayment(id))
    }

    return (
        <Container style={{width:"50%", borderRadius:"10px", border:"1px solid gray", padding:"3%"}}>
            <Form onSubmit={handlePayment}>
     Please check your order.
  <Form.Group className="mb-3" controlId="formGridAddress1">
    <Form.Label>Address</Form.Label>
    <Form.Control placeholder="1234 Main St" />
  </Form.Group>

  <Form.Group className="mb-3" controlId="formGridAddress2">
    <Form.Label>Address 2</Form.Label>
    <Form.Control placeholder="Apartment, studio, or floor" />
  </Form.Group>

  <Row className="mb-3">
    <Form.Group as={Col} controlId="formGridCity">
      <Form.Label>City</Form.Label>
      <Form.Control />
    </Form.Group>

    <Form.Group as={Col} controlId="formGridState">
      <Form.Label>State</Form.Label>
      <Form.Select defaultValue="Choose...">
        <option>Choose...</option>
        <option>...</option>
      </Form.Select>
    </Form.Group>

    <Form.Group as={Col} controlId="formGridZip">
      <Form.Label>Zip</Form.Label>
      <Form.Control />
    </Form.Group>
  </Row>

  <Form.Label>Total</Form.Label>

  <Form.Group className="mb-3" id="formGridCheckbox">
    <Form.Check type="checkbox" label="Check me out" />
  </Form.Group>

  <Button variant="primary" type="submit">
    Order now
  </Button>
</Form>
        </Container>
    )
}

export default PaymentPage