import axios from "axios";

export const axiosPage = axios.create({
  baseURL: "http://pets-v2.dev-apis.com/pets?animal",
});

export const getPostsPage = async (pageParam = 1) => {
  const response = await axiosPage.get(`&page=${pageParam}`);
  return response.data;
};
