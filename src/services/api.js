import axios from "axios";

const api = axios.create({
         //baseURL: process.env.NEXT_PUBLIC_STRAPI_URL_API
      baseURL: 'https://beer2.me/pgv'
      //  baseURL: 'https:beer2.me:1337/api'

});
export default api;