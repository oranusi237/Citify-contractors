import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import reportWebVitals from './reportWebVitals';
import { Box, ChakraProvider } from '@chakra-ui/react';
import App from './App';
import UserAuthContextProvider from './Components/Store/UserContext';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Box className='app'>
      <ChakraProvider>
        <UserAuthContextProvider>
          <App />
        </UserAuthContextProvider>
      </ChakraProvider>
    </Box>
  </React.StrictMode>
);


// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
