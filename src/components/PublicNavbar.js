import React from "react";
import { Navbar, Nav } from "react-bootstrap";
import ShopTeeLogo from "../images/ShopTeeLogo.png";
import { NavLink } from "react-router-dom";
import {HiOutlineShoppingCart} from "react-icons//hi"
import { useSelector } from "react-redux";

const PublicNavbar = () => {

  const isLoggedIn = useSelector((state) => state.userReducer.login);
  const handleClick =() => {
    if (isLoggedIn === false) {
      alert("Please log in to use this function!")
    }
  }
 
  return (
    <Navbar style={{backgroundColor:"#E74E35", fontSize:"large"}} expand="lg">
      <Navbar.Brand>
        <img src={ShopTeeLogo} alt="ShopTee" width="75px" />
      </Navbar.Brand>
      
      <div style={{width:"100%", display:"flex", justifyContent:"space-between", paddingRight:"2%"}}>
      <Nav className="mr-auto" >
        <Nav.Link as={NavLink} to="/" style={{color:"white"}}>
          Home
        </Nav.Link>
        {/* <Nav.Link as={NavLink} to="/" style={{color:"white"}}>
          Wishlist
        </Nav.Link> */}
      </Nav>

      <Nav >
        <Nav.Link as={NavLink} to={isLoggedIn ? "/cart" : "/auth/login"} onClick={handleClick} style={{color:"white"}}>
          Your cart <HiOutlineShoppingCart />
        </Nav.Link>
        <Nav.Link as={NavLink} to="/auth/login" style={{color:"white"}}>
          <b>Log in</b>
        </Nav.Link>
        <Nav.Link as={NavLink} to="/auth/register" style={{color:"white"}}>
          Sign up
        </Nav.Link>
      </Nav>
      </div>
   
    </Navbar>
  );
};

export default PublicNavbar;
