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
        <div className="container">
          {edit ? (
            <div className="personal-info">
              <h3>Personal information</h3>
              <form className="info">
                {editPassword ? (
                  <>
                    <input
                      type="password"
                      name="password"
                      placeholder="Current Password"
                    />
                    <input type="password" placeholder="New Password" />
                    <input type="password" placeholder="Confirm New Password" />
                    <div>
                      <button type="submit" className="btn">
                        Confirm
                      </button>
                      <button
                        type="reset"
                        className="btn"
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
                    <>
                      <input
                        type="text"
                        name="username"
                        placeholder="First Name"
                      />
                      <input
                        type="text"
                        name="username"
                        placeholder="last Name"
                      />
                    </>
                    <input type="text" name="phone" placeholder="Phone" />
                    <div>
                      <button type="submit" className="btn">
                        Confirm
                      </button>
                      <button
                        type="reset"
                        className="btn"
                        onClick={() => setEdit(false)}
                      >
                        Cancel
                      </button>
                    </div>
                  </>
                )}
              </form>
            </div>
          ) : (
            <>
              <div className="profile-header">
                <div className="profile-details">
                  <div className="imgContainer">
                    <img src="../../../images/avatar.jpg" alt="Profile Image" />
                    <div>
                      <span>
                        <i className="fa-duotone fa-solid fa-camera"></i>
                      </span>
                      <input type="file" />
                    </div>
                  </div>
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
            </>
          )}
        </div>
      </div>
    </>
  );
}

export default Profile;
