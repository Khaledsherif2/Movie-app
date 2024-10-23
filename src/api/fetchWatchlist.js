import axios from "axios";
import { toast } from "react-toastify";

export const fetchWatchlist = async (token) => {
  try {
    const res = await axios.get(`${import.meta.env.VITE_USERS}/watchlist`, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });
    if (res.status === 200) {
      return res.data.movies;
    }
  } catch (e) {
    toast.error(e.response.data.message);
    throw e.message;
  }
};
