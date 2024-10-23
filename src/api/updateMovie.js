import axios from "axios";
import { toast } from "react-toastify";

export const updateMovie = async (token, movieId, data) => {
  try {
    const res = await axios.put(
      `${import.meta.env.VITE_FETCH_MOVIES}/${movieId}`,
      data,
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
