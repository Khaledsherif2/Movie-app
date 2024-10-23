import axios from "axios";
import { toast } from "react-toastify";

export const AddMovie = async (token, newMovie, setUploadProgress) => {
  try {
    const res = await axios.post(
      `${import.meta.env.VITE_FETCH_MOVIES}/movie`,
      newMovie,
      {
        headers: {
          Authorization: `Bearer ${token}`,
        },
        onUploadProgress: (progressEvent) => {
          const progress = Math.round(
            (progressEvent.loaded * 100) / progressEvent.total
          );
          setUploadProgress(progress);
        },
      }
    );
    if (res.status === 201) {
      return res.data.message;
    } else {
      throw new Error("Failed to create the movie");
    }
  } catch (e) {
    toast.error(e.response.data.message);
    throw e;
  }
};
