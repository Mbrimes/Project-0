import React, { useState, useRef } from "react";
import Form from "react-validation/build/form";
import Input from "react-validation/build/input";
import CheckButton from "react-validation/build/button";
import { isEmail } from "validator";
import { MdVisibility, MdVisibilityOff } from 'react-icons/md';

import AuthService from "../../services/auth.service";

const required = (value) => {
  if (!value) {
    return (
      <div className="alert alert-danger" role="alert">
        This field is required!
      </div>
    );
  }
};

const vfirstname = (value) => {
  if (value.length < 3 || value.length > 30) {
    return (
      <div className="alert alert-danger" role="alert">
        Firstname must be between 3 and 20 characters.
      </div>
    );
  }
};

const vlastname = (value) => {
  if (value.length < 3 || value.length > 30) {
    return (
      <div className="alert alert-danger" role="alert">
        Lastname must be between 3 and 20 characters.
      </div>
    );
  }
};

const validEmail = (value) => {
  if (!isEmail(value)) {
    return (
      <div className="alert alert-danger" role="alert">
        This is not a valid email.
      </div>
    );
  }
};

const vusername = (value) => {
  if (value.length < 3 || value.length > 20) {
    return (
      <div className="alert alert-danger" role="alert">
        The username must be between 3 and 20 characters.
      </div>
    );
  }
}; 

