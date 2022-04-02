import React from "react";
import FirstTitle from "../../components/loginSignUpComponents/firstTitle/FirstTitle";
import SecondTitle from "../../components/loginSignUpComponents/secondTitle/SecondTitle";
import Label from "../../components/label/Label";
import SubmitButton from "../../components/submitButton/SubmitButton";
import Input from "../../components/input/Input";
import { Link } from "react-router-dom";
import "./Signup.scss";

const Signup = () => {
  return (
    <div className="signup">
      <div className="side-image"></div>
      <div className="signup-form">
        <form>
          <FirstTitle>Neetflix Review</FirstTitle>
          <SecondTitle>Sign up</SecondTitle>
          <div className="signup-input">
            <Label>Email</Label>
            <Input
              inputClassName={"signupLogin"}
              type="text"
              placeholder={"Email"}
            />
            <Label>Full name</Label>
            <Input
              inputClassName={"signupLogin"}
              type="text"
              placeholder={"Full name"}
            />
            <Label>Password</Label>
            <Input
              inputClassName={"signupLogin"}
              type="password"
              placeholder={"Password"}
            />
            <Label>Confirm Password</Label>
            <Input
              inputClassName={"signupLogin"}
              type="password"
              placeholder={"Confirm Password"}
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
