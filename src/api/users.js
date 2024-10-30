import axios from "axios";
import { toast } from "react-toastify";

export const updatePassword = async (data, token) => {
  try {
    const res = await axios.post(
      `${import.meta.env.VITE_USERS}/changePassword`,
      data,
      {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      }
    );
    if (res.status === 202) {
      toast.success(res.data.message);
      return { success: true, data: res.data };
    }
  } catch (err) {
    toast.error(err.response.data?.message);
    return { success: false, error: err.response.data.message };
  }
};

export const updateProfile = async (formData, token) => {
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
      toast.success("Profile updated successfully");
      return { success: true, token: res.data.token };
    } else {
      toast.error("Failed to update profile");
      return { success: false, error: "Failed to update profile" };
    }
  } catch (err) {
    toast.error(err.response.data.message);
    return { success: false, error: err.response.data.message };
  }
};
