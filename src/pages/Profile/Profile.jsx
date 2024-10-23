import "./Profile.css";
import Header from "../../components/Header/Header";
import Navbar from "../../components/Navbar/Navbar";
import { useState, useEffect, useContext } from "react";
import { toast } from "react-toastify";
import { useNavigate } from "react-router";
import axios from "axios";
import { LoginContext } from "../../context/Login";

function Profile() {
  const { setCookie, token, decodeToken } = useContext(LoginContext);
  const [edit, setEdit] = useState(false);
  const [editPassword, setEditPassword] = useState(false);
  const [error, setError] = useState("");
  const [image, setImage] = useState(null);
  const [inputFields, setInputFields] = useState({
    firstName: "",
    lastName: "",
    phone: "",
    currentPassword: "",
    newPassword: "",
    confirmNewPassword: "",
  });
  const navigate = useNavigate();

  useEffect(() => {
    if (!decodeToken) {
      navigate("/login");
      return;
    }
  }, [decodeToken, navigate]);

  const handleChange = (e) => {
    setInputFields({ ...inputFields, [e.target.name]: e.target.value });
  };

  const handleChangePassword = async (e) => {
    e.preventDefault();
    const passFormat = /^(?=.*[!@#$%^&*()_+{}\[\]:;<>,.?~-]).{6,}$/;
    if (!passFormat.test(inputFields.newPassword)) {
      setError("Password must be at least 6 characters and contain a symbol");
      return;
    }
    if (
      inputFields.newPassword.trim() !== inputFields.confirmNewPassword.trim()
    ) {
      setError("Passwords do not match");
      return;
    }
    setError("");
    try {
      const res = await axios.post(
        `${import.meta.env.VITE_USERS}/changePassword`,
        {
          id: decodeToken._id,
          currentPassword: inputFields.currentPassword,
          newPassword: inputFields.newPassword,
        }
      );
      if (res.status === 202) {
        toast.success(res.data.message);
        setEdit(false);
      }
    } catch (err) {
      toast.error(err.response.data.message);
    }
  };
  const handleUpdateProfile = async (e) => {
    e.preventDefault();
    if (
      (inputFields.firstName && inputFields.firstName.length < 2) ||
      (inputFields.lastName && inputFields.lastName.length < 2)
    ) {
      setError(
        "First and Last names must be more than 2 characters if provided"
      );
      return;
    }
    const formData = new FormData();
    formData.append("id", decodeToken._id);
    formData.append("firstName", inputFields.firstName);
    formData.append("lastName", inputFields.lastName);
    formData.append("phone", inputFields.phone);

    if (image) {
      formData.append("avatar", image);
    }

    try {
      const res = await axios.patch(
        `${import.meta.env.VITE_USERS}/updateUserProfile`,
        formData,
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );

      if (res.status === 202) {
        const token = res.data.token;
        setCookie("token", token, { path: "/" });
        toast.success("Profile updated successfully");
        setEdit(false);
      } else {
        toast.error("Failed to update profile");
      }
    } catch (err) {
      toast.error(err.response.data.message);
    }
  };

  const handleImage = (e) => {
    setImage(e.target.files[0]);
  };

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
              setImage(null);
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
              {editPassword ? (
                <form className="info" onSubmit={handleChangePassword}>
                  <>
                    <input
                      type="password"
                      name="currentPassword"
                      placeholder="Current Password"
                      onChange={handleChange}
                    />
                    <input
                      type="password"
                      name="newPassword"
                      placeholder="New Password"
                      onChange={handleChange}
                    />
                    <input
                      type="password"
                      name="confirmNewPassword"
                      placeholder="Confirm New Password"
                      onChange={handleChange}
                    />
                    {error && <p>{error}</p>}
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
                </form>
              ) : (
                <form className="info" onSubmit={handleUpdateProfile}>
                  <input
                    type="text"
                    name="firstName"
                    placeholder="First Name"
                    onChange={handleChange}
                  />
                  <input
                    type="text"
                    name="lastName"
                    placeholder="last Name"
                    onChange={handleChange}
                  />
                  <input
                    type="text"
                    name="phone"
                    placeholder="phone"
                    onChange={handleChange}
                  />
                  <label
                    htmlFor="avatar"
                    className={`fileUpload ${image ? "uploaded" : ""}`}
                  >
                    Upload an Image
                  </label>
                  <input
                    type="file"
                    id="avatar"
                    name="avatar"
                    accept="image/*"
                    placeholder="Profile Image"
                    onChange={handleImage}
                  />
                  {error && <p>{error}</p>}
                  <div>
                    <button type="submit" className="btn">
                      Confirm
                    </button>
                    <button
                      type="reset"
                      className="btn"
                      onClick={() => {
                        setEdit(false), setImage(null);
                      }}
                    >
                      Cancel
                    </button>
                  </div>
                </form>
              )}
            </div>
          ) : (
            <>
              <div className="profile-header">
                <div className="profile-details">
                  <div className="imgContainer">
                    <img
                      src={
                        decodeToken
                          ? decodeToken.avatar
                            ? decodeToken.avatar
                            : "../../../images/avatar.png"
                          : "../../../images/avatar.png"
                      }
                      alt="Profile Image"
                    />
                    <span>
                      <i className="fa-duotone fa-solid fa-camera"></i>
                    </span>
                  </div>
                  <div>
                    <h2>{decodeToken ? decodeToken.name : "Username"}</h2>
                    <p>
                      {decodeToken
                        ? decodeToken.role === "USER"
                          ? "Member"
                          : "Admin"
                        : ""}
                    </p>
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
                    <p>
                      {decodeToken
                        ? decodeToken.name.split(" ")[0]
                        : "Username"}
                    </p>
                  </div>
                  <div>
                    <p>
                      <strong>Last Name</strong>
                    </p>
                    <p>
                      {decodeToken
                        ? decodeToken.name.split(" ")[1]
                        : "Username"}
                    </p>
                  </div>
                  <div>
                    <p>
                      <strong>Email address</strong>
                    </p>
                    <p>{decodeToken ? decodeToken.email : "Email"}</p>
                  </div>
                  <div>
                    <p>
                      <strong>Phone</strong>
                    </p>
                    <p>
                      {decodeToken
                        ? `(+20) ${decodeToken.phone.slice(1)}`
                        : "Phone"}
                    </p>
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
