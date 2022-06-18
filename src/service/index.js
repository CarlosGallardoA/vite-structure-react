import axios from "axios";
import { BASE_URL } from "./global";

export const getData = async (url) => {
  try {
    const response = await axios.get(`${BASE_URL}${url}`);
    return response.data;
  } catch (error) {
    console.log(error);
  }
};
export const getDataById = async (url, id) => {
  try {
    const response = await axios.get(`${BASE_URL}${url}/${id}`);
    return response.data;
  } catch (error) {
    console.log(error);
  }
};
export const storeData = async (url, data) => {
  try {
    const response = await axios.post(`${BASE_URL}${url}`, data);
    return response.data;
  } catch (error) {
    console.log(error);
  }
};
export const updateData = async (url, data) => {
  try {
    const response = await axios.put(`${BASE_URL}${url}`, data);
    return response.data;
  } catch (error) {
    console.log(error);
  }
};
export const deleteData = async (url, id) => {
  try {
    const response = await axios.delete(`${BASE_URL}${url}/${id}`);
    return response.data;
  } catch (error) {
    console.log(error);
  }
};
