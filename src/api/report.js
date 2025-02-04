import API from './api';

// Report a missing person
export const reportMissingPerson = async (data) => {
  try {
    const response = await API.post('/report', data);
    return response.data;
  } catch (error) {
    throw error.response?.data || 'Error reporting missing person';
  }
};

// Search for a missing person
export const searchPerson = async (photo) => {
  try {
    const formData = new FormData();
    formData.append('photo', photo);

    const response = await API.post('/search', formData, {
      headers: { 'Content-Type': 'multipart/form-data' },
    });

    return response.data;
  } catch (error) {
    throw error.response?.data || 'Error searching for person';
  }
};
