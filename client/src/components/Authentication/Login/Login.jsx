import "./Login.css";

const Login = () => {
  return (
    <div className="container1">
      <div className="content">
        <div className="formContainer">
          <div className="LoginTitle">
            {" "}
            <h1>Login</h1>{" "}
            <a href="/">
              <img className="LoginLogo" src="/public/logo.png" alt="lock" />
            </a>
          </div>
          <div className="LoginContent">
            <form className="LoginForm">
              <div className="form-group">
                <input
                  type="email"
                  className="form-control FormInput"
                  id="email"
                  placeholder="Enter email"
                />
              </div>
              <div className="form-group">
                <input
                  type="password"
                  className="form-control FormInput"
                  id="password"
                  placeholder="Password"
                />
              </div>

              <div className="Links">
                <div className="form-group">
                  <a href="/forget-password">Forgot Password?</a>
                </div>
                <div className="form-group">
                  <a href="/register">Register</a>
                </div>
              </div>

              <button type="submit" className="btn btn-primary">
                Login
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
