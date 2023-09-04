

import React, { useEffect, useRef, useState } from "react";
import { LinkContainer } from "react-router-bootstrap";
import { Table, Button, Row, Col } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import Message from "../components/Message";
import Loader from "../components/Loader";
import { deleteOrder, listOrders } from "../actions/orderActions";
import ReactToPrint from "react-to-print";
import ProductListScreen from "./ProductListScreen";
import "../assets/css/OrderListScreen.css";

const OrderListScreen = ({ history }) => {
  // const [orders, setOrders] = useState([]);
  const [displayOrders, setDisplayOrders] = useState([]);
  const [searchText, setSearchText] = useState("");
  const [searchDate, setSearchDate] = useState();
  const [dateRangeStart, setdateRangeStart] = useState();
  const [dateRangeLast, setdateRangeLast] = useState();

  const dispatch = useDispatch();

  const orderList = useSelector((state) => state.orderList);
  const { loading, error, orders } = orderList;

  const userLogin = useSelector((state) => state.userLogin);
  const { userInfo } = userLogin;

  // for Print and pdf
  const componentRef = useRef();

  //for printing invoice
  // const invoiceRef = useRef();

  useEffect(() => {
    if (userInfo && userInfo.isAdmin) {
      dispatch(listOrders());
    } else {
      history.push("/login");
    }
  }, [dispatch, history, userInfo]);

  const handleSearch = (e) => {
    setSearchText(e.target.value);
    // console.log(searchText);
    const matchedOrders = orders.filter((order) =>
      order._id.includes(searchText)
    );
    // setDisplayOrders(matchedOrders);
    console.log(matchedOrders);
    // orders = matchedOrders;
  };
  // console.log(displayOrders);

  // search by date
  const handleDateSearch = (e) => {
    const dateValue = new Date(e.target.value).toLocaleDateString();
    setSearchDate(dateValue);
    const matchedOrders = orders.filter(
      (order) => order?.orderDate === dateValue
    );
    // setDisplayOrders(matchedOrders);
  };

  //handle inputs for range
  const handleRangeStart = (e) => {
    setdateRangeStart(e.target.value);
  };

  const handleRangeLast = (e) => {
    setdateRangeLast(e.target.value);
  };

  //handle range search
  const handleSearchRange = () => {
    const ordersByRange = orders.filter(
      (order) =>
        (new Date(dateRangeStart) < new Date(order.orderDate) &&
          new Date(dateRangeLast) > new Date(order.orderDate)) ||
        new Date(dateRangeStart).toDateString() ===
          new Date(order.orderDate).toDateString() ||
        new Date(dateRangeLast).toDateString() ===
          new Date(order.orderDate).toDateString()
    );
    // setDisplayOrders(ordersByRange);
    // console.log(ordersByRange);
  };

  return (
    <>
      <Row className="align-items-center pb-2">
        <Col>
          <h1>Orders</h1>
        </Col>
        <div className="order_print">
          <ReactToPrint
            trigger={() => (
              <div>
                {" "}
                <i className="fas fa-print"></i>
              </div>
            )}
            content={() => componentRef.current}
          />
        </div>
      </Row>
      {loading ? (
        <Loader />
      ) : error ? (
        <Message variant="danger">{error}</Message>
      ) : (
        <div className="">
          <h3 className="text-center mb-4 fw-bold my-3">Manage all Orders</h3>

          <Table striped bordered hover responsive className="table-sm">
            <thead>
              <tr>
                {/* <th>NAME</th> */}
                <th>ID</th>
                <th>USER</th>
                <th>DATE</th>
                <th>TOTAL</th>
                <th>PAID</th>
                <th>DELIVERED</th>
                <th>Details</th>
              </tr>
            </thead>
            <tbody>
              {orders.map((order) => (
                <tr key={order._id}>
                  <td>{order._id}</td>
                  <td>{order.user && order.user.name}</td>
                  <td>{order.createdAt.substring(0, 10)}</td>
                  <td>${order.totalPrice}</td>
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
                      <Button variant="light" className="btn-sm">
                        Details
                      </Button>
                    </LinkContainer>
                  </td>
                </tr>
              ))}
            </tbody>
          </Table>

          <div className="" style={{ display: "none" }}>
            <Table
              ref={componentRef}
              striped
              bordered
              hover
              responsive
              className="table-sm"
            >
              <thead>
                <tr>
                  <th colSpan={8} className="text-center text-primary fw-bold">
                    <h2 className="text-danger">
                      {" "}
                      DERHADDI MANAGEMENT SYSTEM{" "}
                    </h2>{" "}
                    <br />
                    <h5 className="text-secondary">
                      Date: {new Date().toDateString()}
                    </h5>
                  </th>
                </tr>
                <tr>
                  {/* <th>NAME</th> */}
                  <th>ID</th>
                  <th>USER</th>
                  <th>DATE</th>
                  <th>TOTAL</th>
                  <th>PAID</th>
                  <th>DELIVERED</th>
                  <th></th>
                </tr>
              </thead>
              <tbody>
                {orders.map((order) => (
                  <tr key={order._id}>
                    <td>{order._id}</td>
                    <td>{order.user && order.user.name}</td>
                    <td>{order.createdAt.substring(0, 10)}</td>
                    <td>${order.totalPrice}</td>
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
                  </tr>
                ))}
              </tbody>
            </Table>
          </div>
        </div>
      )}
    </>
  );
};

export default OrderListScreen;