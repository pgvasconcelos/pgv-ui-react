import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import './i18n'

import TagManager from 'react-gtm-module'

const tagManagerArgs = {
    gtmId: 'GTM-KX8ZWNV'
}

TagManager.initialize(tagManagerArgs)

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
 
  <React.StrictMode>
     {console.log('%c Hello! If want to know if this is a template. The answer is NO. This is a small project that i did using React.js and Tailwind CSS. The backend is powered by Strapi.','background: #222; color: #bada55; font-size: 22px;')}
    <App />
  </React.StrictMode>
);