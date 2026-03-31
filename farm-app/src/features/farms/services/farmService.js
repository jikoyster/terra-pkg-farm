import axios from "axios";

const API_URL = "http://localhost:5000/api/farms";

export const getFarms = async () => {
  const res = await axios.get(API_URL);
  return res.data;
};

export const getFarmById = async (id) => {
  const res = await axios.get(`${API_URL}/${id}`);
  return res.data;
};

export const createFarm = async (data) => {
  const res = await axios.post(API_URL, data);
  return res.data;
};

export const updateFarm = async (id, data) => {
  const res = await axios.put(`${API_URL}/${id}`, data);
  return res.data;
};

export const deleteFarm = async (id) => {
  const res = await axios.delete(`${API_URL}/${id}`);
  return res.data;
};