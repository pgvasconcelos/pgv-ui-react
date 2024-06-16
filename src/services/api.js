import axios from "axios";

const api = axios.create({
      baseURL: 'https://strapi.pgv.services/api'

});
export default api;