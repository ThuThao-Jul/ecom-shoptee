import React, { useEffect } from "react";
import { Card, ListGroup, Nav } from "react-bootstrap";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import { productActions } from "../redux/actions/products.actions";
import SearchForm from "./SearchForm";


const Catogories = () => {

    const dispatch = useDispatch();
    const categories = useSelector((state) => state.productsReducer.categories)
    console.log("cate", categories)

    useEffect(() => {
        dispatch(productActions.getCategories())
    }, [dispatch])

    return (
    <div style={{display:"flex", gap:"18%", alignItems:"center"}}>
        <Card style={{ width: '15%' }}>
  <Card.Header>Categories</Card.Header>
  <ListGroup variant="flush">
      {categories && categories.map((c) => (
        <Nav.Link as={Link} to={`/category/${c._id}`} >{c.name}</Nav.Link>
      ))}
    
  </ListGroup>
</Card>

<SearchForm />
</div>
    )
}

export default Catogories