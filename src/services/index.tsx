import axios from '../lib/Axios'
import React from 'react';
 
const usePostAnimals = (data:any) => {
 
       return axios.post(`/api/animales`,data)

}
 
export {usePostAnimals}
