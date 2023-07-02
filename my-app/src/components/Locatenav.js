import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
// import Container from "react-bootstrap/Container";
// import Nav from "react-bootstrap/Nav";
// import Navbar from "react-bootstrap/Navbar";
// import NavDropdown from "react-bootstrap/NavDropdown";
import "../my.css";
import { Link, useNavigate } from "react-router-dom";
import { logout } from "../actions/userActions";
import { NavDropdown } from "react-bootstrap";
import { LinkContainer } from "react-router-bootstrap";
import SearchBox from "./SearchBox";
function Locatenav() {
  const navigate = useNavigate();
  const userLogin = useSelector((state) => state.userLogin);
  const { userInfo } = userLogin;
  const dispatch = useDispatch();

  const logoutHandler = () => {
    dispatch(logout());
    if (!userInfo) {
      console.log("in userinfo");
      navigate("/");
    }
  };

  return (
    <div>
      {/* <Navbar expand="lg">
        <Container>
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="me-auto">
              <img
                src="/images/icon.png"
                alt="Girl in a jacket"
              ></img>
              <Nav.Link href="#home">shop</Nav.Link>
              <Nav.Link href="#link">locate</Nav.Link>
              <Nav.Link href="#link">find your pet</Nav.Link>
              <Nav.Link href="#link">about us</Nav.Link>
              <Nav.Link href="#link" className='ab1'>sign up</Nav.Link>
              <Nav.Link href="#link">sign in</Nav.Link>
              <Nav.Link href="#link">
                <i className="fas fa-shopping-cart"></i>
              </Nav.Link>
              <Nav.Link href="#link">
                <i class="fa-solid fa-magnifying-glass"></i>
              </Nav.Link>
              <Nav.Link href="#link">
                <i class="fa-solid fa-user"></i>
              </Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar> */}
      <nav
        class="navbar navbar-expand-lg na1"
        style={{ backgroundColor: "transparent" }}
      >
        <div class="container-fluid">
          <Link
            to="/"
            style={{ textDecoration: "none", color: "black" }}
            class="nav-link active"
            aria-current="page"
          >
            <img src="/images/icon.png" alt="Girl in a jacket"></img>
          </Link>
          <button
            class="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span class="navbar-toggler-icon"></span>
          </button>
          <div
            class="collapse navbar-collapse"
            id="navbarSupportedContent"
            style={{
              fontFamily: "Montserrat",
              fontWeight: "bold",
            }}
          >
            <ul class="navbar-nav me-auto mb-2 mb-lg-0">
              <li class="nav-item">
                <Link
                  to="/shop"
                  style={{
                    textDecoration: "none",
                    color: "black",
                  }}
                  class="nav-link active"
                  aria-current="page"
                >
                  SHOP
                </Link>
              </li>
              <li class="nav-item">
                <Link
                  to="/locate"
                  style={{ textDecoration: "none", color: "black" }}
                  class="nav-link active"
                  aria-current="page"
                >
                  LOCATE
                </Link>
              </li>
              <li class="nav-item">
                <Link
                  to="/petselect"
                  style={{ textDecoration: "none", color: "black" }}
                  class="nav-link active"
                  aria-current="page"
                >
                  FIND PET
                </Link>
              </li>
              <li class="nav-item">
                <Link
                  to="/aboutus"
                  style={{ textDecoration: "none", color: "black" }}
                  class="nav-link active"
                  aria-current="page"
                >
                  ABOUT US
                </Link>
              </li>
            </ul>

            {userInfo ? (
              <ul class="navbar-nav mb-2 mb-lg-0">
                <li class="nav-item">
                  <Link
                    style={{ textDecoration: "none", color: "black" }}
                    class="nav-link active"
                    aria-current="page"
                    onClick={logoutHandler}
                  >
                    LOGOUT
                  </Link>
                </li>
                <li class="nav-item">
                  <Link
                    to="/userprofile"
                    style={{ textDecoration: "none", color: "black" }}
                    class="nav-link active"
                    aria-current="page"
                  >
                    <li>
                      <i
                        style={{ marginRight: "3px" }}
                        class="fa-solid fa-user"
                      ></i>
                      {userInfo.name}
                    </li>
                  </Link>
                </li>
              </ul>
            ) : (
              <ul class="navbar-nav mb-2 mb-lg-0">
                <li class="nav-item">
                  <Link
                    to="/signup"
                    style={{ textDecoration: "none", color: "black" }}
                    class="nav-link active"
                    aria-current="page"
                  >
                    SIGN UP
                  </Link>
                </li>
                <li class="nav-item">
                  <Link
                    to="/login"
                    style={{ textDecoration: "none", color: "black" }}
                    class="nav-link active"
                    aria-current="page"
                  >
                    SIGN IN
                  </Link>
                </li>
              </ul>
            )}
            {userInfo && userInfo.isAdmin && (
              <NavDropdown
                // title="Admin"
                title={<span className="text-secondary my-auto">Admin</span>}
                className="navdrop1"
                style={{
                  color: "black",
                  textDecoration: "none",
                  backgroundColor: "transparent",
                  fontWeight: "bold",
                }}
              >
                <LinkContainer to="/admin/userlist">
                  <NavDropdown.Item>Users</NavDropdown.Item>
                </LinkContainer>

                <LinkContainer to="/admin/productlist">
                  <NavDropdown.Item>Products</NavDropdown.Item>
                </LinkContainer>

                <LinkContainer to="/admin/orderlist">
                  <NavDropdown.Item>Orders</NavDropdown.Item>
                </LinkContainer>
                <LinkContainer to="/admin/petslist">
                  <NavDropdown.Item>Pets</NavDropdown.Item>
                </LinkContainer>
              </NavDropdown>
            )}

            <ul class="navbar-nav mb-2 mb-lg-0">
              <li class="nav-item">
                <Link
                  to="/cart"
                  style={{ textDecoration: "none", color: "black" }}
                  class="nav-link active"
                  aria-current="page"
                >
                  <i className="fas fa-shopping-cart"></i>
                </Link>
              </li>
            </ul>
            {/* <form class="d-flex" role="search">
              <input
                class="form-control me-2"
                type="search"
                placeholder="Search"
                aria-label="Search"
                style={{ backgroundColor: "#F5EBE0" }}
              />
              <button
                class="btn  spe"
                type="submit"
                style={{ backgroundColor: "#33292A", color: "white" ,fontFamily:'krub'}}
              >
                Search
              </button>
            </form> */}
            <SearchBox />
          </div>
        </div>
      </nav>

      {/* <nav class="navbar navbar-expand-lg navbar-dark shadow-5-strong">
 
  <div class="container-fluid">

    <a class="navbar-brand" href="#">Brand</a>


    <button
      class="navbar-toggler"
      type="button"
      data-mdb-toggle="collapse"
      data-mdb-target="#navbarSupportedContent"
      aria-controls="navbarSupportedContent"
      aria-expanded="false"
      aria-label="Toggle navigation"
    >
      <i class="fas fa-bars"></i>
    </button>

    
    <div class="collapse navbar-collapse" id="navbarSupportedContent">
 
      <ul class="navbar-nav me-auto mb-2 mb-lg-0">
        <li class="nav-item">
          <a class="nav-link active" aria-current="page" href="#">Home</a>
        </li>
        <li class="nav-item">
          <a class="nav-link" href="#">Link</a>
        </li>
     
        <li class="nav-item dropdown">
          <a
            class="nav-link dropdown-toggle"
            href="#"
            id="navbarDropdown"
            role="button"
            data-mdb-toggle="dropdown"
            aria-expanded="false"
          >
            Dropdown
          </a>
  
          <ul class="dropdown-menu" aria-labelledby="navbarDropdown">
            <li>
              <a class="dropdown-item" href="#">Action</a>
            </li>
            <li>
              <a class="dropdown-item" href="#">Another action</a>
            </li>
            <li><hr class="dropdown-divider" /></li>
            <li>
              <a class="dropdown-item" href="#">Something else here</a>
            </li>
          </ul>
        </li>
        <li class="nav-item">
          <a class="nav-link disabled" href="#" tabindex="-1" aria-disabled="true"
            >Disabled</a
          >
        </li>
      </ul>
    </div>
  </div>
</nav> */}
    </div>
  );
}

export default Locatenav;
