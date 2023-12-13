import axios from 'axios';

const axiosAku = axios.create({
	baseURL: 'https://swapi.dev/api/',
});

export default axiosAku;
