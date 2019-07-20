import React, { Component } from 'react';
import '../Landing.css';
import '../App.css';

const Register = props => {
  const { toggleForm } = props;
  return (
    <div className="container login-register">
      <div className="row">
        <div className="col-sm-9 col-md-7 col-lg-5 mx-auto">
          <div className="card card-signin my-5">
            <div className="card-body">
              <h5 className="card-title text-center">Sign In</h5>
              <form className="form-signin">
                <div className="form-label-group">
                  <input
                    type="email"
                    id="inputEmail"
                    className="form-control"
                    placeholder="Email address"
                    required
                    autofocus
                  />
                  <label for="inputEmail">Email address</label>
                </div>

                <div className="form-label-group">
                  <input
                    type="password"
                    id="inputPassword"
                    className="form-control"
                    placeholder="Password"
                    required
                  />
                  <label for="inputPassword">Password</label>
                </div>
                <div className="form-label-group">
                  <input
                    type="password"
                    id="inputPassword"
                    className="form-control"
                    placeholder="Password"
                    required
                  />
                  <label for="inputPassword">Confirm password</label>
                </div>

                <button
                  className="btn btn-lg btn-block text-uppercase"
                  type="submit"
                >
                  Sign up
                </button>
                <hr className="my-4" />
                <button
                  onClick={toggleForm}
                  class="btn btn-lg btn-block text-uppercase"
                >
                  Already have an account? Sign in here.
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Register;
