import React from "react";
import { Link } from "react-router-dom";
import './EmailCheck.css'
const EmailCheck = () => {
  return (
    <div className="main-div">
      <section>
        <div className="container">
          <div className="card login-card">
            <div className="card-body login-card-body">
              <div className="row">
                <div className="col-lg-6 col-sm-12 login-div">
                  <div className="d-flex  flex-wrap align-items-center">
                    <div className="rounded-circle roundIcon my-3">&nbsp;</div>
                    <h2 className="text-white form-heading">
                      Target More &amp; Influence More Users With KOL
                    </h2>
                    <div className="bordered-text col-lg-8 col-md-12">
                      <p className="text-white mb-0">
                        To get the maximum attention on your product and
                        services, invest in KOL.
                      </p>
                    </div>
                  </div>
                </div>
                <div className="col-lg-6  col-sm-12 login-form">
                  <div className="row align-items-center ">
                    <form>
                      <h2 className="login-heading mb-3">
                        Forgot your password?
                      </h2>
                      <p className="mb-3">
                        Enter your email address below and we'll send you a link
                        to reset your password.
                      </p>
                      <div className="form-group mb-3">
                        <label>Email</label>
                        <span className="astric-span">*</span>
                        <input
                          type="email"
                          id="form2Example17"
                          className="form-control"
                          placeholder="Enter email"
                          name="email"
                        />
                      </div>
                      <div className="d-flex justify-content-between align-items-center mb-3">
                        <button
                          type="submit"
                          className="btn theme-btn btn-lg btn-block mt-6"
                        >
                          Send Reset link
                        </button>
                      </div>
                    </form>
                    <div>
                      <span className="optionText1 text-right">
                        Back to <Link to="/login">Login</Link>
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default EmailCheck;
