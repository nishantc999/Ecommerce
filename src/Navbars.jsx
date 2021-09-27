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
  <Navbar.Brand><Link class="nav-link" to="/">Ecommerce</Link></Navbar.Brand>
  <Navbar.Toggle aria-controls="responsive-navbar-nav" />
  <Navbar.Collapse id="responsive-navbar-nav">
    <Nav className="me-auto">
      <Link class="nav-link" to="/">Home</Link>
      
    </Nav>
    <Nav>{tokens? <Link class="nav-link" to={"/"} onClick={logout}>Logout</Link>:<>
      <Link class="nav-link" to="/cart">Sign up</Link>
      <Link eventKey={2} class="nav-link" to="/signin">
       Sign in
      </Link>
      </>}
      <Link class="nav-link" to="/cart">Cart {state.length}</Link>
    </Nav>
  </Navbar.Collapse>
  </Container>
</Navbar>
    </>
//         <div>
//            <nav class="navbar navbar-expand-lg navbar-light bg-light">
//   <Link class="navbar-brand" to="/">Ecommerce</Link>
//   <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
//     <span class="navbar-toggler-icon"></span>
//   </button>

//   <div class="collapse navbar-collapse" id="navbarSupportedContent">
//     <ul class="navbar-nav mr-auto">
//       <li class="nav-item active">
//         <a class="nav-link" href="#">Home <span class="sr-only">(current)</span></a>
//       </li>
//       <li class="nav-item">
//         <Link class="nav-link" to="/cart">Cart {state.length}</Link>
//       </li>
//       {/* <li class="nav-item dropdown">
//         <a class="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
//           Dropdown
//         </a>
//         <div class="dropdown-menu" aria-labelledby="navbarDropdown">
//           <a class="dropdown-item" href="#">Action</a>
//           <a class="dropdown-item" href="#">Another action</a>
//           <div class="dropdown-divider"></div>
//           <a class="dropdown-item" href="#">Something else here</a>
//         </div>
//       </li> */}
//       {/* <li class="nav-item">
//         <a class="nav-link disabled" href="#">Disabled</a>
//       </li> */}
//     </ul>
//     <form class="form-inline my-2 my-lg-0">
//       <input class="form-control mr-sm-2" type="search" placeholder="Search" aria-label="Search"/>
      
//     </form>
//   </div>
// </nav> 
//         </div>
    )
}

export default Navbars
