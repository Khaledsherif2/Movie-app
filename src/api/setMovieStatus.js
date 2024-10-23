import axios from "axios";
import { toast } from "react-toastify";

export const setMovieStatus = async (token, id, status) => {
  try {
    const res = await axios.patch(
      `${import.meta.env.VITE_FETCH_MOVIES}/${id}/moderate`,
      { status },
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