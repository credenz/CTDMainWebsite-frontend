import axios from "axios";

const axiosInstance = axios.create({
    baseURL: "https://api.ctd.credenz.in/",
    // baseURL: "http://localhost:4000",
    withCredentials: true,
    headers: {
        'Content-Type': 'application/json',
    },
});

export default  axiosInstance;