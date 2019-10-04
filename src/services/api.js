import axios from "axios";

//baseUrl: "localhost:3000",
const api = axios.create({
    baseURL: "https://node-js-yesy12.codeanyapp.com"
})

export default api;