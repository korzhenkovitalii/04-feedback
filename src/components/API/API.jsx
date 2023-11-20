import axios from 'axios';

const API_Key = '30192145-bc6bde8f91b5db4561ffa14da';
const BASE_URL = 'https://pixabay.com/api/';

export async function getPictures(query) {
  try {
    const response = await axios.get(`${BASE_URL}?key=${API_Key}&q=${query}`);
    return response.data.hits;
  } catch (error) {
    console.log(error);
  }
}
