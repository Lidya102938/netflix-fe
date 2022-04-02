import React from "react";
import Label from "../../label/Label";
import Input from "../../input/Input";
import SubmitButton from "../../submitButton/SubmitButton";
import "./EditProfil.scss";

const EditProfil = () => {
  return (
    <div className="edit-profil">
      <div className="input-edit">
        <Label>Email</Label>
        <Input
          inputClassName={"profil-input"}
          type="text"
          placeholder={"Email"}
        />

        <Label>Password</Label>
        <Input
          inputClassName={"profil-input"}
          type="password"
          placeholder={"Password"}
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
    </div>
  );
};

export default EditProfil;
