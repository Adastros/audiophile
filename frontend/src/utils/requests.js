import axios from 'axios';

const baseUrl = process.env.LOCAL_BACKEND_BASE_URL;

const getPageData = async () => {
  const response = await axios.get(`${baseUrl}/page/homepage`);
  return response.data;
};

export { getPageData };
