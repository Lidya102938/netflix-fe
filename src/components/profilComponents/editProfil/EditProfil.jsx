import "./EditProfil.scss";
import React, { useState } from "react";
import Label from "../../label/Label";
import Input from "../../input/Input";
import SubmitButton from "../../submitButton/SubmitButton";

const EditProfil = (props) => {
  const { fullname, email, password } = props;
  const [fullnameEdit, setFullnameEdit] = useState(fullname);
  const [emailEdit, setEmailEdit] = useState(email);
  const [passwordEdit, setPasswordEdit] = useState(password);
  console.log(fullname);
  const onSubmit = () => {};
  return (
    <div className="edit-profil">
      <div className="input-edit">
        <Label>Fullname</Label>
        <Input
          value={fullnameEdit}
          inputClassName={"profil-input"}
          type="text"
          placeholder={"Fullname"}
        />
        <Label>Email</Label>
        <Input
          value={emailEdit}
          inputClassName={"profil-input"}
          type="text"
          placeholder={"Email"}
        />
        <Label>Password</Label>
        <Input
          value={passwordEdit}
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
