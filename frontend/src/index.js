import { ChakraProvider } from '@chakra-ui/react';
import React, { StrictMode } from 'react';
import * as ReactDOM from 'react-dom/client';
import { QueryClient, QueryClientProvider } from 'react-query';
import { RouterProvider } from 'react-router-dom';
import { Provider } from 'react-redux';
// import reportWebVitals from './reportWebVitals';
// import * as serviceWorker from './serviceWorker';
import store from './utils/store';
import router from './routers/router';
import websiteTheme from './theme';
import './index.css';

const container = document.getElementById('root');
const root = ReactDOM.createRoot(container);
const queryClient = new QueryClient();

root.render(
  <StrictMode>
    <ChakraProvider theme={websiteTheme}>
      <QueryClientProvider client={queryClient}>
        <Provider store={store}>
          <RouterProvider router={router} />
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
// reportWebVitals();
