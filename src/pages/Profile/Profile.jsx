import { useState } from "react";
import Header from "../../components/Header/Header";
import Navbar from "../../components/Navbar/Navbar";
import "./Profile.css";

function Profile() {
  const [edit, setEdit] = useState(false);
  const [editPassword, setEditPassword] = useState(false);
  return (
    <>
      <Navbar />
      <Header name="My account" />
      <div className="profile">
        <div className="toggle-container">
          <span
            className={!edit ? "active" : "inactive"}
            onClick={() => {
              setEdit(false);
              setEditPassword(false);
            }}
          >
            Profile
          </span>
          <span className="space">|</span>
          <span
            className={edit ? "active" : "inactive"}
            onClick={() => setEdit(true)}
          >
            Edit
          </span>
        </div>
        {edit ? (
          <div className="container">
            <div className="personal-info">
              <h3>Personal information</h3>
              <form className="infoGrid">
                {editPassword ? (
                  <>
                    <input
                      type="password"
                      name="password"
                      placeholder="Current Password"
                      className="auth-input"
                    />
                    <input
                      type="password"
                      placeholder="New Password"
                      className="auth-input"
                    />
                    <input
                      type="password"
                      placeholder="Confirm New Password"
                      className="auth-input"
                    />
                    <div>
                      <button type="submit" className="auth-button">
                        Confirm
                      </button>
                      <button
                        type="reset"
                        className="auth-button"
                        onClick={() => {
                          setEdit(false);
                          setEditPassword(false);
                        }}
                      >
                        Cancel
                      </button>
                    </div>
                  </>
                ) : (
                  <>
                    <div>
                      <input
                        type="text"
                        name="username"
                        placeholder="First Name"
                        className="auth-input"
                      />
                      <input
                        type="text"
                        name="username"
                        placeholder="last Name"
                        className="auth-input"
                      />
                    </div>
                    <input
                      type="text"
                      name="phone"
                      placeholder="Phone"
                      className="auth-input"
                    />
                    <div>
                      <button type="submit" className="auth-button">
                        Confirm
                      </button>
                      <button
                        type="reset"
                        className="auth-button"
                        onClick={() => setEdit(false)}
                      >
                        Cancel
                      </button>
                    </div>
                  </>
                )}
              </form>
            </div>
          </div>
        ) : (
          <div className="container">
            <div className="profile-header">
              <div className="profile-details">
                <img
                  src="../../../img-about/team-03.webp"
                  alt="Profile Image"
                  className="profile-image"
                />
                <div>
                  <h2>Khaled Sherif</h2>
                  <p>Member</p>
                </div>
              </div>
              <button className="edit-btn" onClick={() => setEdit(true)}>
                ✏️ Edit
              </button>
            </div>
            <div className="personal-info">
              <h3>Personal information</h3>
              <div className="info-grid">
                <div>
                  <p>
                    <strong>First Name</strong>
                  </p>
                  <p>Khaled</p>
                </div>
                <div>
                  <p>
                    <strong>Last Name</strong>
                  </p>
                  <p>Sherif</p>
                </div>
                <div>
                  <p>
                    <strong>Email address</strong>
                  </p>
                  <p>Khaled@gmail.com</p>
                </div>
                <div>
                  <p>
                    <strong>Phone</strong>
                  </p>
                  <p>(2) 1000690444</p>
                </div>
                <div>
                  <div>
                    <p>
                      <strong>Password</strong>
                    </p>
                    <p>Change password</p>
                  </div>
                  <button
                    className="edit-btn"
                    onClick={() => {
                      setEdit(true);
                      setEditPassword(true);
                    }}
                  >
                    ✏️ Edit
                  </button>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </>
  );
}

export default Profile;
