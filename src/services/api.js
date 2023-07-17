import axios from "axios";

const api = axios.create({
      baseURL: 'https://beer2.me/pgv/api'

});
export default api;