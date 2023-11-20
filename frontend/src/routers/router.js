import { createBrowserRouter } from 'react-router-dom';
import App from '../App';
import ErrorPage from '../components/pages/error/ErrorPage';
import HomePage from '../components/pages/home/HomePage';
import BaseProductCategoryPage from '../components/shared/baseProductCategoryPage.js/BaseProductCategoryPage';
import ProductDetailPage from '../components/pages/productDetail/ProductDetailPage';
import CheckoutPage from '../components/checkout/CheckoutPage';
import { getContent } from '../utils/helper';

const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    errorElement: <ErrorPage />,
    loader: async () => {
      return await Promise.all([
        getContent('header'),
        getContent('closing'),
        getContent('footer'),
        getContent('demoData'),
      ]);
    },
    children: [
      {
        errorElement: <ErrorPage />,
        children: [
          {
            path: '/',
            element: <HomePage />,
            loader: () => getContent('homepage'),
          },
          {
            path: '/headphones',
            element: <BaseProductCategoryPage />,
            loader: () => getContent('headphones'),
          },
          {
            path: '/headphones/:productName',
            element: <ProductDetailPage />,
            loader: ({ params }) => {
              if (
                params.productName !== 'XX99MarkII' &&
                params.productName !== 'XX99MarkI' &&
                params.productName !== 'XX59'
              ) {
                throw new Response('', {
                  status: 404,
                  statusText: 'Not Found',
                });
              }

              return getContent(params.productName);
            },
          },
          {
            path: '/speakers',
            element: <BaseProductCategoryPage />,
            loader: () => getContent('speakers'),
          },
          {
            path: '/speakers/:productName',
            element: <ProductDetailPage />,
            loader: ({ params }) => {
              if (
                params.productName !== 'ZX9' &&
                params.productName !== 'ZX7'
              ) {
                throw new Response('', {
                  status: 404,
                  statusText: 'Not Found',
                });
              }

              return getContent(params.productName);
            },
          },
          {
            path: '/earphones',
            element: <BaseProductCategoryPage />,
            loader: () => getContent('earphones'),
          },
          {
            path: '/earphones/:productName',
            element: <ProductDetailPage />,
            loader: ({ params }) => {
              if (params.productName !== 'YX1Wireless') {
                throw new Response('', {
                  status: 404,
                  statusText: 'Not Found',
                });
              }

              return getContent(params.productName);
            },
          },
          {
            path: '/checkout',
            element: <CheckoutPage />,
            loader: () => getContent('checkout'),
          },
          {
            path: '*',
            element: <ErrorPage />,
          },
        ],
      },
    ],
  },
]);

export default router;
