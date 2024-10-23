import axios from "axios";
import { toast } from "react-toastify";

export const fetchPending = async (token) => {
  try {
    const res = await axios.get(
      `${import.meta.env.VITE_FETCH_MOVIES}/pending`,
      {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      }
    );
    if (res.status === 200) {
      return res.data.movies;
    }
  } catch (e) {
    toast.error(e.response.data.message);
    throw e.message;
  }
};
