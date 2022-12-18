import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import App from './App';
import { AuthProvider } from './Contexts/AuthContext';
import { ProductProvider } from './Contexts/ProductContext';
import { UserProvider } from './Contexts/UserContext';
import reportWebVitals from './reportWebVitals';
import GlobalStyles from './styles/GlobalStyles';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <React.StrictMode>
    <GlobalStyles/>
    <BrowserRouter>
      <ProductProvider>
        <AuthProvider>
          <UserProvider>
              <App />
          </UserProvider>
        </AuthProvider>
      </ProductProvider>
    </BrowserRouter>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
