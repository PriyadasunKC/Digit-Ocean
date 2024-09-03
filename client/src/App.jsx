import { BrowserRouter, Route, Routes } from "react-router-dom";
import HomePage from "./components/HomePage/HomePage";
import CommonHeader from "./components/CommonHeader/CommonHeader";
import Categories from "./components/Categories/Categories";
import Login from "./components/Authentication/Login/Login";
import Register from "./components/Authentication/Register/Register";
import MyOrders from "./components/MyOrders/MyOrders";
import ForgetPassword from "./components/Authentication/ForgetPassword/ForgetPassword";
import Otp from "./components/Authentication/OTP/OTP";
import ResetPassword from "./components/Authentication/ResetPassword/ResetPassword";
import Cart from "./components/Cart/Cart";
import MyProfile from "./components/MyProfile/MyProfile";
import "bootstrap/dist/css/bootstrap.min.css";

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<HomePage />} />
        </Routes>
        <Routes>
          <Route path="/common" element={<CommonHeader />} />
        </Routes>
        <Routes>
          <Route path="/categories" element={<Categories />} />
        </Routes>
        <Routes>
          <Route path="/login" element={<Login />} />
        </Routes>
        <Routes>
          <Route path="/register" element={<Register />} />
        </Routes>
        <Routes>
          <Route path="/my-orders" element={<MyOrders />} />
        </Routes>
        <Routes>
          <Route path="/forget-password" element={<ForgetPassword />} />
        </Routes>
        <Routes>
          <Route path="/otp" element={<Otp />} />
        </Routes>
        <Routes>
          <Route path="/reset-password" element={<ResetPassword />} />
        </Routes>
        <Routes>
          <Route path="/cart" element={<Cart />} />
        </Routes>
        <Routes>
          <Route path="/my-profile" element={<MyProfile />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
