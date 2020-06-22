import axios from 'axios';

const BASE_BACKEND_URL = "https://jsonplaceholder.typicode.com";

export default {
    getAllPhotos: () => axios.get(`${BASE_BACKEND_URL}/photos`),
    addPhoto: (photo) => axios.post(`${BASE_BACKEND_URL}/photos`, photo),
    editPhoto: (id) => axios.get(`${BASE_BACKEND_URL}/photos/${id}`),
    updatePhoto: (photo) => axios.put(`${BASE_BACKEND_URL}/photos/${photo.id}`, photo),
    deletePhoto: (photoID) => axios.delete(`${BASE_BACKEND_URL}/photos/${photoID}`)
}