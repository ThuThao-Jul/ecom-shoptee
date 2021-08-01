import React, { useEffect } from "react";
import { Button, Col, Form, Row } from "react-bootstrap";
import { useState } from "react";
import { useHistory } from "react-router-dom";

const SearchForm = () => {
  const [searchInput, setSearchInput] = useState("");
  const [search, setSearch] = useState("");
  const history = useHistory();

  
  const handleSearchInputChange = (e) => {
    setSearchInput(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setSearch(searchInput);
  };

  useEffect(() => {
    if (search) {
      history.push(`/search/${search}`)
    }
  },[ history, search])

  return (
    // <div style={{width:"100%"}}>
    <Row className="justify-content-center">
      <Col md={12}>
      <h1 className="text-center" style={{color:"#E74E35"}}>Welcome to ShopTee</h1>
        <Form onSubmit={handleSubmit}>
          <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
  <Row>
    <Col lg={10}>
       <Form.Control 
       type="text" 
       placeholder="Search for product, category, seller..." 
       value={searchInput}
       onChange={handleSearchInputChange}
       />
    </Col>
      <Col lg={2}>
        <Button type="submit">Search</Button>
      </Col>
  </Row>
          </Form.Group>
        </Form>
        <hr />
      </Col>
    </Row>
    // </div>
  );
};

export default SearchForm;
