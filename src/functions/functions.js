// functions.js
import axios from 'axios';

export const fetchDataFromAPI = async () => {
  try {
    const response = await axios.get('https://covid19-brazil-api.now.sh/api/report/v1/countries');
    return response.data;
  } catch (error) {
    console.error('Error fetching data:', error);
    throw error;
  }
};

export const fetchDataFromAPIFlag = async () => {
  try {
    const response = await axios.get('https://restcountries.com/v3.1/all');
    return response.data;
  } catch (error) {
    console.error('Error fetching data:', error);
    throw error;
  }
};

