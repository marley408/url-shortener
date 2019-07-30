import React, { useState, useContext } from 'react';
import { UserContext } from './UserContext';
import '../Landing.css';
import '../App.css';
import { Redirect } from 'react-router';

const Login = ({ toggleForm }) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [successfulLogin, setSuccessfulLogin] = useState(false);
  const { setId, setGlobalName } = useContext(UserContext);

  const clearForm = () => {
    setEmail('');
    setPassword('');
  };

  const signInBtn = e => {
    if (email === '' && password === '') {
      return;
    } else {
      fetch('/api/user/login', {
        mode: 'cors',
        credentials: 'include',
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
          // 'auth-token': localStorage.getItem('token')
          // 'Content-Type': 'application/x-www-form-urlencoded',
        },
        body: JSON.stringify({
          email: email,
          password: password
        })
      })
        .then(res => res.json())
        .then(data => {
          clearForm();
          if (data.token) {
            localStorage.setItem('token', data.token);
            setSuccessfulLogin(true);
            setId(data.userId);
            setGlobalName(data.userName);
          }
        })
        .catch(err => {
          alert('email or password is invalid');
        });
    }
  };

  if (successfulLogin) {
    return <Redirect to="/home" />;
  }

  return (
    <div className="container login-register">
      <div className="row">
        <div className="col-sm-9 col-md-7 col-lg-5 mx-auto">
          <div className="card card-signin my-5">
            <div className="card-body">
              <h5 className="card-title text-center">Sign In</h5>
              <form
                onSubmit={e => {
                  e.preventDefault();
                  signInBtn();
                }}
                className="form-signin"
              >
                <div className="form-label-group">
                  <input
                    onChange={e => {
                      setEmail(e.target.value);
                    }}
                    type="email"
                    id="inputEmail"
                    className="form-control"
                    placeholder="Email address"
                    required
                    autoFocus
                  />
                  <label htmlFor="inputEmail">Email address</label>
                </div>

                <div className="form-label-group">
                  <input
                    onChange={e => {
                      setPassword(e.target.value);
                    }}
                    type="password"
                    id="inputPassword"
                    className="form-control"
                    placeholder="Password"
                    required
                  />
                  <label htmlFor="inputPassword">Password</label>
                </div>

                <button
                  className="btn btn-lg btn-block text-uppercase"
                  type="submit"
                >
                  Sign in
                </button>
                <hr className="my-4" />
                <button
                  onClick={e => {
                    e.preventDefault();
                    toggleForm();
                  }}
                  className="btn btn-lg btn-google btn-block text-uppercase"
                >
                  No account? Register here.
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
