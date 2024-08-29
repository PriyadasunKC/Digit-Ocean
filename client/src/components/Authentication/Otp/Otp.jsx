import { Form } from "antd";
import { InputOTP } from "antd-input-otp";
import { useNavigate } from "react-router-dom";

const Otp = () => {
  const [form] = Form.useForm();

  const navigate = useNavigate();

  const handleVerifyOtp = () => {
    console.log("Continue button clicked");
    navigate("/reset-password");
  };

  const handleFinish = (values) => {
    console.log("Received values of form: ", values);
  }


  return (
    <div className="container1">
      <div className="content">
        <div className="formContainer">
          <div className="LoginTitle">
            {" "}
            <h1>Enter OTP</h1>{" "}
            <a href="/">
              <img className="LoginLogo" src="/public/logo.png" alt="lock" />
            </a>
          </div>
          <div className="LoginContent">
            <form className="LoginForm">
              <div className="form-group">
                <Form onFinish={handleVerifyOtp} form={form}>
                  <Form.Item name="otp">
                    <InputOTP autoSubmit={form} inputType="numeric" />
                  </Form.Item>
                </Form>
              </div>
              <button
                type="submit"
                className="btn btn-primary"
                onClick={handleVerifyOtp}
              >
                Verify OTP
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Otp;
