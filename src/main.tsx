import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.tsx'
import { BrowserRouter } from 'react-router-dom'
import 'normalize.css';
import { ConfigProvider } from 'antd';
import theme from './theme/index.tsx';
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
// main.ts
import "virtual:uno.css";
window.toast = toast;
ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <React.StrictMode>
    <ConfigProvider theme={theme}>
      <BrowserRouter>
        <App />
        <ToastContainer />
      </BrowserRouter>
    </ConfigProvider>
  </React.StrictMode>,
);
