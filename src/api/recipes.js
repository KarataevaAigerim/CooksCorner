import axios from 'axios';

const API_URL = 'https://cookscorner-production-9502.up.railway.app/api/v1';

//  recipe API functions
export const fetchRecipes = () => axios.get(`${API_URL}/recipes`);


// Function to fetch recipes by category with Token
export const fetchRecipesByCategory = (category, token) => 
    axios.get(`${API_URL}/recipes/by-category/${category.toUpperCase()}`, {
        headers: {
            'Authorization': `Bearer ${token}`,
            'Accept': 'application/json'
        }
    });