import React, { useState } from "react";
import Form from "react-validation/build/form";
import Input from "react-validation/build/input";
import CheckButton from "react-validation/build/button";

import AuthService from "../services/auth.service";

import { withRouter } from '../common-router';

const required = value => {
  if (!value) {
    return (
      <div className="alert alert-danger" role="alert">
        This field is required!
      </div>
    );
  }
};

const Login = (props) => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);
  const [message, setMessage] = useState("");


  const onChangeUsername = e => {
    setUsername(e.target.value)
  };

  const onChangePassword = e => {
    setPassword(e.target.value)
  };

  const handleLogin = e => {
    e.preventDefault();

    setMessage({message: ""}),
    setLoading({loading: true})

    form =()=> validateAll();

    if (this.checkBtn.context._errors.length === 0 ){
      AuthService.login({username}, {password}).then(
        () => {
          this.props.router.navigate("/profile");
          window.location.reload();
        },
        error => {
          const resMessage =
            (error.response &&
              error.response.data &&
              error.response.data.message) ||
            error.message ||
            error.toString();

              setMessage({message: resMessage}),
              setLoading({loading: false});
        }
        );
    } else{setLoading({loading: false})}
  }
  // constructor(props) {
  //   super(props);
  //   this.handleLogin = this.handleLogin.bind(this);
  //   this.onChangeUsername = this.onChangeUsername.bind(this);
  //   this.onChangePassword = this.onChangePassword.bind(this);

  //   this.state = {
  //     username: "",
  //     password: "",
  //     loading: false,
  //     message: ""
  //   };
  // }

  // onChangeUsername(e) {
  //   this.setState({
  //     username: e.target.value
  //   });
  // }

  // onChangePassword(e) {
  //   this.setState({
  //     password: e.target.value
  //   });
  // }

  // handleLogin(e) {
  //   e.preventDefault();

  //   this.setState({
  //     message: "",
  //     loading: true
  //   });

  //   this.form.validateAll();

  //   if (this.checkBtn.context._errors.length === 0) {
  //     AuthService.login(this.state.username, this.state.password).then(
  //       () => {
  //         this.props.router.navigate("/profile");
  //         window.location.reload();
  //       },
  //       error => {
  //         const resMessage =
  //           (error.response &&
  //             error.response.data &&
  //             error.response.data.message) ||
  //           error.message ||
  //           error.toString();

  //         this.setState({
  //           loading: false,
  //           message: resMessage
  //         });
  //       }
  //     );
  //   } else {
  //     this.setState({
  //       loading: false
  //     });
  //   }
  // }
 
    return (
      <div className="col-md-12">
        <div className="card card-container">
          <img
            src="//ssl.gstatic.com/accounts/ui/avatar_2x.png"
            alt="profile-img"
            className="profile-img-card"
          />

          <Form
            onSubmit={handleLogin}
            ref={c => {
              {form} = c;
            }}
          >
            <div className="form-group">
              <label htmlFor="username">Username</label>
              <Input
                type="text"
                className="form-control"
                name="username"
                value={username}
                onChange={onChangeUsername}
                validations={[required]}
              />
            </div>

            <div className="form-group">
              <label htmlFor="password">Password</label>
              <Input
                type="password"
                className="form-control"
                name="password"
                value={password}
                onChange={onChangePassword}
                validations={[required]}
              />
            </div>

            <div className="form-group">
              <button
                className="btn btn-primary btn-block"
                disabled={loading}
              >
                {loading && (
                  <span className="spinner-border spinner-border-sm"></span>
                )}
                <span>Login</span>
              </button>
            </div>

            {message && (
              <div className="form-group">
                <div className="alert alert-danger" role="alert">
                  {message}
                </div>
              </div>
            )}
            <CheckButton
              style={{ display: "none" }}
              ref={c => {
                this.checkBtn = c;
              }}
            />
          </Form>
        </div>
      </div>
    );
}

export default withRouter(Login);