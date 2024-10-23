import axios from "axios";
import { toast } from "react-toastify";

export const fetchRecommendations = async (token) => {
  try {
    const res = await axios.get(
      `${import.meta.env.VITE_FETCH_MOVIES}/recommendations`,
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
