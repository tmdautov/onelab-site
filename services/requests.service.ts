import axios from "axios";

const baseUrl = "https://oneshop-back.herokuapp.com";
export const instance = axios.create({
  baseURL: baseUrl,
  headers: {
    "Access-Control-Allow-Origin": "*",
    "Access-Control-Allow-Methods": "GET,PUT,POST,DELETE,PATCH,OPTIONS",
    "Content-Type": "application/json",
  },
});

export const RequestsService = {
  post: (request) => instance.post("/requests", request),
};
