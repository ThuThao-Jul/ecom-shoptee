import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useHistory, useParams } from "react-router-dom";
import { productActions } from "../redux/actions/products.actions";
import { Container, Col, Card, Row } from "react-bootstrap";
import PaginationBar from "../components/PaginationBar";
import { AiOutlineStar, AiFillStar } from "react-icons/ai";
import Rating from "react-rating";
import { ClipLoader } from "react-spinners";



const SearchPage = () => {
    const params = useParams();
    const search = params.search;
    const dispatch = useDispatch();
    const history = useHistory();
    console.log("search", search)

    const [page, setPage] = useState(1)
    const limit = 10

    const dataSearch = useSelector((state) => state.productsReducer.data);
    const totalPage = useSelector((state) => state.productsReducer.totalPage);
    const loading = useSelector((state) => state.productsReducer.loading)

    useEffect(() => {
       dispatch(productActions.getProducts(page,limit, search))
    }, [dispatch,search, page, limit])

    const handleClickProduct = (id) => {
    history.push(`/products/${id}`)
    }

    return (
        <Container>
          <Row className="justify-content-center">
          <Col md={6}>
            <PaginationBar
            page={page}
            setPage={setPage}
            totalPageNum={totalPage}
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
            dataSearch.map((p) => 
              <Col className="mb-3" onClick={() => handleClickProduct(p._id)}>
                <Card style={{ width: '18rem' }}>
                <Card.Img variant="top" src={p.imageUrls[0]} />
                <Card.Body>
                  <Card.Title>{p.name}</Card.Title>
                  <Card.Text>
                    Price: {p.price}
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

export default SearchPage