import axios from "axios";
const apiEndpoint = "http://localhost:5000/posts/";

export const fetchPost = async () => {
  return await axios.get(apiEndpoint);
}

export const createPost = async (post) => {
  return await axios.post(apiEndpoint, post);
}

export const fetchSinglePost = async (id) => {
  return await axios.get(`${apiEndpoint}${id}`);
}

export const deletePost = async (id) => {
  return await axios.delete(`${apiEndpoint}${id}`)
}

export const updatePost = async (id, post) => {
  return await axios.patch(`${apiEndpoint}${id}`, post);
}