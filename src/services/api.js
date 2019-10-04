import axios from "axios";

//baseUrl: "https://node-js-yesy12.codeanyapp.com",
const api = axios.create({
    baseURL: "http://127.0.0.1:3000/"
})

export default api;