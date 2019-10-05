import axios from "axios";

const api = axios.create({
    baseURL: "https://backend-omnistack.herokuapp.com/"
})

export default api;