const Register = () => {
  const form = useRef();
  const checkBtn = useRef();

  const [firstname, setFirstname] = useState("");
  const [lastname, setLastname] = useState("");
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [successful, setSuccessful] = useState(false);
  const [message, setMessage] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [confirmPassword, setConfirmPassword] = useState("");
  const [passwordError, setPasswordError] = useState("");
  const [confirmPasswordError, setConfirmPasswordError] = useState("");

    const onChangeFirstname = (e) => {
    const firstname = e.target.value;
    setFirstname(firstname);
  };

  const onChangeLastname = (e) => {
    const lastname = e.target.value;
    setLastname(lastname);
  };


    const onChangeUsername = (e) => {
    const username = e.target.value;
    setUsername(username);
  };

  const onChangeEmail = (e) => {
    const email = e.target.value;
    setEmail(email);
  };

  const onChangePassword = (e) => {
    const password = e.target.value;
    setPassword(password);
  };

   const handleShowPassword = (e) =>
    setShowPassword((prevShowPassword) => !prevShowPassword);

    const onChangecPassword = (e) => {
      const confirmPassword = e.target.value;
    setConfirmPassword(confirmPassword);
  };

  const passwordvalidations = (e) => {

     const passwordInputValue = e.target.value.trim();
     const passwordInputFieldName = e.target.name;
     //for password
  if(passwordInputFieldName ==='password'){
    const uppercaseRegExp   = /(?=.*?[A-Z])/;
    const lowercaseRegExp   = /(?=.*?[a-z])/;
    const digitsRegExp      = /(?=.*?[0-9])/;
    const specialCharRegExp = /(?=.*?[#?!@$%^&*-])/;
    const minLengthRegExp   = /.{6,}/;
    const passwordLength =      passwordInputValue.length;
    const uppercasePassword =   uppercaseRegExp.test(passwordInputValue);
    const lowercasePassword =   lowercaseRegExp.test(passwordInputValue);
    const digitsPassword =      digitsRegExp.test(passwordInputValue);
    const specialCharPassword = specialCharRegExp.test(passwordInputValue);
    const minLengthPassword =   minLengthRegExp.test(passwordInputValue);
    let errMsg ="";
    if(passwordLength===0){
            errMsg="Password is empty";
    }else if(!uppercasePassword){
            errMsg="At least one Uppercase";
    }else if(!lowercasePassword){
            errMsg="At least one Lowercase";
    }else if(!digitsPassword){
            errMsg="At least one digit";
    }else if(!specialCharPassword){
            errMsg="At least one Special Characters";
    }else if(!minLengthPassword){
            errMsg="At least minumum 6 characters";
    }else{
        errMsg="";
    }
    setPasswordError(errMsg);
    }   
};

//for confirm password 
const confirmpass= (e)=>{
            
      const passwordInputFieldName = e.target.name;
     if(passwordInputFieldName=== "confirmPassword" || (passwordInputFieldName==="password" && confirmPassword.length>0) ){
            
        if(confirmPassword!==password)
        {
        setConfirmPasswordError("Confirm password is not matched");
        }else{
        setConfirmPasswordError("");
        }
        
    }
}

  const handleRegister = (e) => {
    e.preventDefault();

    setMessage("");
    setSuccessful(false);

    form.current.validateAll();

    if (checkBtn.current.context._errors.length === 0 ){

     if(password !== confirmPassword){
      setMessage("The passwords doesn't match");
      return false;
    } else { setMessage("");}

      AuthService.register(firstname, lastname, username, email, password).then(
        (response) => {
          setMessage(response.data.message);
          setSuccessful(true);
        },
        (error) => {
          const resMessage =
            (error.response &&
              error.response.data &&
              error.response.data.message) ||
            error.message ||
            error.toString();

          setMessage(resMessage);
          setSuccessful(false);
        }
      );
    }
  };

  return (
    <div className="col-md-12">
      <div className="card card-container">
         <h1>Sign Up to Blookify</h1>

        <Form onSubmit={handleRegister} ref={form}>
          {!successful && (
            <div>
              <div className="form-group">
                <Input 
                  type="text"
                  className="form-control"
                   placeholder="First Name*"
                  name="firstname"
                  value={firstname}
                  onChange={onChangeFirstname}
                  validations={[required, vfirstname]}
                />
              </div>

             <div className="form-group"> 
                <Input 
                  type="text"
                  className="form-control"
                   placeholder="Last Name*"
                  name="lastname"
                  value={lastname}
                  onChange={onChangeLastname}
                  validations={[required, vlastname]}
                />
              </div>

              <div className="form-group"> 
                <Input 
                  type="text"
                  className="form-control"
                   placeholder="UserName*"
                  name="username"
                  value={username}
                  onChange={onChangeUsername}
                  validations={[required, vusername]}
                />
              </div>

              <div className="form-group">    
                <Input
                  type="text"
                  className="form-control"
                   placeholder="Email*"
                  name="email"
                  value={email}
                  onChange={onChangeEmail}
                  validations={[required, validEmail]}
                />
              </div>

              <div className="form-group"> 
                <Input
                   type={showPassword ? 'text' : 'password'}
                  className="form-control"
                  placeholder="Password*"
                  name="password"
                  value={password}
                  onChange={onChangePassword}
                  onKeyUp={passwordvalidations}
                  validations={[required]}
                />

                <i className="show-password" onClick={handleShowPassword}>
                  {showPassword ? (
                    <MdVisibility color="#7f5539" size="16px" />
                  ) : (
                    <MdVisibilityOff color="#7f5539" size="16px" />
                  )}
                </i>
                 <p className="text-danger">{passwordError}</p>
              </div>
              <div className="">
                 <Input
                   type={showPassword ? 'text' : 'password'}
                  className="form-control"
                  placeholder="Confirm Password*"
                  name="password"
                  value={confirmPassword}
                  onChange={onChangecPassword}
                  onKeyUp={confirmpass}
                  validations={[required]}
                />
                <i className="show-password" onClick={handleShowPassword}>
                  {showPassword ? (
                    <MdVisibility color="#7f5539" size="16px" />
                  ) : (
                    <MdVisibilityOff color="#7f5539" size="16px" />
                  )}
                </i>
                <p className="text-danger">{confirmPasswordError}</p>
              </div>

              <div className="form-group">
                <button className="btn btn-primary btn-block">Sign Up</button>
              </div>
            </div>
          )}

          {message && (
            <div className="form-group">
              <div
                className={
                  successful ? "alert alert-success" : "alert alert-danger"
                }
                role="alert"
              >
                {message}
              </div>
            </div>
          )}
          <CheckButton style={{ display: "none" }} ref={checkBtn} />
        </Form>
      </div>
    </div>
  );
};

export default Register;