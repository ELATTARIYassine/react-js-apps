import axios from 'axios';

const BASE_BACKEND_URL = "https://jsonplaceholder.typicode.com";

export default {
    getAllPhotos: () => axios.get(`${BASE_BACKEND_URL}/photos`)
}