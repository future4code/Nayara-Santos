import { SecurityRounded } from "@mui/icons-material";
import React, { useEffect, useState } from "react";

const Navegacao = () => {
  const [show, setShow] = useState(false)

  useEffect(()=>{
    window.addEventListener('scroll', () => {
      setShow(window.scroll > 100)
    });
  }, [])
  return (
    <div className={`nav-container ${show && "nav-container-black"}`}>
      <img
        className="nav-logo"
        src="https://upload.wikimedia.org/wikipedia/commons/thumb/1/15/Logonfx.png/640px-Logonfx.png"
        alt="Netflix"
      ></img>
      <img
        className="nav-avatar"
        src="https://commons.wikimedia.org/wiki/File:Netflix-avatar.png"
        alt="Pasquadev"
      ></img>
    </div>
  );
}

export default Navegacao;