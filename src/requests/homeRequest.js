import axios from 'axios';

const homeRequest = async () => {
  try {
    const response = await axios.get(process.env.REACT_APP_API_HOME);
    return response.data;
  } catch (error) {
    throw new Error(error);
  }
};

export default homeRequest;
