import axios from "axios";
import { toast } from "react-toastify";

export const registerUser = async (inputFields) => {
  try {
    const res = await axios.post(`${import.meta.env.VITE_USERS}/register`, {
      firstName: inputFields.firstName,
      lastName: inputFields.lastName,
      email: inputFields.email,
      phone: inputFields.phone,
      password: inputFields.password,
    });
    if (res.status === 201) {
      toast.success("Registration Successful");
      return true;
    } else {
      toast.error("Registration failed");
      return false;
    }
  } catch (err) {
    toast.error(err.response.data.message);
    throw err;
  }
};

export const loginUser = async (inputFields) => {
  try {
    const res = await axios.post(`${import.meta.env.VITE_USERS}/login`, {
      email: inputFields.email,
      password: inputFields.password,
    });
    return res.data;
  } catch (err) {
    toast.error(err.response.data.message);
    throw err;
  }
};
