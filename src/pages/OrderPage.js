import React from "react";
import { Container, Tabs, Tab } from "react-bootstrap";
// import { useSelector } from "react-redux";


const OrderPage = () => {
    // const orders = useSelector((state) => state.userReducer.orders);

    return (
        <Container style={{marginTop:"3rem"}}>

        <Tabs id="uncontrolled-tab-example" className="mb-3">
  <Tab eventKey="home" title="home">
   1
  </Tab>
  <Tab eventKey="profile" title="Profile">
   2
  </Tab>
  <Tab eventKey="contact" title="Contact">
   3
  </Tab>
</Tabs>

        </Container>
    )
};

export default OrderPage;