import axios from 'axios';

const Axios = axios.create({
  baseURL: 'http://127.0.0.1:8000', 
  headers: {
    'Content-Type': 'application/json',
   
  },
  timeout: 10000, 
});














Axios.interceptors.request.use(
  (config) => {
    
    return config;
  },
  (error) => {
    
    return Promise.reject(error);
  }
);


Axios.interceptors.response.use(
  (response) => {
 
    return response;
  },
  (error) => {
    
    return Promise.reject(error);
  }
);

export default Axios;
