import React from "react";
import "./Admin.css";
import Header from "../../components/Header/Header";
import { useNavigate } from "react-router";
import Cradmov from "../../components/Add-Card-mov/Cradmov";
// import Card from "../../components/Card/Card";

function Admin() {
  const navigate = useNavigate();
  return (
    <div className="admin">
      <Header name="Admin" />
      <div className="btns">
        <button className="btn" onClick={() => navigate("/create")}>
          Create Movie
        </button>

        <button className="btn">Update Movie</button>
      </div>



      <div className="admin-container">
        <div className="info">
          <h5 className="user">8</h5>
          <h5 className="mov">10</h5>
        </div>

        <div className="admin-card">
          <Cradmov/>
          <Cradmov/>
          <Cradmov/>
         
        </div>
      </div>
    </div>
  );
}

export default Admin;
