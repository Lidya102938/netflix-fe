import React from "react";
import "./Signup.scss";
import FirstTitle from "../../components/loginSignUpComponents/firstTitle/FirstTitle";
import SecondTitle from "../../components/loginSignUpComponents/secondTitle/SecondTitle";
import Label from "../../components/label/Label";
import SubmitButton from "../../components/submitButton/SubmitButton";
import Input from "../../components/input/Input";
import { Link, useNavigate } from "react-router-dom";
import { useForm } from "react-hook-form";
import API from "../../config/api";

const Signup = () => {
  const navigate = useNavigate();
  const {
    handleSubmit,
    register,
    formState: { errors },
  } = useForm();

  const onSubmit = async (data) => {
    const result = await API.signUp(data);
    if (result) {
      console.log(result);
      navigate("/login");
    }
  };
  return (
    <div className="signup">
      <div className="side-image"></div>
      <div className="signup-form">
        <form onSubmit={handleSubmit(onSubmit)}>
          <FirstTitle>Neetflix Review</FirstTitle>
          <SecondTitle>Sign up</SecondTitle>
          <div className="signup-input">
            <Label id="fullname">Full name</Label>
            <Input
              inputClassName={"signupLogin"}
              type="text"
              id="fullname"
              placeholder={"Full name"}
              register={register("fullname", {
                required: true,
              })}
            />
            <Label id="email">Email</Label>
            <Input
              inputClassName={"signupLogin"}
              type="text"
              id="email"
              placeholder={"Email"}
              register={register("email", {
                required: true,
              })}
            />

            <Label id="password">Password</Label>
            <Input
              inputClassName={"signupLogin"}
              type="password"
              id="password"
              placeholder={"Password"}
              register={register("password", {
                required: true,
              })}
            />
            <Label id="conPassword">Confirm Password</Label>
            <Input
              inputClassName={"signupLogin"}
              type="password"
              id="conPassword"
              placeholder={"Confirm Password"}
              register={register("conPassword", {
                required: true,
              })}
            />
            <SubmitButton>Sign Me Up</SubmitButton>
            <Link style={{ textDecoration: "none" }} to="/login">
              <p>Already have an account?</p>
            </Link>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Signup;
