import React, { useState } from "react";
import "./Cart.css";
import SpecialNavbar from "../SpecialNavbar/SpecialNavbar";
import { Card, Radio, Button } from "antd";
import { DeleteOutlined } from "@ant-design/icons";

const CartItem = ({ item, onDelete, onSelectChange }) => (
  <Card bordered={false} className="cart-item item">
    <div className="ShoppingItem">
      <div>
        <Radio
          checked={item.selected}
          onClick={(e) => {
            e.preventDefault();
            onSelectChange(item.id, !item.selected);
          }}
        ></Radio>
      </div>
      <div className="item-details">
        <h4>{item.name}</h4>
        <p>Price: ${item.price}</p>
      </div>
      <div className="delete-button">
        {" "}
        {/* Added a class for styling */}
        <DeleteOutlined
          className="delete-icon"
          onClick={() => onDelete(item.id)}
          style={{ color: "red" }}
        />
      </div>
    </div>
  </Card>
);

const Cart = () => {
  const [cartItems, setCartItems] = useState([
    {
      id: 1,
      name: "60,000 Adobe Lightroom Presets",
      price: 10.99,
      selected: false,
    },
    { id: 2, name: "T-Shirt Designs", price: 15.99, selected: false },
    {
      id: 3,
      name: "Adobe After Effects Templates",
      price: 20.99,
      selected: false,
    },
    { id: 4, name: "20GB Royalty Stock Images", price: 10.99, selected: false },
    {
      id: 5,
      name: "2500+ Royalty Free Stock Video Footage",
      price: 15.99,
      selected: false,
    },
    { id: 6, name: "1000+ Mix Wallpapers Pack", price: 20.99, selected: false },
  ]);

  const [selectAll, setSelectAll] = useState(false);

  const handleDeleteItem = (id) => {
    setCartItems(cartItems.filter((item) => item.id !== id));
  };

  const handleSelectItem = (id, isSelected) => {
    const updatedItems = cartItems.map((item) =>
      item.id === id ? { ...item, selected: isSelected } : item
    );
    setCartItems(updatedItems);
    setSelectAll(updatedItems.every((item) => item.selected));
  };

  const handleSelectAll = (e) => {
    e.preventDefault();
    const newSelectAllState = !selectAll;
    setSelectAll(newSelectAllState);
    setCartItems(
      cartItems.map((item) => ({ ...item, selected: newSelectAllState }))
    );
  };

  const handleDeleteSelected = () => {
    setCartItems(cartItems.filter((item) => !item.selected));
    setSelectAll(false);
  };

  return (
    <>
      <div className="Contain">
        <div>
          <SpecialNavbar />
        </div>
        <div className="CartContainer">
          <div>
            <Card bordered={false}>
              <h3>Shopping Cart ({cartItems.length})</h3>
              <div className="ShoppingFunction">
                <div>
                  <Radio
                    className="selectAll"
                    checked={selectAll}
                    onClick={handleSelectAll}
                  >
                    Select all items
                  </Radio>
                </div>
                <Button
                  className="deleteSelected"
                  onClick={handleDeleteSelected}
                  disabled={!cartItems.some((item) => item.selected)}
                >
                  Delete selected items
                </Button>
              </div>
            </Card>
          </div>
          <div>
            {cartItems.map((item) => (
              <CartItem
                key={item.id}
                item={item}
                onDelete={handleDeleteItem}
                onSelectChange={handleSelectItem}
              />
            ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default Cart;
