import React,{useContext,useState, useEffect} from 'react'
import {Context, tokenState} from "./StateProvider";
import {Link} from "react-router-dom"
import {Navbar,Nav,NavDropdown,Container} from "react-bootstrap"
import {token} from "./SignIn"

const Navbars = () => {
    const [state, action] = useContext(Context);
    const {tokens,settokens}=useContext(tokenState)
    console.log(state)
    const logout=()=>{
      localStorage.removeItem("tokens")
      settokens(false)
      
    }
    const token=localStorage.getItem("tokens")
    useEffect(()=>{
      if(token){
        settokens(true)
      }
    },[])
    return (<>
    <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
  <Container>
  <Navbar.Brand><Link class="nav-link" to="/Ecommerce/">Ecommerce</Link></Navbar.Brand>
  <Navbar.Toggle aria-controls="responsive-navbar-nav" />
  <Navbar.Collapse id="responsive-navbar-nav">
    <Nav className="me-auto">
      <Link class="nav-link" to="/Ecommerce/">Home</Link>
      
    </Nav>
    <Nav>{tokens? <Link class="nav-link" to={"/Ecommerce/"} onClick={logout}>Logout</Link>:<>
      <Link class="nav-link" to="/Ecommerce/">Sign up</Link>
      <Link eventKey={2} class="nav-link" to="/Ecommerce/signin">
       Sign in
      </Link>
      </>}
      <Link class="nav-link" to="/Ecommerce/cart">Cart {state.length}</Link>
    </Nav>
  </Navbar.Collapse>
  </Container>
</Navbar>
    </>

    )
}

export default Navbars
