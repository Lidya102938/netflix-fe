import React from "react";
import FirstTitle from "../../components/loginSignUpComponents/firstTitle/FirstTitle";
import SecondTitle from "../../components/loginSignUpComponents/secondTitle/SecondTitle";
import CheckButton from "../../components/loginSignUpComponents/checkButton/CheckButton";
import Label from "../../components/label/Label";
import SubmitButton from "../../components/submitButton/SubmitButton";
import Input from "../../components/input/Input";
import { Link } from "react-router-dom";
import "./Login.scss";

const Login = () => {
  return (
    <div className="login">
      <div className="side-image"></div>
      <div className="login-form">
        <form>
          <FirstTitle>Neetflix Review</FirstTitle>
          <h2>Welcome back</h2>
          <SecondTitle>Login to your account</SecondTitle>
          <div className="login-input">
            <Label>Email</Label>
            <Input
              inputClassName={"inputLogin"}
              type="text"
              placeholder={"Email"}
            />
            <Label>Password</Label>
            <Input
              inputClassName={"inputLogin"}
              type="password"
              placeholder={"Password"}
            />
            <div className="login-option">
              <div className="remember-me">
                <CheckButton />
                <p>remember me</p>
              </div>
              <p>forgot password</p>
            </div>
            <SubmitButton>Login Now</SubmitButton>
          </div>
          <Link style={{ textDecoration: "none" }} to="/signup">
            <p>Not registered yet?</p>
          </Link>
        </form>
      </div>
    </div>
  );
};

export default Login;
