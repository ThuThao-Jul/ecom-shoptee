import React from "react";
import { Navbar, Nav, Dropdown, Image, ButtonGroup } from "react-bootstrap";
import ShopTeeLogo from "../images/ShopTeeLogo.png";
import { NavLink } from "react-router-dom";
import {HiOutlineShoppingCart} from "react-icons//hi"
import { useDispatch, useSelector } from "react-redux";
import { userActions } from "../redux/actions/user.actions";

const PublicNavbar = () => {
  const dispatch = useDispatch();

  const isLoggedIn = useSelector((state) => state.userReducer.login);
  const userData = useSelector((state) => state.userReducer.data)
  const handleClick =() => {
    if (isLoggedIn === false) {
      alert("Please log in to use this function!")
    }
  }

  const handleLogOut = () => {
    dispatch(userActions.postLogOut())
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
      </Nav>

      <Nav>
        {/* <Nav.Link as={NavLink} to={isLoggedIn ? "/cart" : "/auth/login"} onClick={handleClick} style={{color:"white"}}>
          Your cart <HiOutlineShoppingCart />
        </Nav.Link> */}
        
        {isLoggedIn ? (
           <Nav.Link style={{display:"flex", justifyContent:"flex-end"}}>

          <Nav.Link as={NavLink} to={isLoggedIn ? "/cart" : "/auth/login"} onClick={handleClick} style={{color:"white"}}>
          Your cart <HiOutlineShoppingCart />
          </Nav.Link>

           <Dropdown as={ButtonGroup} style={{width:"15%"}}>
           <Image src={userData.avatarUrl} rounded style={{width:"60%"}} />
       <Dropdown.Toggle split variant="secondary" id="dropdown-split-basic" />
       <Dropdown.Menu>
         <Dropdown.Item eventKey="1">Profile</Dropdown.Item>
         <Dropdown.Item eventKey="2">Product</Dropdown.Item>
         <Dropdown.Item eventKey="3">
           Setting
         </Dropdown.Item>
         <Dropdown.Divider />
         <Dropdown.Item eventKey="4" onClick={handleLogOut}>Log out</Dropdown.Item>
       </Dropdown.Menu>
     </Dropdown>
     </Nav.Link>
        ) : (
          <div style={{display:"flex"}}>
            <Nav.Link as={NavLink} to={isLoggedIn ? "/cart" : "/auth/login"} onClick={handleClick} style={{color:"white"}}>
          Your cart <HiOutlineShoppingCart />
        </Nav.Link>
        <Nav.Link as={NavLink} to="/auth/login" style={{color:"white"}}>
          <b>Log in</b>
        </Nav.Link>
        <Nav.Link as={NavLink} to="/auth/register" style={{color:"white"}}>
          Sign up
        </Nav.Link>
        </div>
        )}
        

       
      </Nav>

      </div>
   
    </Navbar>
  );
};

export default PublicNavbar;
