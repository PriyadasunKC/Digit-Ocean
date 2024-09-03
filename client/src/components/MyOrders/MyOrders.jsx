import "./MyOrders.css";
import SpecialNavbar from "../SpecialNavbar/SpecialNavbar";
import { Button, Form, Card, Pagination } from "react-bootstrap";
import { SearchOutlined } from "@ant-design/icons";
import { useState } from "react";
import { Link } from "react-router-dom";

const MyOrders = () => {
  const [orders, setOrders] = useState([
    {
      id: "123456",
      date: "2023-10-26",
      items: ["60,000 Adobe Lightroom Presets"],
      total: 45.99,
    },
    {
      id: "789012",
      date: "2023-10-20",
      items: ["T-Shirt Designs"],
      total: 12.5,
    },
    {
      id: "345678",
      date: "2023-10-15",
      items: [
        "Adobe After Effects Templates",
        "20GB Royalty Stock Images",
        "2500+ Royalty Free Stock Video Footage",
      ],
      total: 75.25,
    },
    {
      id: "901234",
      date: "2023-10-10",
      items: ["1000+ Mix Wallpapers Pack"],
      total: 32.0,
    },
  ]);

  const [searchTerm, setSearchTerm] = useState("");
  const [selectedDate, setSelectedDate] = useState("");
  const [currentPage, setCurrentPage] = useState(1);
  const ordersPerPage = 3;

  const handleSearch = (event) => {
    setSearchTerm(event.target.value);
    setCurrentPage(1); 
  };

  const handleDateChange = (event) => {
    setSelectedDate(event.target.value);
    setCurrentPage(1); 
  };

  const filteredOrders = orders.filter((order) => {
    const idMatch = order.id.toLowerCase().startsWith(searchTerm.toLowerCase());
    const dateMatch = selectedDate === "" || order.date === selectedDate;
    return idMatch && dateMatch;
  });

  const indexOfLastOrder = currentPage * ordersPerPage;
  const indexOfFirstOrder = indexOfLastOrder - ordersPerPage;
  const currentOrders = filteredOrders.slice(
    indexOfFirstOrder,
    indexOfLastOrder
  );

  const handlePageChange = (pageNumber) => {
    setCurrentPage(pageNumber);
  };

  return (
    <div className="MainContainer">
      <SpecialNavbar />
      <div className="OrderContainer">
        <div className="SearchContainer">
          <div className="SearchContainer1">
            <Form.Control
              type="text"
              placeholder="Enter Order ID"
              className="OrderID"
              value={searchTerm}
              onChange={handleSearch}
            />
            <Button>
              <SearchOutlined />
            </Button>
          </div>
          <div className="SearchContainer1">
            <Form.Control
              type="date"
              className="OrderDate"
              value={selectedDate}
              onChange={handleDateChange}
            />
          </div>
        </div>
        <div className="OrderBody">
          {currentOrders.length > 0 ? (
            currentOrders.map((order) => (
              <Card key={order.id} className="OrderCard">
                <Card.Body>
                  <div className="order-header">
                    <Card.Title style={{ textAlign: "left" }}>
                      Order ID: {order.id}
                    </Card.Title>
                    <Card.Text>Date: {order.date}</Card.Text>
                  </div>
                  <hr />
                  <div className="order-details">
                    <p>
                      <strong>Items:</strong>{" "}
                      {order.items.map((item, index) => (
                        <span key={index}>
                          <Link
                            style={{
                              textDecoration: "none",
                              color: "black",
                            }}
                            to={`/products/${item}`}
                          >
                            {item}
                          </Link>
                          {index < order.items.length - 1 && ", "}
                        </span>
                      ))}
                    </p>
                    <p>
                      <strong>Total:</strong> ${order.total}
                    </p>
                  </div>
                </Card.Body>
              </Card>
            ))
          ) : (
            <p>No matching orders found.</p>
          )}
          {/* <Pagination style={{
          width: "100%",
          backgroundColor: "red",
        }} className="justify-content-center mt-3">
          {Array(Math.ceil(filteredOrders.length / ordersPerPage))
            .fill()
            .map((_, index) => (
              <Pagination.Item
                key={index + 1}
                active={index + 1 === currentPage}
                onClick={() => handlePageChange(index + 1)}
              >
                {index + 1}
              </Pagination.Item>
            ))}
        </Pagination> */}
        </div>
      </div>
    </div>
  );
};

export default MyOrders;
