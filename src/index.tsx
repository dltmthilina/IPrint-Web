import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

const root = ReactDOM.createRoot(document.getElementById('root') as HTMLElement);
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

// Defer web vitals so they don't block initial interaction
if (typeof requestIdleCallback !== 'undefined') {
  requestIdleCallback(() => reportWebVitals());
} else {
  setTimeout(reportWebVitals, 2000);
}
