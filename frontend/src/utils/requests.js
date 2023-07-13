import axios from 'axios';

const baseUrl = "http://localhost:3003/api";

const getPageData = async () => {
  const response = await axios.get(`${baseUrl}/page/homepage`);
  return response.data;
};

export { getPageData };
