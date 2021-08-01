import React, { useEffect } from "react";
import { Card, Button, Container } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { useHistory } from "react-router-dom";
import { userActions } from "../redux/actions/user.actions";

const CartPage = () => {
    const history = useHistory();
    const dispatch = useDispatch()
    const productsInCart = useSelector((state) => state.userReducer.data.cart)
    console.log("products in cart", productsInCart)
    
    // useEffect(() => {
    //     dispatch(userActions.getProfile())
    // },[dispatch])
    
    const handleDelete = () => {
       dispatch(userActions.deleteCart())
    }

    const handleBuy = (id) => {
       history.push(`/payment/${id}`)
    }

    return (
        <Container style={{width:"40%"}}>

           <Button variant="danger" onClick={handleDelete}>Delete all</Button>
            {productsInCart.map((p) => (
              <Card style={{ width:'100%', marginBottom:"5%" }}>
              <Card.Img variant="top" src={p.productId.imageUrls[0]} />
              <Card.Body>
               <Card.Title>{p.productId.name}</Card.Title>
               <Card.Text>
                 Quantity: {p.quantity} item(s)
               </Card.Text>
               <Button variant="primary" onClick={() => handleBuy(p.productId._id)}>Buy now</Button>
             </Card.Body> 
           </Card> 
            ))}

</Container>
    )
}

export default CartPage