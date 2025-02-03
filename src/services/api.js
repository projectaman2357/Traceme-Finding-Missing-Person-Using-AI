import axios from 'axios';

export const uploadImage = async (formData) => {
  try {
    const response = await axios.post('http://localhost:5000/api/missing/add', formData, {
      headers: {
        'Content-Type': 'multipart/form-data',
      },
    });
    return response.data;
  } catch (error) {
    throw error;
  }
};
