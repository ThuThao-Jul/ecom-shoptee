import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useHistory, useParams } from "react-router-dom";
import { Card, Container, Row, Col } from "react-bootstrap";
import { productActions } from "../redux/actions/products.actions";
import PaginationBar from "../components/PaginationBar";
import { ClipLoader } from "react-spinners";
import Rating from "react-rating";
import { AiOutlineStar, AiFillStar } from "react-icons/ai"

const DetailCategoryPage = () => {
    const params = useParams();
    const id = params.id;
    const data = useSelector((state) => state.productsReducer.productsByCategory)
    const totalPages = useSelector((state) => state.productsReducer.totalPage);
    const loading = useSelector((state) => state.productsReducer.loading)
    const history = useHistory();

    console.log(data)

    const [page, setPage] = useState(1);

    const dispatch = useDispatch();

    useEffect(() => {
       dispatch(productActions.getProductsByCategory(id))
    }, [dispatch, id])

    const handleClickProduct = (productId) => {
        console.log("product ID", productId)
       history.push(`/products/${productId}`);
     };

    return (
        <Container>
          <Row className="justify-content-center">
          <Col md={6}>
            <PaginationBar
            page={page}
            setPage={setPage}
            totalPageNum={totalPages}
            />
          </Col>
          </Row>

        <Row>
            {loading ? (
                <div className="text-center">
                <h3>Hold on! Magic is on the way.</h3>
                <ClipLoader color="#f86c6b" size={150} loading={true} />
              </div>
            ) : (
                data && data.map((p) => 
                    <Col className="mb-3" onClick={() => handleClickProduct(p._id)}>
                      <Card style={{ width: '18rem' }}>
                      <Card.Img variant="top" src={p.imageUrls[0]} />
                      <Card.Body>
                        <Card.Title>{p.name}</Card.Title>
                        <Card.Text>
                          <p>Price: {p.price}</p>
                          <p>Rating: <Rating readonly initialRating={p.avgRating} emptySymbol={<AiOutlineStar />} fullSymbol={<AiFillStar />} /></p>
                        </Card.Text>
                        {/* <Button variant="primary">Go somewhere</Button> */}
                      </Card.Body>
                    </Card>
                    </Col>
                     )
            )}
           
            
        </Row>
        </Container>
    )
}

export default DetailCategoryPage