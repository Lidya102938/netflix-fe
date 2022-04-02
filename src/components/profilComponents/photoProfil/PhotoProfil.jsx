import React from "react";
import { AiOutlineCloudUpload } from "react-icons/ai";

import "./PhotoProfil.scss";

const PhotoProfil = () => {
  return (
    <div className="profil-img">
      <img
        src="https://cdn-icons-png.flaticon.com/512/3135/3135715.png"
        alt="err"
      />
      <div className="file-upload">
        <label for="fusk">
          <AiOutlineCloudUpload className="file-icon" /> Upload Foto
        </label>

        <input id="fusk" type="file" name="photo" />
      </div>
    </div>
  );
};

export default PhotoProfil;
