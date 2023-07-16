import axios from 'axios';

const baseUrl = 'http://localhost:3003/api';

const getPageContent = async (contentToRequest) => {
  const response = await axios.get(`${baseUrl}/page/${contentToRequest}`);
  return response.data;
};

export { getPageContent };
