import React from "react";
import "./CommonHeader.css";
import { ShoppingCartOutlined, UserOutlined } from "@ant-design/icons";
import { Avatar, Badge, Space } from "antd";

const CommonHeader = ({ children }) => {
  const [searchQuery, setSearchQuery] = React.useState("");
  const [imageError, setImageError] = React.useState(false);
  const [src, setSrc] = React.useState(null);

  const handleSearchChange = (e) => {
    setSearchQuery(e.target.value);
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(searchQuery);
  };

  const handleImageError = () => {
    setImageError(true);
  };

  return (
    <div>
      <header
        style={{
          position: "fixed",
          width: "100%",
          zIndex: "100",
        }}
      >
        <div className="searchBar">
          <form
            className="form-inline my-2 my-lg-0 search-form searchBarSec"
            onSubmit={handleSubmit}
          >
            <input
              className="form-control mr-sm-2"
              type="search"
              placeholder="Search"
              aria-label="Search"
              value={searchQuery}
              onChange={handleSearchChange}
            />
            <button
              className="btn btn-outline-success my-2 my-sm-0 btnSearch"
              type="submit"
            >
              Search
            </button>
          </form>
        </div>
        <div className="container">
          <nav className="navbar navbar-expand-lg ">
            <a
              href="/"
              className="navbar-brand"
              style={{
                fontFamily: "cursive",
                fontSize: "30px",
                fontWeight: "bold",
              }}
            >
              DIGIT OCEAN
            </a>

            <button
              className="navbar-toggler"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#mainNav"
              aria-controls="mainNav"
              aria-expanded="false"
              aria-label="Toggle navigation"
            >
              <span className="navbar-toggler-icon"></span>
            </button>

            <div className="collapse navbar-collapse" id="mainNav">
              <ul className="navbar-nav ms-auto">
                <li className="nav-item dropdown">
                  <a
                    href="#"
                    className="nav-link dropdown-toggle"
                    id="categoriesDropdown"
                    role="button"
                    data-bs-toggle="dropdown"
                    aria-expanded="false"
                  >
                    Categories
                  </a>
                  <ul
                    className="dropdown-menu"
                    aria-labelledby="categoriesDropdown"
                  >
                    <li>
                      <a className="dropdown-item" href="#">
                        Graphic Design Assets
                      </a>
                    </li>
                    <li>
                      <a className="dropdown-item" href="#">
                        Video Editing Assets
                      </a>
                    </li>
                    <li>
                      <a className="dropdown-item" href="#">
                        Web Designing Template
                      </a>
                    </li>
                    <li>
                      <a className="dropdown-item" href="#">
                        Stock Images
                      </a>
                    </li>
                    <li>
                      <a className="dropdown-item" href="#">
                        Stock Videos
                      </a>
                    </li>
                    <li>
                      <a className="dropdown-item" href="#">
                        Stock Sounds
                      </a>
                    </li>
                    <li>
                      <a className="dropdown-item" href="#">
                        Wallpapers
                      </a>
                    </li>
                    <li>
                      <a className="dropdown-item" href="#">
                        Articles
                      </a>
                    </li>
                    <li>
                      <a className="dropdown-item" href="#">
                        E Books
                      </a>
                    </li>
                    <li>
                      <a className="dropdown-item" href="#">
                        Fonts
                      </a>
                    </li>
                    <li>
                      <a className="dropdown-item" href="#">
                        Softwares
                      </a>
                    </li>
                    <li>
                      <a className="dropdown-item" href="#">
                        Courses
                      </a>
                    </li>
                    <li>
                      <a className="dropdown-item" href="#">
                        Mini Games
                      </a>
                    </li>
                  </ul>
                </li>
                <li className="nav-item">
                  <a href="#Feature" className="nav-link">
                    Featured
                  </a>
                </li>
                <li className="nav-item">
                  <a href="#foot" className="nav-link">
                    About Us
                  </a>
                </li>
                <li className="nav-item">
                  <a href="#foot" className="nav-link">
                    Contact Us
                  </a>
                </li>
                <li className="nav-item dropdown DesktopProfile">
                  <a
                    href="#"
                    className="nav-link dropdown-toggle"
                    id="categoriesDropdown"
                    role="button"
                    data-bs-toggle="dropdown"
                    aria-expanded="false"
                  >
                    <div
                      style={{
                        width: "34px",
                        height: "34px",
                        borderRadius: "50%",
                        overflow: "hidden",
                        display: "inline-flex",
                        justifyContent: "center",
                        alignItems: "center",
                        backgroundColor: "#f0f0f0",
                      }}
                    >
                      {src && !imageError ? (
                        <img
                          src={src}
                          alt="Avatar"
                          style={{
                            width: "100%",
                            height: "100%",
                            objectFit: "cover",
                          }}
                          onError={handleImageError}
                        />
                      ) : (
                        <UserOutlined size={34} color="#999" />
                      )}
                    </div>
                  </a>
                  <ul
                    className="dropdown-menu"
                    aria-labelledby="categoriesDropdown"
                  >
                    <li className="mb-2 mt-2 p-2">
                      <a className="dropdown-item signIn" href="/login">
                        Sign In
                      </a>
                    </li>
                    <li>
                      <a className="dropdown-item" href="/register">
                        Register
                      </a>
                    </li>
                    <li>
                      <a className="dropdown-item" href="/my-orders">
                        My Profile
                      </a>
                    </li>
                    <li>
                      <a className="dropdown-item" href="/my-orders">
                        My Orders
                      </a>
                    </li>
                  </ul>
                </li>
                <li className="nav-item dropdown MobileProfile">
                  <a
                    href="#"
                    className="nav-link dropdown-toggle"
                    id="categoriesDropdown"
                    role="button"
                    data-bs-toggle="dropdown"
                    aria-expanded="false"
                  >
                    <a
                      href="/categories"
                      className="btn btn-primary btn-md"
                      style={{
                        backgroundColor: "#b37feb",
                        borderColor: "#b37feb",
                        width: "150px",
                      }}
                    >
                      <UserOutlined className="me-1" /> Profile
                    </a>
                  </a>
                  <ul
                    className="dropdown-menu"
                    aria-labelledby="categoriesDropdown"
                  >
                    <li className="mb-2 mt-2 p-2 DesktopSignIn">
                      <a className="dropdown-item signIn" href="/login">
                        Sign In
                      </a>
                    </li>
                    <li className="MobileSignIn">
                      <a className="dropdown-item" href="/login">
                        Sign in
                      </a>
                    </li>
                    <li>
                      <a className="dropdown-item" href="/register">
                        Register
                      </a>
                    </li>
                    <li>
                      <a className="dropdown-item" href="/my-orders">
                        My Profile
                      </a>
                    </li>
                    <li>
                      <a className="dropdown-item" href="/my-orders">
                        My Orders
                      </a>
                    </li>
                  </ul>
                </li>
                <li className="DesktopCart">
                  <a href="/cart" className="nav-link">
                    <Space size={24}>
                      <Badge count={1}>
                        <Avatar shape="round" icon={<ShoppingCartOutlined />} />
                      </Badge>
                    </Space>
                  </a>
                </li>
                <li className="MobileCart">
                  <a
                    href="/cart"
                    className="btn btn-primary btn-md mt-2"
                    style={{
                      backgroundColor: "#b37feb",
                      borderColor: "#b37feb",
                    }}
                  >
                    <ShoppingCartOutlined className="me-2" />
                    Shopping Cart
                  </a>
                </li>
              </ul>
            </div>
          </nav>
        </div>
      </header>
      {children}
    </div>
  );
};

export default CommonHeader;
