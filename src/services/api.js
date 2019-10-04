import axios from "axios";

const api = axios.create({
    baseUrl: "localhost:3000"
})

export default api;