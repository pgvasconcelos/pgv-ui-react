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
     {console.log("%c Hello! This project was made using React.js + Tailwind CSS and Strapi as a CMS tool.','background: #222; color: #bada55; font-size: 22px;")}
    <App />
  </React.StrictMode>
);