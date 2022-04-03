import "./Profil.scss";
import decode from "jwt-decode";
import React, { useEffect, useState } from "react";
import Navbar from "../../components/navbar/Navbar";
import Footer from "../../components/footer/Footer";
import PhotoProfil from "../../components/profilComponents/photoProfil/PhotoProfil";
import EditProfil from "../../components/profilComponents/editProfil/EditProfil";
import API from "../../config/api";

const Profil = () => {
  const [dataUser, setDataUser] = useState("");

  const token = localStorage.getItem("token");
  useEffect(async () => {
    if (token) {
      const dataToken = decode(token);
      const result = await API.getOneUser(dataToken.id);
      if (result) {
        setDataUser(result.data);
      }
    }
  }, []);
  return (
    <>
      <Navbar className={"profilActive"} />
      <div className="profil">
        <div className="profil-background">
          <img src="https://i.ibb.co/RhNSKbM/profilbg.png" alt="" />
        </div>

        <div className="profil-box">
          <div className="profil-info">
            <h1>
              <span>|</span> Akun saya
            </h1>
            <div className="update-profil">
              <PhotoProfil />
              <EditProfil
                fullname={dataUser.fullName}
                email={dataUser.email}
                password={dataUser.password}
              />
            </div>
          </div>
        </div>
        <Footer />
      </div>
    </>
  );
};

export default Profil;
