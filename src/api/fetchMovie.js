import axios from "axios";
import { toast } from "react-toastify";

export const fetchMovie = async (token, movieId) => {
  try {
    const res = await axios.get(
      `${import.meta.env.VITE_FETCH_MOVIES}/movie/${movieId}`,
      {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      }
    );
    if (res.status === 200) {
      return res.data.movie;
    }
  } catch (e) {
    toast.error(e.response.data.message);
    throw e;
  }
};