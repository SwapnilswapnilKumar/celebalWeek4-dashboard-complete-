import ReactDOM from 'react-dom/client';  
import React from 'react';


import './index.css';
import App from './App';
import { ContextProvider } from './contexts/ContextProvider';



ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <ContextProvider>
      <App />
    </ContextProvider>
  </React.StrictMode>
);

console.log("this si main.jsx, checking is working properly")
