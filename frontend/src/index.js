import { ChakraProvider } from '@chakra-ui/react';
import React, { StrictMode } from 'react';
import * as ReactDOM from 'react-dom/client';
import { QueryClient, QueryClientProvider } from 'react-query';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import { Provider } from 'react-redux';
import { configureStore } from '@reduxjs/toolkit';
import App from './App';
import reportWebVitals from './reportWebVitals';
// import * as serviceWorker from './serviceWorker';
import HomePage from './components/pages/home/HomePage';
import BaseProductCategoryPage from './components/shared/baseProductCategoryPage.js/BaseProductCategoryPage';
import ProductDetailPage from './components/pages/productDetail/ProductDetailPage';
import cartReducer from './reducers/cartReducer';
import { getContent } from './utils/helper';
import websiteTheme from './theme';
import './index.css';

const container = document.getElementById('root');
const root = ReactDOM.createRoot(container);
const queryClient = new QueryClient();

const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    errorElement: <div>Error! Page failed to load</div>,
    loader: async () => {
      return await Promise.all([
        getContent('header'),
        getContent('closing'),
        getContent('footer'),
      ]);
    },
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
          if (params.productName !== 'ZX9' && params.productName !== 'ZX7') {
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
    ],
  },
]);

const store = configureStore({
  reducer: {
    cart: cartReducer,
  },
});

root.render(
  <StrictMode>
    {/* <ColorModeScript /> */}
    <ChakraProvider theme={websiteTheme}>
      <QueryClientProvider client={queryClient}>
        <Provider store={store}>
          <RouterProvider router={router}></RouterProvider>
        </Provider>
      </QueryClientProvider>
    </ChakraProvider>
  </StrictMode>
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://cra.link/PWA
// serviceWorker.unregister();

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
