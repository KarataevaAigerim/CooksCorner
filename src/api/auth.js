import axios from 'axios';

const API_URL = 'https://cookscorner-production-9502.up.railway.app/api/v1';

export const register = (data) => axios.post(`${API_URL}/registration`, data);
export const login = (data) => axios.post(`${API_URL}/login`, data);
export const refreshToken = (token) => axios.post(`${API_URL}/refresh-token`, { token });
export const confirmRegistration = (token) => axios.get(`${API_URL}/registration/confirmation`, {
  params: { token }
});
export const logout = () => axios.get(`${API_URL}/logout`);