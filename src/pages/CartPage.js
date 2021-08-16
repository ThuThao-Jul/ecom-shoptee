import React from "react";
import { Card, Button, Container } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { userActions } from "../redux/actions/user.actions";
import { useHistory } from "react-router-dom";

const CartPage = () => {
    const dispatch = useDispatch();
    const productsInCart = useSelector((state) => state.userReducer.data.cart)
    console.log("products in cart", productsInCart);
    const history = useHistory();
    
    
    const handleDelete = () => {
       dispatch(userActions.deleteCart())
    }

    const handleOrder = (e) => {
      e.preventDefault();
      dispatch(userActions.postOrders());
      history.push("/orders");
    }

    return (
        <Container style={{width:"40%"}}>

           <Button variant="primary" onClick={handleOrder}>Order now</Button>
           <Button variant="danger" onClick={handleDelete}>Delete all</Button>

            {productsInCart.map((p) => (
              <Card style={{ width:'100%', marginBottom:"5%" }}>
              <Card.Img variant="top" src={p.productId.imageUrls[0]} />
              <Card.Body>
               <Card.Title>{p.productId.name}</Card.Title>
               <Card.Text >Quantity: <strong>{p.quantity}</strong> </Card.Text>
               <Card.Text>
               Description: {p.productId.description}
               </Card.Text>
             </Card.Body> 
           </Card> 
            ))}

</Container>
    )
}

export default CartPage