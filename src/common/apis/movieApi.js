import axios from 'axios';
import { APIKey } from "./MovieApiKey";
import {APIHost } from "./ApiHost"
const axiosInstance = axios.create({
  baseURL: "https://moviesdatabase.p.rapidapi.com/",
  // baseURL:'moviesdatabase.p.rapidapi.com/',
  headers: {
    'x-rapidapi-host': APIHost,
    'x-rapidapi-key': APIKey,
    'Content-Type': 'application/json'
  }
});

export default axiosInstance;