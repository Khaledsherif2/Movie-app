import axios from "axios";
import { toast } from "react-toastify";

export const RemoveFromWatchlist = async (token, movieId) => {
  try {
    const res = await axios.delete(
      `${import.meta.env.VITE_USERS}/watchlist/${movieId}`,
      {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      }
    );
    if (res.status === 200) {
      return res.data.message;
    }
  } catch (e) {
    toast.error(e.response.data.message);
    throw e.message;
  }
};
