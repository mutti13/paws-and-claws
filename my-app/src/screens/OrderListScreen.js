import React, { useEffect } from "react";
import Message from "../components/Message";
import Loader from "../components/Loader";
import { LinkContainer } from "react-router-bootstrap";
import { Table, Button, Container } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { listUsers } from "../actions/userActions";
import Locatenav from "../components/Locatenav";
import BottomBar from "../components/BottomBar";
import { useNavigate } from "react-router-dom";
import { listOrders } from "../actions/orderActions";
import Aos from "aos";
import "aos/dist/aos.css";
function OrderListScreen() {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const orderList = useSelector((state) => state.orderList);
  const { loading, error, orders } = orderList;

  const userLogin = useSelector((state) => state.userLogin);
  const { userInfo } = userLogin;

  useEffect(() => {
    Aos.init({ duration: 1200 });
    if (userInfo && userInfo.isAdmin) {
      dispatch(listOrders());
    } else {
      navigate("/login");
    }
  }, [dispatch, navigate, userInfo]);

  return (
    <div
      className="hei newtext"
      style={{ height: "100%", backgroundColor: "#f2ede1" }}
      data-aos="fade-down"
    >
      <Locatenav />
      <Container>
        <h1
          style={{
            fontFamily: "Bebas Neue",
            letterSpacing: ".15em",
            fontSize: "50px",
          }}
        >
          Orders
        </h1>
        {loading ? (
          <Loader />
        ) : error ? (
          <Message variant="danger">{error}</Message>
        ) : (
          <Table striped bordered hover responsive className="table-small">
            <thead>
              <tr>
                <th>ID</th>
                <th>USER</th>
                <th>DATE</th>
                <th>TOTAL</th>
                <th>PAID</th>
                <th>DELIVERED</th>
              </tr>
            </thead>
            <tbody>
              {orders.map((order) => (
                <tr key={order._id}>
                  <td>{order._id}</td>
                  <td>{order.user && order.user.name}</td>
                  <td>{order.createdAt.substring(0, 10)} </td>
                  <td>{order.totalPrice}</td>

                  <td>
                    {order.isPaid ? (
                      (console.log("paidAt", order.paidAt),
                      console.log("createdAt", order.createdAt),
                      order.paidAt.substring(0, 10))
                    ) : (
                      <i class="fa-solid fa-xmark" style={{ color: "red" }}></i>
                    )}
                  </td>
                  <td>
                    {order.isDelivered ? (
                      (console.log("deliveredAt", order.deliveredAt),
                      order.deliveredAt.substring(0, 10))
                    ) : (
                      <i class="fa-solid fa-xmark" style={{ color: "red" }}></i>
                    )}
                  </td>
                  <td>
                    <LinkContainer to={`/placed/${order._id}`}>
                      <Button variant="light" className="btn-sm">
                        Details
                      </Button>
                    </LinkContainer>
                  </td>
                </tr>
              ))}
            </tbody>
          </Table>
        )}
      </Container>
      <BottomBar />
    </div>
  );
}

export default OrderListScreen;
