import React, { useEffect } from "react";
import Message from "../components/Message";
import Loader from "../components/Loader";
import { LinkContainer } from "react-router-bootstrap";
import { Table, Button, Container, Row, Col } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import Locatenav from "../components/Locatenav";
import BottomBar from "../components/BottomBar";
import { useNavigate } from "react-router-dom";
import {
  listProducts,
  deleteProduct,
  createProduct,
} from "../actions/productActions";
import { PRODUCT_CREATE_RESET } from "../constants/productConstants";
import Paginate from "../components/Paginate";
import { useLocation } from "react-router-dom";
import Aos from "aos";
import "aos/dist/aos.css";
function ProductListScreen() {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const location = useLocation();

  const productList = useSelector((state) => state.productList);
  const { loading, error, products, pages, page } = productList;

  const productDelete = useSelector((state) => state.productDelete);
  const {
    loading: loadingDelete,
    error: errorDelete,
    success: successDelete,
  } = productDelete;

  const productCreate = useSelector((state) => state.productCreate);
  const {
    loading: loadingCreate,
    error: errorCreate,
    success: successCreate,
    product: createdProduct,
  } = productCreate;

  const userLogin = useSelector((state) => state.userLogin);
  const { userInfo } = userLogin;

  // instead of navigate.location use the following

  let keyword = location.search;

  useEffect(() => {
    Aos.init({ duration: 1200 });
    if (userInfo && userInfo.isAdmin) {
      dispatch(listProducts());
    } else {
      navigate("/login");
    }
    // dispatch({ type: PRODUCT_CREATE_RESET });

    if (successCreate) {
      navigate(`/admin/products/update/${createdProduct._id}/`);
    } else {
      dispatch(listProducts(keyword));
    }
  }, [
    dispatch,
    navigate,
    userInfo,
    successDelete,
    successCreate,
    createdProduct,
    keyword,
  ]);

  const deleteHandler = (id) => {
    if (window.confirm("Are you sure you want to delete this user?")) {
      //Delete products
      dispatch(deleteProduct(id));
    }
  };

  const createProductHandler = () => {
    //Create product
    dispatch(createProduct());
    navigate("/admin/productList");
  };

  return (
    <div
      className="hei newtext"
      style={{ height: "100%", backgroundColor: "#f2ede1" }}
      data-aos="fade-down"
    >
      <Locatenav />
      <Container style={{ backgroundColor: "#f2ede1" }}>
        <Row className="align-items-center">
          <Col>
            <h1
              style={{
                fontFamily: "Bebas Neue",
                letterSpacing: ".15em",
                fontSize: "50px",
              }}
            >
              PRODUCTS
            </h1>
          </Col>
          <Col className="text-right">
            <button
              className="my-3 "
              onClick={createProductHandler}
              style={{
                // background: "#2a7075",
                // borderColor: "#2a7075",
                // borderRadius: 0,
                width:"150px",
                height:'50px',
                // textAlign:'center',
                margin:'auto',
                fontSize:'15px',
                marginLeft:'380px'

              }}
            >
              <i className="fas fa-plus"></i> CREATE PRODUCT
            </button>
          </Col>
        </Row>

        {loadingDelete && <Loader />}
        {errorDelete && <Message variant="danger">{errorDelete}</Message>}

        {loadingCreate && <Loader />}
        {errorCreate && <Message variant="danger">{errorCreate}</Message>}

        {loading ? (
          <Loader />
        ) : error ? (
          <Message variant="danger">{error}</Message>
        ) : (
          <div>
            <Table striped bordered hover responsive className="table-small">
              <thead>
                <tr>
                  <th>ID</th>
                  <th>Name</th>
                  <th>Price</th>
                  <th>Category</th>
                  <th>Brand</th>
                </tr>
              </thead>
              <tbody>
                {products.map((product) => (
                  <tr key={product._id}>
                    <td>{product._id}</td>
                    <td>{product.name}</td>
                    <td>{product.price}</td>
                    <td>{product.category}</td>
                    <td>{product.brand}</td>

                    <td>
                      <LinkContainer
                        to={`/admin/products/update/${product._id}/`}
                      >
                        <Button variant="light" className="btn-sm">
                          <i className="fas fa-edit"></i>
                        </Button>
                      </LinkContainer>

                      <Button
                        variant="danger"
                        className="btn-sm"
                        onClick={() => deleteHandler(product._id)}
                      >
                        <i className="fas fa-trash"></i>
                      </Button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </Table>
            <Paginate pages={pages} page={page} isAdmin={true} />
          </div>
        )}
      </Container>
      <BottomBar />
    </div>
  );
}

export default ProductListScreen;
