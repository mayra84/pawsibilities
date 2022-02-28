import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { BrowserRouter } from 'react-router-dom';
import { ChakraProvider, extendTheme } from '@chakra-ui/react'
import { Provider } from 'react-redux';
import store from './redux/store';

const theme = extendTheme({
  colors: {
    brand: {
      100: "#006D77",
      200: "#83C5BE",
      300: "#EDF6F9",
      400: "#FFDDD2",
      500: "#E29578",
      101: "#0081A7",
      201: "#00828a",
      301: "#FDFCDC",
      401: "#FED9B7",
      501: "#F07167"
    },
  },
  styles: {
    global: {
      // styles for the `body`
      body: {
        backgroundImage: './colorful_background_5.png',
        backgroundSize: 'cover',
        height: '100vh',
        width: 'full',
        top: '0',
        left: '0',
        // bg: '../colorful_background.jpeg',
        // color: 'black',
      },
    },
  }
})

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <BrowserRouter>
        <ChakraProvider theme={theme}>
          <App />
        </ChakraProvider>
      </BrowserRouter>
    </Provider>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
