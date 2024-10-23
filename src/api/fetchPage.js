import axios from "axios";
import { toast } from "react-toastify";

export const fetchPage = async (token, page, genre = "", search = "") => {
  try {
    const res = await axios.get(
      `${
        import.meta.env.VITE_FETCH_MOVIES
      }/pages?query=${search}&page=${page}&limit=10&genre=${genre}`,
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
