import axios from "axios";

const GlobalBaseURL = axios.create({
  baseURL: "http://localhost:5005",
});

export { GlobalBaseURL };
