import api from "./api";

 export const getCategories = async () => {
  let res = await api.get('categories');

  if (!res) {
    throw new Error('No response from API');
  }

  if (!res.data) {
    throw new Error('No data in API response');
  }

  return res.data;
};
