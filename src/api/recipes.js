import axios from 'axios';

const API_URL = 'https://cookscorner-production-9502.up.railway.app/api/v1';

//  recipe API functions
export const fetchRecipes = () => axios.get(`${API_URL}/recipes`);