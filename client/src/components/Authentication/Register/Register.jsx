import "./Register.css";

const Register = () => {
  return (
    <div className="container1">
      <div className="content">
        <div className="formContainer">
          <div className="RegisterTitle">
            {" "}
            <h1>Register</h1>{" "}
            <a href="/">
              <img className="RegisterLogo" src="/public/logo.png" alt="lock" />
            </a>
          </div>
          <div className="RegisterContent">
            <form className="RegisterForm">
              <div className="form-group">
                <input
                  type="text"
                  className="form-control FormInput"
                  id="name"
                  placeholder="Enter name"
                />
              </div>
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
              <div className="form-group">
                <input
                  type="password"
                  className="form-control FormInput"
                  id="password"
                  placeholder="Confirm Password"
                />
              </div>
              <div className="Links">
                <div className="form-group">
                  <a href="/login">Sign in</a>
                </div>
              </div>

              <button type="submit" className="btn btn-primary">
                Register
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Register;
