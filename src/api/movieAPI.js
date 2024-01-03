import axios from "axios";

axios.defaults.baseURL = 'https://api.themoviedb.org';
const API_KEY = 'd4d4416739cee27326bae8c40ffd5cc5';

const searchParams = new URLSearchParams({
  key: API_KEY,
});

