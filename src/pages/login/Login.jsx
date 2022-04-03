import React from "react";
import "./Login.scss";
import FirstTitle from "../../components/loginSignUpComponents/firstTitle/FirstTitle";
import SecondTitle from "../../components/loginSignUpComponents/secondTitle/SecondTitle";
import CheckButton from "../../components/loginSignUpComponents/checkButton/CheckButton";
import Label from "../../components/label/Label";
import SubmitButton from "../../components/submitButton/SubmitButton";
import Input from "../../components/input/Input";
import { Link, useNavigate } from "react-router-dom";
import { useForm } from "react-hook-form";
import API from "../../config/api";

const Login = () => {
  const navigate = useNavigate();
  const { handleSubmit, register } = useForm();

  const onSubmit = async (data) => {
    const result = await API.login(data);
    if (result) {
      console.log(result);
      navigate("/");
    }
  };
  return (
    <div className="login">
      <div className="side-image"></div>
      <div className="login-form">
        <form onSubmit={handleSubmit(onSubmit)}>
          <FirstTitle>Neetflix Review</FirstTitle>
          <h2>Welcome back</h2>
          <SecondTitle>Login to your account</SecondTitle>
          <div className="login-input">
            <Label id="email">Email</Label>
            <Input
              inputClassName={"inputLogin"}
              type="text"
              id="email"
              placeholder={"Email"}
              register={register("email", {
                required: true,
              })}
            />
            <Label id="password">Password</Label>
            <Input
              inputClassName={"inputLogin"}
              type="password"
              id="password"
              placeholder={"Password"}
              register={register("password", {
                required: true,
              })}
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
