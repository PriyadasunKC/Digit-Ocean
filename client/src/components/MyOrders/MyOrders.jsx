import "./MyOrders.css";
import SpecialNavbar from "../SpecialNavbar/SpecialNavbar";
import { Button, Form, Card } from "react-bootstrap";
import { SearchOutlined } from "@ant-design/icons";
import { useState } from "react";
import { Link } from "react-router-dom";

const MyOrders = () => {
  const [orders, setOrders] = useState([
    {
      id: "123456",
      date: "2023-10-26",
      items: ["Product A"],
      total: 45.99,
    },
    {
      id: "789012",
      date: "2023-10-20",
      items: ["Product C"],
      total: 12.5,
    },
    {
      id: "345678",
      date: "2023-10-15",
      items: ["Product D", "Product E", "Product F"],
      total: 75.25,
    },
    {
      id: "901234",
      date: "2023-10-10",
      items: ["Product G", "Product H"],
      total: 32.0,
    },
  ]);

  const [searchTerm, setSearchTerm] = useState("");
  const [selectedDate, setSelectedDate] = useState("");

  const handleSearch = (event) => {
    setSearchTerm(event.target.value);
  };

  const handleDateChange = (event) => {
    setSelectedDate(event.target.value);
  };

  const filteredOrders = orders.filter((order) => {
    const idMatch = order.id.toLowerCase().startsWith(searchTerm.toLowerCase());
    const dateMatch = selectedDate === "" || order.date === selectedDate;
    return idMatch && dateMatch;
  });

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
          {filteredOrders.length > 0 ? (
            filteredOrders.map((order) => (
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
                          {/* Assuming 'item' is the product name and you have product URLs */}
                          <Link to={`/products/${item}`}>{item}</Link>
                          {index < order.items.length - 1 && ", "}
                        </span>
                      ))}
                    </p>
                    <p>
                      <strong>Total:</strong> ${order.total}
                    </p>
                    <p>
                      <strong>Status:</strong> {order.status}
                    </p>
                  </div>
                </Card.Body>
              </Card>
            ))
          ) : (
            <p>No matching orders found.</p>
          )}
        </div>
      </div>
    </div>
  );
};

export default MyOrders;
