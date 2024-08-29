const ResetPassword = () => {
  return (
    <div className="container1">
      <div className="content">
        <div className="formContainer">
          <div className="RegisterTitle">
            {" "}
            <h1>Reset Password</h1>{" "}
            <a href="/">
              <img className="RegisterLogo" src="/public/logo.png" alt="lock" />
            </a>
          </div>
          <div className="RegisterContent">
            <form className="RegisterForm">
              <div className="form-group">
                <input
                  type="password"
                  className="form-control FormInput"
                  id="password"
                  placeholder="New Password"
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

              <button type="submit" className="btn btn-primary">
                Reset
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ResetPassword;
