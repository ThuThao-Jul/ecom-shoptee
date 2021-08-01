import React, { useEffect, useState } from "react";
import { Card, Col, Container, Row } from "react-bootstrap";
import { ClipLoader } from "react-spinners";

import PaginationBar from "../components/PaginationBar";

import { useDispatch, useSelector } from "react-redux";
import { useHistory } from "react-router-dom";
import {productActions} from "../redux/actions/products.actions";

const allProducts = (state) => state.productsReducer.data;
const status = (state) => state.productsReducer.loading

const HomePage = () => {
  const [page, setPage] = useState(1);
  const totalPage = 10;
  const limit = 12;
  let search = null;


  const history = useHistory();
  const dispatch = useDispatch()
  const loading = useSelector(status);
  const dataProducts = useSelector(allProducts);
  console.log("data products", dataProducts)
  console.log("loading", loading)
  
  useEffect(() => {
    dispatch(productActions.getProducts(page, limit, search));
  },[dispatch, page, limit, search])


  const handleClickProduct = (productId) => {
     console.log("product ID", productId)
    history.push(`/products/${productId}`);
  };

  return (
    <Container>
    <Row className="justify-content-center">
      <Col md={6}>
        {/* <h1 className="text-center" style={{color:"#E74E35"}}>Welcome back to ShopTee</h1> */}
        {/* <SearchForm/>
        <hr /> */}
        <PaginationBar
          page={page}
          setPage={setPage}
          totalPageNum={totalPage}
        />
      </Col>
    </Row>
    <Row>
      <Col>
        {loading ? (
          <div className="text-center">
            <h3>Hold on! Magic is on the way.</h3>
            <ClipLoader color="#f86c6b" size={150} loading={true} />
          </div>
        ) : (
          <ul className="list-unstyled d-flex flex-wrap justify-content-between">
            {dataProducts && dataProducts.map((product) => (
              <li key={product.id} onClick={() => handleClickProduct(product._id)}>
                <Card
                  style={{
                    width: "24rem",
                    height: "auto",
                    marginBottom: "2rem",
                  }}
                >
                  <Card.Img
                    variant="top"
                    src= {product.imageUrls[0]? (product.imageUrls[0]) : ("https://sgweb.vn/wp-content/uploads/2019/03/404-brain-not-found-1-300x260.jpg")}
                  />
                  <Card.Body>
                    <Card.Title>{product.name}</Card.Title>
                    <Card.Text>{product.price}</Card.Text>
                  </Card.Body>
                </Card>
              </li>
            ))}
          </ul>
        )}
      </Col>
    </Row>
  </Container>
    )
};

export default HomePage;
