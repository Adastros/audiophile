import axios from 'axios';

const baseUrl = '/api';

const getPageContent = async contentToRequest => {
  const response = await axios.get(`${baseUrl}/page/${contentToRequest}`);
  return response.data;
};

const postData = data => {
  axios.post(`${baseUrl}/checkout-form`, data);
};

export { getPageContent, postData };
