import React from "react";
import { Card, Button, Container } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { userActions } from "../redux/actions/user.actions";

const CartPage = () => {
    const dispatch = useDispatch();
    const productsInCart = useSelector((state) => state.userReducer.data.cart)
    console.log("in cart", productsInCart)

    // productsInCart.map((p) => 
    //     dispatch(userActions.getDetailProduct(p.productId))
    // )

    return (
        <Container style={{width:"60%"}}>

<Card style={{ width:'100%', display:"flex"}}>
   <Card.Img variant="top" src="holder.js/100px180" />
   <Card.Body>
    <Card.Title>Card Title</Card.Title>
    <Card.Text>
      Some quick example text to build on the card title and make up the bulk of
      the card's content.
    </Card.Text>
    <Button variant="primary">Buy now</Button>
  </Card.Body>
</Card>

</Container>
    )
}

export default CartPage