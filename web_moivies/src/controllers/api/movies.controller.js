import api from "./api";

export const getMovies = async () => {
  try {
    const response = await api.get('movies');
    console.log(response);
    return response.data;
  } catch (error) {
    console.error('Error fetching movies:', error);
    throw error;
  }
};