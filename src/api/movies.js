import axios from "axios";
import { toast } from "react-toastify";

export const getAllMovies = async (token) => {
  try {
    const res = await axios.get(
      `${import.meta.env.VITE_FETCH_MOVIES}/getAllMovies`,
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
    throw e;
  }
};

export const getMovie = async (token, movieId) => {
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

export const addMovie = async (token, newMovie, setUploadProgress) => {
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

export const moderateMovies = async (token, id, status) => {
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
      console.log(res.data.message);
      return res.data.message;
    }
  } catch (e) {
    if (e.response && e.response.status === 403) {
      toast.info(e.response.data.message);
      return;
    } else {
      toast.error(e.response?.data?.message || "An unexpected error occurred");
      throw e;
    }
  }
};

export const deleteMovie = async (token, movieId) => {
  try {
    const res = await axios.delete(
      `${import.meta.env.VITE_FETCH_MOVIES}/${movieId}`,
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
    throw e;
  }
};

export const getPendingMovies = async (token) => {
  try {
    const res = await axios.get(
      `${import.meta.env.VITE_FETCH_MOVIES}/pending`,
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

export const searchMovies = async (token, search = "", page) => {
  try {
    const res = await axios.get(
      `${
        import.meta.env.VITE_FETCH_MOVIES
      }/search?query=${search}&page=${page}`,
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

export const getPopularMovies = async (token, limit) => {
  try {
    const res = await axios.get(
      `${import.meta.env.VITE_FETCH_MOVIES}/popular?limit=${limit}`,
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
    throw e;
  }
};

export const getTopRatedMovies = async (token) => {
  try {
    const res = await axios.get(
      `${import.meta.env.VITE_FETCH_MOVIES}/top-rated`,
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

export const getPage = async (token, page, genre = "", search = "") => {
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

export const getRecommendations = async (token) => {
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
