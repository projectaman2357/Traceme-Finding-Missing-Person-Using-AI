import API from './api';

// User login
export const login = async (email, password) => {
  try {
    const response = await API.post('/auth/login', { email, password });
    return response.data;
  } catch (error) {
    throw error.response?.data || 'Login failed';
  }
};

// User signup
export const signup = async (userData) => {
  try {
    const response = await API.post('/auth/signup', userData);
    return response.data;
  } catch (error) {
    throw error.response?.data || 'Signup failed';
  }
};

// Logout (Clears token)
export const logout = () => {
  localStorage.removeItem('token');
};
