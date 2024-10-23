import axios from "axios";
import { toast } from "react-toastify";

export const AddToWatchlist = async (token, movieId) => {
  try {
    const res = await axios.post(
      `${import.meta.env.VITE_USERS}/watchlist/${movieId}`,
      {},
      {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      }
    );
    if (res.status === 200) {
      return res.data.message;
    }
  } catch (error) {
    toast.info(error.response.data.message);
    throw error;
  }
};
