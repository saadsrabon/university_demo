import React, { useState, useEffect, useRef } from "react";
import { Table, Form, Button, Row, Col } from "react-bootstrap";
import { LinkContainer } from "react-router-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import Message from "../components/Message";
import Loader from "../components/Loader";
import { getUserDetails, updateUserProfile } from "../actions/userActions";
import { listMyOrders } from "../actions/orderActions";
import { USER_UPDATE_PROFILE_RESET } from "../constants/userConstants";
import "../assets/css/ProfileScreen.css";
import ReactToPrint from "react-to-print";

const ProfileScreen = ({ location, history }) => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [message, setMessage] = useState(null);

  const dispatch = useDispatch();

  //for printing invoice
  const invoiceRef = useRef();

  const userDetails = useSelector((state) => state.userDetails);
  const { loading, error, user } = userDetails;

  const userLogin = useSelector((state) => state.userLogin);
  const { userInfo } = userLogin;

  const userUpdateProfile = useSelector((state) => state.userUpdateProfile);
  const { success } = userUpdateProfile;

  const orderListMy = useSelector((state) => state.orderListMy);
  const { loading: loadingOrders, error: errorOrders, orders } = orderListMy;

  // for Print and pdf
  // const componentRef = useRef();

  useEffect(() => {
    if (!userInfo) {
      history.push("/login");
    } else {
      if (!user || !user.name || success) {
        dispatch({ type: USER_UPDATE_PROFILE_RESET });
        dispatch(getUserDetails("profile"));
        dispatch(listMyOrders());
      } else {
        setName(user.name);
        setEmail(user.email);
      }
    }
  }, [dispatch, history, userInfo, user, success]);

  const submitHandler = (e) => {
    e.preventDefault();
    if (password !== confirmPassword) {
      setMessage("Passwords do not match");
    } else {
      dispatch(updateUserProfile({ id: user._id, name, email, password }));
    }
  };

  return (
    <Row>
      <Col md={3}>
        <h2>User Profile</h2>
        {message && <Message variant="danger">{message}</Message>}
        {}
        {success && <Message variant="success">Profile Updated</Message>}
        {loading ? (
          <Loader />
        ) : error ? (
          <Message variant="danger">{error}</Message>
        ) : (
          <Form onSubmit={submitHandler}>
            <Form.Group controlId="name">
              <Form.Label>Name</Form.Label>
              <Form.Control
                className="profile-title"
                type="name"
                placeholder="Enter name"
                value={name}
                onChange={(e) => setName(e.target.value)}
              ></Form.Control>
            </Form.Group>

            <Form.Group controlId="email">
              <Form.Label>Email Address</Form.Label>
              <Form.Control
                className="profile-title"
                type="email"
                placeholder="Enter email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              ></Form.Control>
            </Form.Group>

            <Form.Group controlId="password">
              <Form.Label>Password</Form.Label>
              <Form.Control
                className="profile-title"
                type="password"
                placeholder="Enter password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              ></Form.Control>
            </Form.Group>

            <Form.Group controlId="confirmPassword">
              <Form.Label>Confirm Password</Form.Label>
              <Form.Control
                className="profile-title"
                type="password"
                placeholder="Confirm password"
                value={confirmPassword}
                onChange={(e) => setConfirmPassword(e.target.value)}
              ></Form.Control>
            </Form.Group>

            <Button type="submit" variant="primary" className="update">
              Update
            </Button>
          </Form>
        )}
      </Col>
      <Col md={9}>
        <h2>My Orders</h2>
        {/* <ReactToPrint
          trigger={() => (
            <div className="print">
              {" "}
              <i className="fas fa-print"></i>
            </div>
          )}
          content={() => componentRef.current}
        /> */}
        {loadingOrders ? (
          <Loader />
        ) : errorOrders ? (
          <Message variant="danger">{errorOrders}</Message>
        ) : (
          <Table striped bordered hover responsive className="table-sm">
            <thead>
              <tr>
                <th>ID</th>
                <th>DATE</th>
                <th>TOTAL</th>
                <th>PAID</th>
                <th>DELIVERED</th>
                <th>Details</th>
                <th>Invoice</th>
              </tr>
            </thead>
            <tbody>
              {orders.map((order) => (
                <tr key={order._id}>
                  <td>{order._id}</td>
                  <td>{order.createdAt.substring(0, 10)}</td>
                  <td>{order.totalPrice}</td>
                  <td>
                    {order.isPaid ? (
                      order.paidAt.substring(0, 10)
                    ) : (
                      <span className="text-danger">Not paid</span>
                    )}
                  </td>

                  <td>
                    {order.isDelivered ? (
                      order.deliveredAt.substring(0, 10)
                    ) : (
                      <span className="text-danger">Not Delivered</span>
                    )}
                  </td>
                  <td>
                    <LinkContainer to={`/order/${order._id}`}>
                      <Button className="btn-sm" variant="light">
                        Details
                      </Button>
                    </LinkContainer>
                  </td>
                  <td>
                    {order?.isPaid ? (
                      <ReactToPrint
                        trigger={() => (
                          <button className="btn btn-success mb-1">
                            {" "}
                            <i className="fas fa-print"></i>
                            <small className="invoice">Invoice</small>
                          </button>
                        )}
                        content={() => invoiceRef.current}
                      />
                    ) : (
                      // <i className="fas fa-times" style={{ color: "red" }}></i>
                      <span className="text-danger">Not paid</span>
                    )}
                    {/* the invisible table  */}
                    <div style={{ display: "none" }}>
                      <Table ref={invoiceRef} responsive>
                        <thead className="bg-light">
                          <tr>
                            <th colSpan={4} className="text-center fw-bold">
                              <h2 className="text-info">
                                {" "}
                                DERHADDI MANAGEMENT SYSTEM{" "}
                              </h2>{" "}
                              <br />
                              <h5 className="text-dark">
                                Invoice Date: {new Date().toDateString()}
                              </h5>
                            </th>
                          </tr>
                          {/* <tr>
                            <th
                              colSpan={4}
                              className="d-flex justify-content-center"
                            >
                              <h4 className="text-dark fw-bold">
                                Delivery For :{" "}
                                <span className="text-warning">
                                  {order.user && order.user.name}
                                  {order.name}
                                </span>
                              </h4>
                            </th>
                          </tr> */}
                        </thead>
                        <tbody>
                          <tr>
                            <td
                              colSpan={4}
                              className="d-flex justify-content-end me-2"
                            >
                              <h4 className="fw-bold">Delivery to: Worthy</h4>
                            </td>
                          </tr>
                          <tr>
                            <td
                              colSpan={4}
                              className="d-flex justify-content-end me-2"
                            >
                              <h4 className="fw-bold">Order Id: {order._id}</h4>
                            </td>
                          </tr>
                          <tr>
                            <td
                              colSpan={4}
                              className="d-flex justify-content-end me-2"
                            >
                              <h4 className="fw-bold">
                                Order Date: {order.createdAt.substring(0, 10)}
                              </h4>
                            </td>
                          </tr>
                          <tr>
                            <td
                              colSpan={4}
                              className="d-flex justify-content-end me-2"
                            >
                              <h4 className="fw-bold">
                                Tax Price: {order.taxPrice} Taka
                              </h4>
                            </td>
                          </tr>
                          <tr>
                            <td
                              colSpan={4}
                              className="d-flex justify-content-end me-2"
                            >
                              <h4 className="fw-bold">
                                Discount Price: {order.discountPrice} Taka
                              </h4>
                            </td>
                          </tr>
                          <tr>
                            <td
                              colSpan={4}
                              className="d-flex justify-content-end me-2"
                            >
                              <h4 className="fw-bold">
                                Total Cost: {order.totalPrice} Taka
                              </h4>
                            </td>
                          </tr>
                          <tr>
                            <td
                              colSpan={4}
                              className="d-flex justify-content-end me-2"
                            >
                              <h3 className="fw-bold text-info">
                                Payment Method: Paypal
                                {/* #demo card Number
                                4242424242424242 
                                4000056655665556
                                5555555555554444 */}
                              </h3>
                            </td>
                          </tr>
                        </tbody>
                      </Table>
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </Table>
        )}
      </Col>
    </Row>
  );
};

export default ProfileScreen;
