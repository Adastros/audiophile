import { ChakraProvider } from '@chakra-ui/react';
import React, { StrictMode } from 'react';
import * as ReactDOM from 'react-dom/client';
import { QueryClient, QueryClientProvider } from 'react-query';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import App from './App';
import reportWebVitals from './reportWebVitals';
// import * as serviceWorker from './serviceWorker';
import HomePage from './components/pages/home/HomePage';
import HeadphonesPage from './components/pages/headphones/HeadphonesPage';
import SpeakersPage from './components/pages/speakers/SpeakersPage';
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
        element: <HeadphonesPage />,
        loader: () => getContent('headphones'),
      },
      {
        path: '/speakers',
        element: <SpeakersPage />,
        loader: () => getContent('speakers'),
      },
    ],
  },
]);

root.render(
  <StrictMode>
    {/* <ColorModeScript /> */}
    <ChakraProvider theme={websiteTheme}>
      <QueryClientProvider client={queryClient}>
        <RouterProvider router={router}></RouterProvider>
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
