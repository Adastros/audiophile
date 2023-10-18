import axios from 'axios';

const baseUrl = 'http://localhost:3003/api';

const getPageContent = async contentToRequest => {
  const response = await axios.get(`${baseUrl}/page/${contentToRequest}`);
  return response.data;
};

const postCheckoutForm = async data => {
  const response = await axios.post(`${baseUrl}/checkout-form`, data, {
    headers: {
      'Content-Type': 'application/x-www-form-urlencoded',
    },
  });

  console.log(response.data);
};

export { getPageContent, postCheckoutForm };
