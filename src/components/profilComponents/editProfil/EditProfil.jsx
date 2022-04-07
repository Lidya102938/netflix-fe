import "./EditProfil.scss";
import React, { useState, useEffect } from "react";
import Label from "../../label/Label";
import Input from "../../input/Input";
import decode from "jwt-decode";
import { useNavigate } from "react-router-dom";
import SubmitButton from "../../submitButton/SubmitButton";
import API from "../../../config/api";
import { useForm } from "react-hook-form";

const EditProfil = ({ saveAvatar }) => {
  const navigate = useNavigate();
  const { handleSubmit, register } = useForm();
  const [fullNameEdit, setFullNameEdit] = useState("");
  const [emailEdit, setEmailEdit] = useState("");
  const [passwordEdit, setPasswordEdit] = useState("");
  const [dataUser, setDataUser] = useState("");

  const token = localStorage.getItem("token");
  useEffect(async () => {
    if (token) {
      const dataToken = decode(token);
      const result = await API.getOneUser(dataToken.id);
      if (result) {
        setFullNameEdit(result.data.fullName);
        setEmailEdit(result.data.email);
        setPasswordEdit(result.data.password);
        setDataUser(result.data);
      }
    }
  }, []);

  const onSubmit = async () => {
    saveAvatar();
    const result = await API.updateUser(
      { fullName: fullNameEdit, email: emailEdit, password: passwordEdit },
      dataUser.id
    );
    if (result) {
      navigate("/");
    }
  };
  return (
    <div className="edit-profil">
      <form onSubmit={handleSubmit(onSubmit)}>
        <div className="input-edit">
          <Label>Fullname</Label>
          <Input
            value={fullNameEdit}
            inputClassName={"profil-input"}
            type="text"
            placeholder={"Fullname"}
            register={register("fullname", {
              // required: true,
              onChange: (e) => setFullNameEdit(e.target.value),
            })}
          />
          <Label>Email</Label>
          <Input
            value={emailEdit}
            inputClassName={"profil-input"}
            type="text"
            placeholder={"Email"}
            register={register("email", {
              required: true,
              onChange: (e) => setEmailEdit(e.target.value),
            })}
          />
          <Label>Password</Label>
          <Input
            value={passwordEdit}
            inputClassName={"profil-input"}
            type="password"
            placeholder={"Password"}
            register={register("password", {
              required: true,
              onChange: (e) => setPasswordEdit(e.target.value),
            })}
          />

          <Label>Confirm password</Label>
          <Input
            inputClassName={"profil-input"}
            type="password"
            placeholder={"Confirm password"}
          />
        </div>
        <div className="save-profil">
          <SubmitButton>Simpan Profil</SubmitButton>
        </div>
      </form>
    </div>
  );
};

export default EditProfil;
