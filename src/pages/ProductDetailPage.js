import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router";
import { Container, Carousel, Button } from "react-bootstrap";
import { productActions } from "../redux/actions/products.actions";
import { ClipLoader } from "react-spinners";
import { toast } from "react-toastify";
import { useHistory } from "react-router-dom";
import { userActions } from "../redux/actions/user.actions";


const ProductDetailPage = () => {
    const params = useParams();
    const productId = params.id;
    const dispatch = useDispatch();
    const history = useHistory();
    const [quantity, setQuantity] = useState(0)

    const dataDetail = useSelector((state) => state.productsReducer.selectedProduct);
    const loading = useSelector((state) => state.productsReducer.loading)
    const isLoggedIn = useSelector((state) => state.userReducer.login)
    console.log("log in status", isLoggedIn)
    
    useEffect(() => {
       dispatch(productActions.getDetailProduct(productId))
    }, [ dispatch, productId])

    const handleDes = (e) => {
        e.preventDefault();
        setQuantity(quantity-1);
        if (quantity <= 1) {
            setQuantity(0)
        }
    }

    const handleAdd = (e) => {
        e.preventDefault();
        setQuantity(quantity+1)
        if (quantity >= dataDetail.stock) {
            toast.error('Your quantity has reached our stock!');
            setQuantity(dataDetail.stock);
        }
    }
    const HandleAddToCart = (e) => {
        e.preventDefault();

        if (isLoggedIn) {
            
        console.log("quantity", quantity);
        dispatch(userActions.postToCart({"productId": productId, "quantity": quantity}));
        }
        else {
            toast.error('Please log in to use this function!');
            history.push("/auth/login")
        }
    }



    return (
    <Container style={{width:"60%"}}>
        {loading ? (
             <div className="text-center">
             <h3>Hold on! Magic is on the way.</h3>
             <ClipLoader color="#f86c6b" size={150} loading={true} />
           </div>
        ) : (
            <Carousel variant="dark">
            {dataDetail.imageUrls && dataDetail.imageUrls.map((i) => (
                <Carousel.Item>
                <img
                  className="d-block w-100"
                  src={i}
                  alt="product detail"
                />
                </Carousel.Item>
            ))}
        </Carousel>
        )}
        
        

        <h3>{dataDetail.name}</h3>
        <h4>Price: {dataDetail.price}</h4>
        <p>Quantity: 
             <Button variant="outline-info" onClick={handleDes}>-</Button> {' '}
             {quantity} {' '}
             <Button variant="outline-info" onClick={handleAdd}>+</Button>
        </p>
        <Button variant="success" size="lg" onClick={HandleAddToCart}>Add to cart</Button>
        <p>Only {dataDetail.stock} product(s) left</p>
        <h5>Description:</h5>
        <p>{dataDetail.description}</p>

        
    </Container>
    )
}

export default ProductDetailPage