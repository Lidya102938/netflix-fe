import "./Profil.scss";
import React from "react";
import Navbar from "../../components/navbar/Navbar";
import Footer from "../../components/footer/Footer";
import PhotoProfil from "../../components/profilComponents/photoProfil/PhotoProfil";
import EditProfil from "../../components/profilComponents/editProfil/EditProfil";

const Profil = () => {
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
              <EditProfil />
            </div>
          </div>
        </div>
        <Footer />
      </div>
    </>
  );
};

export default Profil;
