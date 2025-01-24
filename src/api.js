import axios from "axios";

const API = axios.create({ baseURL: "http://localhost:5000/api" });

export const addAnonymousData = (data) => API.post("/anonymous", data);
export const getAnonymousData = () => API.get("/anonymous");
