import axios from "axios";
import { toast } from "react-toastify";

export const addToWatchlist = async (token, movieId) => {
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

export const removeFromWatchlist = async (token, movieId) => {
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

export const getWatchlist = async (token) => {
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
