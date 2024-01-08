import { createBrowserRouter } from 'react-router-dom';
import App from '../App';
import ErrorPage from '../pages/ErrorPage';
import HomePage from '../pages/HomePage';
import ProductCategoryPage from '../pages/ProductCategoryPage';
import ProductDetailPage from '../pages/ProductDetailPage';
import CheckoutPage from '../pages/CheckoutPage';
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
            index: true,
            element: <HomePage />,
            loader: () => getContent('homepage'),
          },
          {
            path: '/headphones',
            element: <ProductCategoryPage />,
            loader: () => getContent('headphones'),
          },
          {
            path: '/headphones/:productName',
            element: <ProductDetailPage />,
            loader: ({ params }) => {
              if (
                params.productName !== 'xx99markii' &&
                params.productName !== 'xx99marki' &&
                params.productName !== 'xx59'
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
            element: <ProductCategoryPage />,
            loader: () => getContent('speakers'),
          },
          {
            path: '/speakers/:productName',
            element: <ProductDetailPage />,
            loader: ({ params }) => {
              if (
                params.productName !== 'zx9' &&
                params.productName !== 'zx7'
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
            element: <ProductCategoryPage />,
            loader: () => getContent('earphones'),
          },
          {
            path: '/earphones/:productName',
            element: <ProductDetailPage />,
            loader: ({ params }) => {
              if (params.productName !== 'yx1wireless') {
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
