import React from "react";
import { Route, Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { LinkContainer } from "react-router-bootstrap";
import { Navbar, Nav, Container, NavDropdown } from "react-bootstrap";
import SearchBox from "./SearchBox";
import { logout } from "../actions/userActions";
import "../assets/css/Header.css";

const Header = () => {
  const dispatch = useDispatch();

  const userLogin = useSelector((state) => state.userLogin);
  const { userInfo } = userLogin;
  const cart = useSelector((state) => state.cart);

  const logoutHandler = () => {
    dispatch(logout());
  };

  return (
    <header>
      <Navbar Navbar className="nav_style" variant="dark" expand="lg" collapseOnSelect>
        <Container>
          <LinkContainer to="/">
            <Navbar.Brand className="logo">DERHADDI</Navbar.Brand>
          </LinkContainer>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Route render={({ history }) => <SearchBox history={history} />} />
            <Nav className="ml-auto">
              <LinkContainer to="/cart">
                <Nav.Link>
                  <i className="fas fa-shopping-cart"></i> Cart{" "}
                  <span>{cart.cartItems.length}</span>
                </Nav.Link>
              </LinkContainer>
              <LinkContainer to="/products">
                <Nav.Link>Products</Nav.Link>
              </LinkContainer>
              <LinkContainer to="/contact">
                <Nav.Link>Contact</Nav.Link>
              </LinkContainer>
              {userInfo ? (
                <NavDropdown title={userInfo.name} id="username">
                  <LinkContainer to="/profile">
                    <NavDropdown.Item>Profile</NavDropdown.Item>
                  </LinkContainer>
                  <NavDropdown.Item onClick={logoutHandler}>
                    Logout
                  </NavDropdown.Item>
                </NavDropdown>
              ) : (
                <LinkContainer to="/login">
                  <Nav.Link>
                    <i className="fas fa-user"></i> Sign In
                  </Nav.Link>
                </LinkContainer>
              )}
              {userInfo && userInfo.isAdmin && (
                <NavDropdown title="Admin Dashboard" id="adminmenu">
                  <LinkContainer to="/admin/userlist">
                    <NavDropdown.Item>Users</NavDropdown.Item>
                  </LinkContainer>
                  <LinkContainer to="/admin/productlist">
                    <NavDropdown.Item>Products</NavDropdown.Item>
                  </LinkContainer>
                  <LinkContainer to="/admin/orderlist">
                    <NavDropdown.Item>Orders</NavDropdown.Item>
                  </LinkContainer>
                </NavDropdown>
              )}
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </header>
  );
};

export default Header;


// import React from "react";
// import { Route } from "react-router-dom";
// import { useDispatch, useSelector } from "react-redux";
// import { LinkContainer } from "react-router-bootstrap";
// import { Navbar, Nav, Container, NavDropdown } from "react-bootstrap";
// import SearchBox from "./SearchBox";
// import { logout } from "../actions/userActions";
// import "../assets/css/Header.css";

// const Header = () => {
//   const dispatch = useDispatch();

//   const userLogin = useSelector((state) => state.userLogin);
//   const { userInfo } = userLogin;
//   const cart = useSelector((state) => state.cart);

//   const logoutHandler = () => {
//     dispatch(logout());
//   };

//   return (
//     <header>
//       <Navbar className="nav_style" variant="dark" expand="lg" collapseOnSelect>
//         <Container>
//           <LinkContainer to="/">
//             <Navbar.Brand className="logo">DERHADDI</Navbar.Brand>
//           </LinkContainer>
//           <Navbar.Toggle aria-controls="basic-navbar-nav" />
//           <Navbar.Collapse id="basic-navbar-nav">
//             <Route render={({ history }) => <SearchBox history={history} />} />
//             <Nav className="ml-auto">
//               <LinkContainer to="/cart">
//                 <Nav.Link>
//                   <i className="fas fa-shopping-cart"></i> Cart{" "}
//                   <span>{cart.cartItems.length}</span>
//                 </Nav.Link>
                
//               </LinkContainer>
//               {userInfo ? (
//                 <NavDropdown title={userInfo.name} id="username">
//                   <LinkContainer to="/profile">
//                     <NavDropdown.Item>Profile</NavDropdown.Item>
//                   </LinkContainer>
//                   <NavDropdown.Item onClick={logoutHandler}>
//                     Logout
//                   </NavDropdown.Item>
//                 </NavDropdown>
//               ) : (
//                 <LinkContainer to="/login">
//                   <Nav.Link>
//                     <i className="fas fa-user"></i> Sign In
//                   </Nav.Link>
//                 </LinkContainer>
//               )}
//               {userInfo && userInfo.isAdmin && (
//                 <NavDropdown title="Admin Dashboard" id="adminmenu">
//                   <LinkContainer to="/admin/userlist">
//                     <NavDropdown.Item>Users</NavDropdown.Item>
//                   </LinkContainer>
//                   <LinkContainer to="/admin/productlist">
//                     <NavDropdown.Item>Products</NavDropdown.Item>
//                   </LinkContainer>
//                   <LinkContainer to="/admin/orderlist">
//                     <NavDropdown.Item>Orders</NavDropdown.Item>
//                   </LinkContainer>
//                 </NavDropdown>
//               )}
//             </Nav>
//           </Navbar.Collapse>
//         </Container>
//       </Navbar>
//     </header>
//   );
// };

// export default Header;

// import React from "react";
// import { Route } from "react-router-dom";
// import { useDispatch, useSelector } from "react-redux";
// import { LinkContainer } from "react-router-bootstrap";
// import { Navbar, Nav, Container, NavDropdown } from "react-bootstrap";
// import SearchBox from "./SearchBox";
// import { logout } from "../actions/userActions";
// import "../assets/css/Header.css";

// const Header = () => {
//   const dispatch = useDispatch();

//   const userLogin = useSelector((state) => state.userLogin);
//   const { userInfo } = userLogin;
//   const cart =useSelector(state=>state.cart)
//   console.log(cart)
//   const logoutHandler = () => {
//     dispatch(logout());
//   };

//   return (
//     <header>
//       <Navbar className="nav_style" variant="dark" expand="lg" collapseOnSelect>
//         <Container>
//           <LinkContainer to="/">
//             <Navbar.Brand className="logo">DERHADDI</Navbar.Brand>
//           </LinkContainer>
//           <Navbar.Toggle aria-controls="basic-navbar-nav" />
//           <Navbar.Collapse id="basic-navbar-nav">
//             <Route render={({ history }) => <SearchBox history={history} />} />
//             <Nav className="ml-auto">
//               <LinkContainer to="/cart">
//                 <Nav.Link> 
//                   <i className="fas fa-shopping-cart"></i> Cart <span>{cart.cartItems.length}</span>
//                 </Nav.Link>
//               </LinkContainer>
//               {userInfo ? (
//                 <NavDropdown title={userInfo.name} id="username">
//                   <LinkContainer to="/profile">
//                     <NavDropdown.Item>Profile</NavDropdown.Item>
//                   </LinkContainer>
//                   <NavDropdown.Item onClick={logoutHandler}>
//                     Logout
//                   </NavDropdown.Item>
//                 </NavDropdown>
//               ) : (
//                 <LinkContainer to="/login">
//                   <Nav.Link>
//                     <i className="fas fa-user"></i> Sign In
//                   </Nav.Link>
//                 </LinkContainer>
//               )}
//               {userInfo && userInfo.isAdmin && (
//                 <NavDropdown title="Admin Dashboard" id="adminmenu">
//                   <LinkContainer to="/admin/userlist">
//                     <NavDropdown.Item>Users</NavDropdown.Item>
//                   </LinkContainer>
//                   <LinkContainer to="/admin/productlist">
//                     <NavDropdown.Item>Products</NavDropdown.Item>
//                   </LinkContainer>
//                   <LinkContainer to="/admin/orderlist">
//                     <NavDropdown.Item>Orders</NavDropdown.Item>
//                   </LinkContainer>
//                 </NavDropdown>
//               )}
//             </Nav>
//           </Navbar.Collapse>
//         </Container>
//       </Navbar>
//     </header>
//   );
// };

// export default Header;
